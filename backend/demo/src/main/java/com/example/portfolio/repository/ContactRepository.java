package com.example.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.portfolio.model.ContactMessage;

public interface ContactRepository extends JpaRepository<ContactMessage, Long> {
}
