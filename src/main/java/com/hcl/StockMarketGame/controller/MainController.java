package com.hcl.StockMarketGame.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.StockMarketGame.model.User;
import com.hcl.StockMarketGame.service.UserService;

@Controller
public class MainController {
	@Autowired
	UserService userService;
	
    @GetMapping(value="/user")
	public @ResponseBody List<User> getAll(){
		User x = new User();
		x.setUsername("Ramiro");
		x.setPassword("123");
		userService.post(x);
		
    	System.out.println("!! Reached getAll !!");
    	System.out.println("!! Passed getAll !!");
		return userService.getAll();
	}
    /*
    @PostMapping(value="/user")
    public ResponseEntity<String> post(@RequestBody User user){
    	if(itemService.existsbyId(item.getItemId())) {
    		itemService.post(item);
    		return new ResponseEntity<String>(HttpStatus.CREATED); //201
    	}else {
    		return new ResponseEntity<String>(HttpStatus.BAD_REQUEST); //400
    	}
    }*/

}
