package com.ecommerce.demo.Service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ecommerce.demo.repository.DashboardItemRepository;

@Service
public class DashCartService2 {

    private final DashboardItemRepository dashboardItemRepository;

    public DashCartService2(DashboardItemRepository dashboardItemRepository) {
        this.dashboardItemRepository = dashboardItemRepository;
    }

    @Transactional // This ensures the method executes within a transactional context
    public void removeItemByTitle(String title) {
        dashboardItemRepository.deleteByTitle(title);
    }
}

