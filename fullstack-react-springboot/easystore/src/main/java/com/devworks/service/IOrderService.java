package com.devworks.service;

import com.devworks.dto.OrderRequestDto;
import com.devworks.dto.OrderResponseDto;
import java.util.List;

public interface IOrderService {

  void createOrder(OrderRequestDto orderRequest);

  List<OrderResponseDto> getCustomerOrders();

  List<OrderResponseDto> getAllPendingOrders();

  void updateOrderStatus(Long orderId, String orderStatus);
}
