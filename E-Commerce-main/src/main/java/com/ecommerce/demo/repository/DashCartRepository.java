package com.ecommerce.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.ecommerce.demo.model.DashboardItem;

public interface DashCartRepository extends JpaRepository<DashboardItem, Long> {
	
}
