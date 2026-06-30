package com.devworks.service.impl;

import com.devworks.constants.ApplicationConstants;
import com.devworks.dto.ContactRequestDto;
import com.devworks.dto.ContactResponseDto;
import com.devworks.entity.Contact;
import com.devworks.exception.ResourceNotFoundException;
import com.devworks.repository.ContactRepository;
import com.devworks.service.IContactService;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContactServiceImpl implements IContactService {

  private final ContactRepository contactRepository;

  @Override
  public boolean saveContact(ContactRequestDto contactRequestDto) {
    Contact contact = transformToEntity(contactRequestDto);
    contactRepository.save(contact);
    return true;
  }

  @Override
  public List<ContactResponseDto> getAllOpenMessages() {
    List<Contact> contacts = contactRepository.fetchByStatus(ApplicationConstants.OPEN_MESSAGE);
    return contacts.stream().map(this::mapToContactResponseDTO).collect(Collectors.toList());
  }

  @Override
  public void updateMessageStatus(Long contactId, String status) {
    Contact contact =
        contactRepository
            .findById(contactId)
            .orElseThrow(
                () -> new ResourceNotFoundException("Contact", "ContactID", contactId.toString()));
    contact.setStatus(status);
    contactRepository.save(contact);
  }

  private ContactResponseDto mapToContactResponseDTO(Contact contact) {
    ContactResponseDto responseDTO =
        new ContactResponseDto(
            contact.getContactId(),
            contact.getName(),
            contact.getEmail(),
            contact.getMobileNumber(),
            contact.getMessage(),
            contact.getStatus());
    return responseDTO;
  }

  private Contact transformToEntity(ContactRequestDto contactRequestDto) {
    Contact contact = new Contact();
    BeanUtils.copyProperties(contactRequestDto, contact);
    contact.setStatus(ApplicationConstants.OPEN_MESSAGE);
    return contact;
  }
}
