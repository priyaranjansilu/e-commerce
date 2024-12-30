package com.ecommerce.demo.controller;



import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ecommerce.demo.Service.CartService;
import com.ecommerce.demo.Service.DashCartService;
import com.ecommerce.demo.Service.DashCartService2;
import com.ecommerce.demo.model.CartItem;
import com.ecommerce.demo.model.CartItemDto;
import com.ecommerce.demo.model.DashboardItem;
import com.ecommerce.demo.model.DashcartitemDto;
import com.ecommerce.demo.repository.DashboardItemRepository;

import jakarta.validation.Valid;

//import javax.validation.Valid;

@RestController
@RequestMapping("/dashcart")
public class DashcartController {

    @Autowired
    private DashCartService cartService;


    @Autowired
    private DashCartService2 cartService2;
    @PostMapping("/add")
    public String addToCart(@Valid @RequestBody DashcartitemDto cartItem) {
        cartService.saveItem(cartItem);
        return "Item added to cart successfully!";
    }
    
    @GetMapping("/items")
    public List<DashboardItem> getCartItems() {
        return cartService.getAllCartItems();
    }
    @PostMapping("/remove")
    public ResponseEntity<String> removeItemFromCart(@RequestBody Map<String, String> payload) {
        String title = payload.get("title");
//        System.out.println("Removing item with title: " + title); // Debugging log
        try {
        	cartService2.removeItemByTitle(title);
            return ResponseEntity.ok("Item removed from cart successfully.");
        } catch (Exception e) {
            e.printStackTrace(); // Log the exception
            return ResponseEntity.status(500).body("Failed to remove item from cart.");
        }
    }

    
}


