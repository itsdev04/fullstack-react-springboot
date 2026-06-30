package com.devworks.repository;

import com.devworks.entity.Customer;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

  Optional<Customer> findByEmail(String email);

  Optional<Customer> findByEmailOrMobileNumber(String email, String mobileNumber);
}
