package com.hcl.StockMarketGame.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.EnumSet;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.StockMarketGame.model.Game;
import com.hcl.StockMarketGame.model.Gamemode;
import com.hcl.StockMarketGame.model.User;
import com.hcl.StockMarketGame.service.GameService;
import com.hcl.StockMarketGame.service.UserService;

@Controller
public class MainController {
	@Autowired
	UserService userService;
	
	@Autowired
	GameService gameService;
	
	//@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value="/login/{username}")
    public @ResponseBody User getUser(@PathVariable String username) {
    	User user = new User();
    	try{
    		user = userService.get(username);
    	}catch(UsernameNotFoundException e) {
    		e.printStackTrace();
    	}
    	System.out.println(user);
    	return user;
    }
    
    @GetMapping(value="/users")
	public @ResponseBody List<User> getAll(){
		return userService.getAll();
	}
    
    @PostMapping(value="/create/{username}")
    public @ResponseBody int newUser(@PathVariable String username,@RequestBody String password) {
//    	if(userService.exists(username)) {
//    		return 0;
//    	}else{
    		User x = new User();
    		x.setUsername(username);
    		x.setPassword(password);
    		userService.post(x);
    		return 1;
//    	}
    }
    
    @GetMapping(value="/newgame/{userId}/{score}/{gameMode}")
    public @ResponseBody void newGame(@PathVariable("userId") int userId, @PathVariable("score") int score, @PathVariable("gameMode") String gameMode) {
    	Gamemode gm = Enum.valueOf(Gamemode.class, gameMode);
    	gameService.post(new Game(userId,score,gm));
    }
    
    @GetMapping(value="/leaderboard")
    public @ResponseBody List<List<Game>> leaderboard(){
    	List<List<Game>> lbd = new ArrayList<List<Game>>();
    	for(Gamemode gm : Gamemode.values()) {
    		List<Game> games = gameService.get(gm);
    		Collections.sort(games, (x,y) -> y.getScore()-x.getScore());
    		lbd.add(games);
    	}
    	System.out.println(lbd);
    	return lbd;
    }
}
