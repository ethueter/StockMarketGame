package com.hcl.StockMarketGame;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
// Encountered Application Fail error when DataSourceAutoConfiguration not excluded
// --> Investigate other solutions and purpose of DataSource
public class StockMarketGameApplication {
	public static void main(String[] args) {
		SpringApplication.run(StockMarketGameApplication.class, args);
		System.out.println("HELLO");
	}
}
