package com.devworks.service;

import com.devworks.dto.ContactRequestDto;
import com.devworks.dto.ContactResponseDto;
import java.util.List;

public interface IContactService {

  boolean saveContact(ContactRequestDto contactRequestDto);

  List<ContactResponseDto> getAllOpenMessages();

  void updateMessageStatus(Long contactId, String status);
}
