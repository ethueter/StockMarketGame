package com.hcl.StockMarketGame;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

import com.hcl.StockMarketGame.controller.AuthController;
import com.hcl.StockMarketGame.service.UserService;

import org.springframework.context.annotation.FilterType;
/*
@ComponentScan({"com.hcl.StockMarketGame.repository",
				"com.hcl.StockMarketGame.controller",
				"com.hcl.StockMarketGame.service"})
				*/
@ComponentScan(basePackages = { "com.hcl.StockMarketGame" }, excludeFilters = { @ComponentScan.Filter(type = FilterType.ASSIGNABLE_TYPE, value = { AuthController.class, SecurityConfig.class}) })

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class/*, DataSourceAutoConfiguration.class */})

public class StockMarketGameApplication {
	public static void main(String[] args) {
		SpringApplication.run(StockMarketGameApplication.class, args);
		System.out.println("HELLO");
	}
}