package com.devworks.dto;

public record LoginResponseDto(String message, UserDto user, String jwtToken) {}
