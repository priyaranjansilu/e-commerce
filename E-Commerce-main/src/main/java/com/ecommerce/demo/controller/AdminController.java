package com.ecommerce.demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.demo.model.Admin;
import com.ecommerce.demo.repository.AdminRepository;

@RestController
@RequestMapping("/api")
public class AdminController {

    private final AdminRepository adminRepository;

    public AdminController(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    @PostMapping("/admin")
    public ResponseEntity<String> login(@RequestParam String username, @RequestParam String password) {
        Admin admin = adminRepository.findByUsernameAndPassword(username, password);
        if (admin != null) {
            return ResponseEntity.ok("success");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    }
}

