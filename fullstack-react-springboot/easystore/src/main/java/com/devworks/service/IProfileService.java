package com.devworks.service;

import com.devworks.dto.ProfileRequestDto;
import com.devworks.dto.ProfileResponseDto;

public interface IProfileService {

  ProfileResponseDto getProfile();

  ProfileResponseDto updateProfile(ProfileRequestDto profileRequestDto);
}
