package com.ecommerce.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.demo.model.CartItem;
import com.ecommerce.demo.model.CartItemDto;
import com.ecommerce.demo.repository.CartRepository;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    public void saveItem(CartItemDto cartItemDto) {
        CartItem cartItem = new CartItem();
        cartItem.setTitle(cartItemDto.getTitle());
        cartItem.setPrice(cartItemDto.getPrice());
        cartItem.setImagePath(cartItemDto.getImagePath());
        cartRepository.save(cartItem);
    }
    
    public List<CartItem> getAllCartItems() {
        return cartRepository.findAll();
    }
    
    public void deleteCartItem(Long id) {
        cartRepository.deleteById(id);
    }
    
    public void clearCart() {
    	cartRepository.deleteAll();  // Delete all items from the cart
    }
}
