package com.ecommerce.demo.model;

//package com.ecommerce.demo.model;

//import javax.persistence.*;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class DashboardItem {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String title;
  private String price;
  private String imagePath;

  // Getters and Setters
  public Long getId() {
      return id;
  }

  public void setId(Long id) {
      this.id = id;
  }

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

