package com.ecommerce.demo.controller;

//package com.ecommerce.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.ecommerce.demo.model.User;
import com.ecommerce.demo.repository.UserRepository;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public String registerUser(@RequestBody User user) {
        int rows = userRepository.saveUser(user);
        return rows > 0 ? "User registered successfully!" : "Registration failed!";
    }
    
    @PostMapping("/login")
    public String loginUser(@RequestParam String username, @RequestParam String password, HttpSession session) {
        User user = userRepository.findByUsernameAndPassword(username, password);
        if (user != null) {
            session.setAttribute("user", user); // Save user info in session if needed
            return "success";
        }
        return "Invalid username or password!";
    }

    @GetMapping("/user")
    public User getSessionUser(HttpSession session) {
        return (User) session.getAttribute("user");
    }

}

