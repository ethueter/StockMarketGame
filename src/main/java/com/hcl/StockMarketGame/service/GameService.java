package com.hcl.StockMarketGame.service;

import com.hcl.StockMarketGame.model.Game;
import com.hcl.StockMarketGame.repository.GameRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class GameService {
	@Autowired
	public GameRepository gameRepository;

    public boolean existsbyId(int id) {
    	return gameRepository.existsById(id);
    }
    
    public void post(Game game) { //Create
    	gameRepository.save(game);
    }
    
    public Game get(int id) { //Read
    	return gameRepository.findById(id).get();
    }
    
    public List<Game> getAll(){
    	return gameRepository.findAll();
    }
    
    public void put(Game item) { //Update
    	gameRepository.save(item);
    }
    
    public void delete(int id) { //Delete
    	gameRepository.deleteById(id);
    }
}
