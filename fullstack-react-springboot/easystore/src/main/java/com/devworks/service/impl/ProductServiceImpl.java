package com.devworks.service.impl;

import com.devworks.dto.ProductDto;
import com.devworks.entity.Product;
import com.devworks.repository.ProductRepository;
import com.devworks.service.IProductService;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements IProductService {

  private final ProductRepository productRepository;

  @Cacheable("products")
  @Override
  public List<ProductDto> getProducts() {
    return productRepository.findAll().stream()
        .map(this::transformToDTO)
        .collect(Collectors.toList());
  }

  private ProductDto transformToDTO(Product product) {
    ProductDto productDto = new ProductDto();
    BeanUtils.copyProperties(product, productDto);
    productDto.setProductId(product.getId());
    return productDto;
  }
}
