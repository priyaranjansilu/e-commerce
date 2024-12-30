package com.ecommerce.demo.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class MyController {
	
	@GetMapping("/")
	public String webView() {
		return "welcompage";
	}
	@GetMapping("/login")
	public String login() {
		return "login";
	}
	@GetMapping("/register")
	public String Register() {
		return "register";
	}
	
	 @GetMapping("/newpage")
	    public String newPage() {
	        return "newpage"; 
	    }
	
	@GetMapping("/cart")
	public String cart() {
		return "cart";
	}
	@GetMapping("/payment")
    public String paymentPage() {
        return "paymentpage"; // Render payment.html
    }
	
	
	@GetMapping("/paymentsuccess")
    public String paymentSuccess() {
        return "paymentSuccess"; // Render payment.html
    }
	@GetMapping("/contributors")
    public String contributorsPage() {
        return "contributors"; // Render payment.html
    }
	
	@GetMapping("/admin")
    public String Admin() {
        return "admin"; // Render payment.html
    }
	
	@GetMapping("/dashbord")
    public String dashboard() {
        return "dashbord"; // Render payment.html
    }
	@GetMapping("/contact")
    public String Contact() {
        return "contact"; // Render payment.html
    }
	@GetMapping("/product")
    public String Product() {
        return "products"; // Render payment.html
    }
}
