package com.ecommerce.demo.controller;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/payment")
public class PaymentController {

    @PostMapping("/process")
    public Map<String, String> processPayment(@RequestBody Map<String, String> paymentDetails) {
        String paymentMethod = paymentDetails.get("paymentMethod");

        // Log the payment details
        System.out.println("Processing Payment: " + paymentDetails);

        Map<String, String> response = new HashMap<>();

        switch (paymentMethod) {
            case "card":
                response.put("message", "Card payment successful!");
                break;
            case "upi":
                response.put("message", "UPI payment successful!");
                break;
            case "cod":
                response.put("message", "Cash on Delivery selected!");
                break;
            default:
                response.put("message", "Invalid payment method!");
        }

        return response;
    }

  
}

