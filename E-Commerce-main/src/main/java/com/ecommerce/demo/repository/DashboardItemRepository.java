package com.ecommerce.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.demo.model.DashboardItem;

@Repository
public interface DashboardItemRepository extends JpaRepository<DashboardItem, Long> {
//    void deleteByTitle(String title); // Custom query to delete by title
	 void deleteByTitle(String title); // Custom query to delete by title

	
}
