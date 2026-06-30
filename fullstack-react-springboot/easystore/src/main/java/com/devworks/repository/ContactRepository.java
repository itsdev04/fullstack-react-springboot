package com.devworks.repository;

import com.devworks.entity.Contact;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ContactRepository extends JpaRepository<Contact, Long> {

  List<Contact> findByStatus(String status);

  @Query(name = "Contact.findByStatus")
  List<Contact> fetchByStatus(String status);

  List<Contact> findByStatusWithNativeQuery(String status);
}
