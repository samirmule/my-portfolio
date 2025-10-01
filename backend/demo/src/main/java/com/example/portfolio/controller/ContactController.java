package com.example.portfolio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.portfolio.model.ContactMessage;
import com.example.portfolio.repository.ContactRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @PostMapping("/sendMessage")
    public String sendMessage(@RequestBody ContactMessage contact) {
        contactRepository.save(contact);
        return "Message sent successfully!";
    }
}
