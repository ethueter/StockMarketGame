package com.hcl.StockMarketGame.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.EnumSet;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MainController {
	@Autowired
	UserService userService;
	
	@Autowired
	GameService gameService;
	
	public class Login {
		public String username;
		public String password;
	}
	
	public class LogGame {
		public String username;
		public int score;
		public String gameMode;
	}
	
    @GetMapping(value="/login")
    public User getUser(@RequestBody Login login) {
    	User user = new User();
    	try{
    		user = userService.get(login.username);
    	}catch(UsernameNotFoundException e) {
    		e.printStackTrace();
    	}
    	System.out.println(user);
    	return user;
    }
    
    @GetMapping(value="/users")
	public List<User> getAll(){
		return userService.getAll();
	}
    
    @PostMapping(value="/create/{username}")
    public boolean newUser(@RequestBody Login login) {
//    	if(userService.exists(login.username)) {
//    		return false;
//    	}else{
    		User x = new User();
    		x.setUsername(login.username);
    		x.setPassword(login.password);
    		userService.post(x);
    		return true;
//    	}
    }
    
    @GetMapping(value="/delete/{userId}")
    public void deleteUser(@PathVariable int userId) {
    	userService.delete(userId);
    }
    
    @GetMapping(value="/newgame")
    public void newGame(@RequestBody LogGame lg) {
    	Gamemode gm = Enum.valueOf(Gamemode.class, lg.gameMode);
    	gameService.post(new Game(lg.username,lg.score,gm));
    	userService.putGame(lg.username);
    }
    
    @GetMapping(value="/leaderboard")
    public List<List<Game>> leaderboard(){
    	List<List<Game>> sortedGames = new ArrayList<List<Game>>();
    	//List<List<Map<String,Game>>> lbd = new ArrayList<List<Map<String,Game>>>();
    	for(Gamemode gm : Gamemode.values()) {
    		List<Game> games = gameService.get(gm);
    		Collections.sort(games, (x,y) -> y.getScore()-x.getScore());
    		sortedGames.add(games);
    	}
//    	for(List<Game> mode:sortedGames) {
//    		Map<String,Game> map = new HashMap<String,Game>();
//    		mode.forEach(game -> map.put(userService.get(game.getUserId()).getUsername(), game));
//    	}
    	//System.out.println(lbd);
    	return sortedGames;
    }
}
