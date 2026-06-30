package com.devworks.service;

import com.devworks.dto.PaymentIntentRequestDto;
import com.devworks.dto.PaymentIntentResponseDto;

public interface IPaymentService {

  PaymentIntentResponseDto createPaymentIntent(PaymentIntentRequestDto requestDto);
}
