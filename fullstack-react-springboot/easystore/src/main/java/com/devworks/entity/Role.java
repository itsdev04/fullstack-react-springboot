package com.devworks.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "roles")
public class Role extends BaseEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "role_id", nullable = false)
  private Long roleId;

  @Size(max = 50)
  @NotNull
  @Column(name = "name", nullable = false, length = 50)
  private String name;

  @ManyToMany(mappedBy = "roles")
  private Set<Customer> customers = new LinkedHashSet<>();

  public Long getRoleId() {
    return roleId;
  }

  public void setRoleId(Long roleId) {
    this.roleId = roleId;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Set<Customer> getCustomers() {
    return customers;
  }

  public void setCustomers(Set<Customer> customers) {
    this.customers = customers;
  }
}
