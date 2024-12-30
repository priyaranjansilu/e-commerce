package com.ecommerce.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ecommerce.demo.Service.CartService;
import com.ecommerce.demo.model.CartItem;
import com.ecommerce.demo.model.CartItemDto;

import jakarta.validation.Valid;

//import javax.validation.Valid;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/add")
    public String addToCart(@Valid @RequestBody CartItemDto cartItem) {
        cartService.saveItem(cartItem);
        return "Item added to cart successfully!";
    }
    
    @GetMapping("/items")
    public List<CartItem> getCartItems() {
        return cartService.getAllCartItems();
    }
    
    @DeleteMapping("/items/{id}")
    public ResponseEntity<Void> deleteCartItem(@PathVariable Long id) {
        cartService.deleteCartItem(id);
        return ResponseEntity.noContent().build();
    }
    
    @DeleteMapping("/clear")
    public ResponseEntity<String> clearCart() {
        try {
            cartService.clearCart();
            return ResponseEntity.ok("Cart cleared successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error clearing the cart.");
        }
    }
}

