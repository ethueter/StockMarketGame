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
import org.springframework.web.bind.annotation.*;

import com.hcl.StockMarketGame.model.Game;
import com.hcl.StockMarketGame.model.Gamemode;
import com.hcl.StockMarketGame.model.User;
import com.hcl.StockMarketGame.service.GameService;
import com.hcl.StockMarketGame.service.UserService;
<<<<<<< Updated upstream
@CrossOrigin(origins = "http://localhost:3000")
@Controller
=======
<<<<<<< Updated upstream

@CrossOrigin(origins = "http://localhost:3000")
@RestController
=======
<<<<<<< HEAD

@CrossOrigin(origins = "http://localhost:3000")
@RestController
=======


@CrossOrigin(origins = "http://localhost:3000")
@RestController

>>>>>>> 7ad4b3fbdca1cfc60804cf04bbaa87c2ff90db0b
>>>>>>> Stashed changes
>>>>>>> Stashed changes
public class MainController {
	@Autowired
	UserService userService;
	
	@Autowired
	GameService gameService;
	
<<<<<<< Updated upstream


    @GetMapping(value="/login/{username}")
    public @ResponseBody User getUser(@PathVariable String username) {
=======
<<<<<<< Updated upstream
	private static class Login {
=======
<<<<<<< HEAD
	private static class Login {
=======

	private class Login {
>>>>>>> 7ad4b3fbdca1cfc60804cf04bbaa87c2ff90db0b
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
=======

>>>>>>> 7ad4b3fbdca1cfc60804cf04bbaa87c2ff90db0b
>>>>>>> Stashed changes
>>>>>>> Stashed changes
    	User user = new User();
    	try{
    		user = userService.get(username);
    	}catch(UsernameNotFoundException e) {
    		return new User();
    	}
    	if(login.getPassword().equals(user.getPassword())) {
    		return user;
    	}else {
    		return new User();
    	}
    }
<<<<<<< Updated upstream

	@GetMapping(value="/users")
	public @ResponseBody List<User> getAll(){
		return userService.getAll();
	}

    @PostMapping(value="/create/{username}")
    public @ResponseBody User newUser(@PathVariable String username,@RequestBody String password) {
//    	if(userService.exists(username)) {
//    		return 0;
=======
<<<<<<< Updated upstream
    
    @GetMapping(value="/users")
	public List<User> getAll(){
		return userService.getAll();
	}
    
    @PostMapping(value="/create")
    public boolean newUser(@RequestBody Login login) {
    	if(userService.exists(login.username)) {
    		return false;
    	}else{
=======
<<<<<<< HEAD
    
    @GetMapping(value="/users")
	public List<User> getAll(){
		return userService.getAll();
	}
    
    @PostMapping(value="/create")
    public boolean newUser(@RequestBody Login login) {
    	if(userService.exists(login.username)) {
    		return false;
    	}else{
=======

    
    @GetMapping(value="/users")
	public List<User> getAll(){

		return userService.getAll();
	}

    @PostMapping(value="/create/{username}")

    public boolean newUser(@RequestBody Login login) {
//    	if(userService.exists(login.username)) {
//    		return false;

>>>>>>> Stashed changes
//    	}else{
>>>>>>> 7ad4b3fbdca1cfc60804cf04bbaa87c2ff90db0b
>>>>>>> Stashed changes
    		User x = new User();
    		x.setUsername(username);
    		x.setPassword(password);
    		userService.post(x);
<<<<<<< Updated upstream
    		return x;
=======
<<<<<<< Updated upstream
    		return true;
    	}
=======
<<<<<<< HEAD
    		return true;
    	}
=======

    		return true;

>>>>>>> Stashed changes
//    	}
>>>>>>> 7ad4b3fbdca1cfc60804cf04bbaa87c2ff90db0b
>>>>>>> Stashed changes
    }
    
    @GetMapping(value="/newgame/{userId}/{score}/{gameMode}")
    public @ResponseBody void newGame(@PathVariable("userId") int userId, @PathVariable("score") int score, @PathVariable("gameMode") String gameMode) {
    	Gamemode gm = Enum.valueOf(Gamemode.class, gameMode);
    	gameService.post(new Game(userId,score,gm));
    }

    @GetMapping(value="/leaderboard")
<<<<<<< Updated upstream
    public @ResponseBody List<List<Game>> leaderboard(){
    	List<List<Game>> lbd = new ArrayList<List<Game>>();
=======
    public List<List<Game>> leaderboard(){
    	List<List<Game>> sortedGames = new ArrayList<List<Game>>();
>>>>>>> Stashed changes
    	for(Gamemode gm : Gamemode.values()) {
    		List<Game> games = gameService.get(gm);
    		Collections.sort(games, (x,y) -> y.getScore()-x.getScore());
    		lbd.add(games);
    	}
<<<<<<< Updated upstream
    	System.out.println(lbd);
    	return lbd;
=======
    	return sortedGames;
>>>>>>> Stashed changes
    }
}
