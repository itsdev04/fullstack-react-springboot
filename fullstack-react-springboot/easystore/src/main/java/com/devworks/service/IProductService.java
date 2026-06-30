package com.devworks.service;

import com.devworks.dto.ProductDto;
import java.util.List;

public interface IProductService {

  List<ProductDto> getProducts();
}
