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
import org.springframework.web.bind.annotation.*;

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
	

	private static class Login {
		String username;
		String password;
		public String getUsername() {
			return username;
		}
		public void setUsername(String username) {
			this.username = username;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}

	}
	
	private static class LogGame {
		String username;
		int score;
		String gameMode;
		public String getUsername() {
			return username;
		}
		public void setUsername(String username) {
			this.username = username;
		}
		public int getScore() {
			return score;
		}
		public void setScore(int score) {
			this.score = score;
		}
		public String getGameMode() {
			return gameMode;
		}
		public void setGameMode(String gameMode) {
			this.gameMode = gameMode;
		}
	}
	
    @PostMapping(value="/login")
    public User getUser(@RequestBody Login login) {
    	User user = new User();
    	try{
    		user = userService.get(login.getUsername());
    	}catch(UsernameNotFoundException e) {
    		return new User();
    	}
    	if(login.getPassword().equals(user.getPassword())) {
    		return user;
    	}else {
    		return new User();
    	}
    }

    @GetMapping(value="/users")
	public List<User> getAll(){
		return userService.getAll();
	}

    @PostMapping(value="/create")
    public boolean newUser(@RequestBody Login login) {
    	if(userService.exists(login.username)) {
    		return false;
    	}else{
    		User x = new User();
    		x.setUsername(login.getUsername());
    		x.setPassword(login.getPassword());
    		userService.post(x);
    		return true;
    	}
    }
    
    @GetMapping(value="/delete/{userId}")
    public void deleteUser(@PathVariable int userId) {
    	userService.delete(userId);
    }
    
    @PostMapping(value="/newgame")
    public void newGame(@RequestBody LogGame lg) {
    	Gamemode gm = Enum.valueOf(Gamemode.class, lg.getGameMode());
    	gameService.post(new Game(lg.getUsername(),lg.getScore(),gm));
    	userService.putGame(lg.username);
    }

    @GetMapping(value="/leaderboard")
    public List<List<Game>> leaderboard(){
    	List<List<Game>> sortedGames = new ArrayList<List<Game>>();
    	for(Gamemode gm : Gamemode.values()) {
    		List<Game> games = gameService.get(gm);
    		Collections.sort(games, (x,y) -> y.getScore()-x.getScore());
    		sortedGames.add(games);
    	}
    	return sortedGames;
    }
}
