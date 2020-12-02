package com.hcl.StockMarketGame;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan({"com.hcl.StockMarketGame.repository","com.hcl.StockMarketGame.controller","com.hcl.StockMarketGame.service"})

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class/*, DataSourceAutoConfiguration.class */})
// Encountered Application Fail error when DataSourceAutoConfiguration not excluded
// --> Investigate other solutions and purpose of DataSource

public class StockMarketGameApplication {
	public static void main(String[] args) {
		SpringApplication.run(StockMarketGameApplication.class, args);
		System.out.println("HELLO");
	}
}
