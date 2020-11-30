package com.hcl.ashwin.tyler.ramiro.StockMarketGame;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication
		(exclude = {DataSourceAutoConfiguration.class })
public class StockMarketGameApplication {

	public static void main(String[] args) {
		SpringApplication.run(StockMarketGameApplication.class, args);
	}

}
