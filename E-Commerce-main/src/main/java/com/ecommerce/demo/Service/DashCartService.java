package com.ecommerce.demo.Service;

//package com.ecommerce.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.ecommerce.demo.model.CartItem;
import com.ecommerce.demo.model.DashboardItem;
//import com.ecommerce.demo.model.CartItemDto;
import com.ecommerce.demo.model.DashcartitemDto;
//import com.ecommerce.demo.repository.CartRepository;
import com.ecommerce.demo.repository.DashCartRepository;
import com.ecommerce.demo.repository.DashboardItemRepository;

@Service
public class DashCartService {

    @Autowired
    private DashCartRepository cartRepository;
    
    @Autowired
    private DashboardItemRepository dashboardItemRepository;

    public void saveItem(DashcartitemDto dashcartItemDto) {
    	DashboardItem cartItem = new DashboardItem();
        cartItem.setTitle(dashcartItemDto.getTitle());
        cartItem.setPrice(dashcartItemDto.getPrice());
        cartItem.setImagePath(dashcartItemDto.getImagePath());
        cartRepository.save(cartItem);
    }
    
    public List<DashboardItem> getAllCartItems() {
        return cartRepository.findAll();
    }
    
    public void deleteCartItem(Long id) {
        cartRepository.deleteById(id);
    }
    
    public void clearCart() {
    	cartRepository.deleteAll();  // Delete all items from the cart
    }
    public void removeItemByTitle(String title) {
        dashboardItemRepository.deleteByTitle(title);
    }
}

