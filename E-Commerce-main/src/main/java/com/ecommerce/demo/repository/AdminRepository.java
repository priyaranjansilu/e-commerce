package com.ecommerce.demo.repository;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.ecommerce.demo.model.Admin;


@Repository
public class AdminRepository {

	private final JdbcTemplate jdbcTemplate;

    public AdminRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

   
    
    public Admin findByUsernameAndPassword(String username, String password) {
        String sql = "SELECT * FROM admin WHERE username = ? AND password = ?";
        try {
            return jdbcTemplate.queryForObject(sql, new Object[]{username, password}, adminRowMapper());
        } catch (Exception e) {
            return null;
        }
    }

    private RowMapper<Admin> adminRowMapper() {
        return (rs, rowNum) -> {
            Admin admin = new Admin();
            admin.setUsername(rs.getString("username"));
            admin.setPassword(rs.getString("password"));
            return admin;
        };
    }

}
