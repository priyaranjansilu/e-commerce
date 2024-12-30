package com.ecommerce.demo.model;

import jakarta.validation.constraints.NotEmpty;

//import javax.validation.constraints.NotEmpty;

public class CartItemDto {
    @NotEmpty
    private String title;
    @NotEmpty
    private String price;
    @NotEmpty
    private String imagePath;

    // Getters and Setters
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }
}
