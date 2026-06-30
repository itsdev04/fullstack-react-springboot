package com.devworks.service.impl;

import com.devworks.constants.ApplicationConstants;
import com.devworks.dto.OrderItemReponseDto;
import com.devworks.dto.OrderRequestDto;
import com.devworks.dto.OrderResponseDto;
import com.devworks.entity.Customer;
import com.devworks.entity.Order;
import com.devworks.entity.OrderItem;
import com.devworks.entity.Product;
import com.devworks.exception.ResourceNotFoundException;
import com.devworks.repository.OrderRepository;
import com.devworks.repository.ProductRepository;
import com.devworks.service.IOrderService;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements IOrderService {

  private final OrderRepository orderRepository;
  private final ProductRepository productRepository;
  private final ProfileServiceImpl profileService;

  @Override
  public void createOrder(OrderRequestDto orderRequest) {
    Customer customer = profileService.getAuthenticatedCustomer();
    // Create Order
    Order order = new Order();
    order.setCustomer(customer);
    BeanUtils.copyProperties(orderRequest, order);
    order.setOrderStatus(ApplicationConstants.ORDER_STATUS_CREATED);
    // Map OrderItems
    List<OrderItem> orderItems =
        orderRequest.items().stream()
            .map(
                item -> {
                  OrderItem orderItem = new OrderItem();
                  orderItem.setOrder(order);
                  Product product =
                      productRepository
                          .findById(item.productId())
                          .orElseThrow(
                              () ->
                                  new ResourceNotFoundException(
                                      "Product", "ProductID", item.productId().toString()));
                  orderItem.setProduct(product);
                  orderItem.setQuantity(item.quantity());
                  orderItem.setPrice(item.price());
                  return orderItem;
                })
            .collect(Collectors.toList());
    order.setOrderItems(orderItems);
    orderRepository.save(order);
  }

  @Override
  public List<OrderResponseDto> getCustomerOrders() {
    Customer customer = profileService.getAuthenticatedCustomer();
    List<Order> orders =
        orderRepository.findOrdersByCustomerWithNativeQuery(customer.getCustomerId());
    return orders.stream().map(this::mapToOrderResponseDTO).collect(Collectors.toList());
  }

  @Override
  public List<OrderResponseDto> getAllPendingOrders() {
    List<Order> orders =
        orderRepository.findOrdersByStatusWithNativeQuery(
            ApplicationConstants.ORDER_STATUS_CREATED);
    return orders.stream().map(this::mapToOrderResponseDTO).collect(Collectors.toList());
  }

  @Override
  public void updateOrderStatus(Long orderId, String orderStatus) {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    String email = authentication.getName();
    orderRepository.updateOrderStatus(orderId, orderStatus, email);
  }

  /** Map Order entity to OrderResponseDto */
  private OrderResponseDto mapToOrderResponseDTO(Order order) {
    // Map Order Items
    List<OrderItemReponseDto> itemDTOs =
        order.getOrderItems().stream()
            .map(this::mapToOrderItemResponseDTO)
            .collect(Collectors.toList());
    OrderResponseDto orderResponseDto =
        new OrderResponseDto(
            order.getOrderId(),
            order.getOrderStatus(),
            order.getTotalPrice(),
            order.getCreatedAt().toString(),
            itemDTOs);
    return orderResponseDto;
  }

  /** Map OrderItem entity to OrderItemResponseDto */
  private OrderItemReponseDto mapToOrderItemResponseDTO(OrderItem orderItem) {
    OrderItemReponseDto itemDTO =
        new OrderItemReponseDto(
            orderItem.getProduct().getName(), orderItem.getQuantity(),
            orderItem.getPrice(), orderItem.getProduct().getImageUrl());
    return itemDTO;
  }
}
