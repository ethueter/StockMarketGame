package com.hcl.StockMarketGame.service;

import com.hcl.StockMarketGame.model.User;
import com.hcl.StockMarketGame.repository.UserRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class UserService {
	@Autowired
	public UserRepository userRepository;

    //Create
    public void post(User user) { 
    	userRepository.save(user);
    }
    
    //Read
    public boolean exists(int id) {
    	return userRepository.existsById(id);
    }
    
    public boolean exists(String username) {
    	try {
    		userRepository.findByUsername(username).get(0);
    	} catch(IndexOutOfBoundsException e) {
    		return false;
    	} return true;
    }
    
    public User get(int id) {
    	return userRepository.findById(id).get();
    }
    
    public User get(String username) {
    	try {
    		return userRepository.findByUsername(username).get(0);
    	} catch(IndexOutOfBoundsException e) {
    		throw new UsernameNotFoundException(username);
    	}
    }
    
    public List<User> getAll(){
    	return userRepository.findAll();
    }
    
    //Update
    public void put(User item) {
    	userRepository.save(item);
    }
    
    public void putGame(String username) {
    	userRepository.addGame(username);
    }
    
	public void putLogin(String username) {
		userRepository.updateLastLogin(username);
	}
    
    //Delete
    public void delete(int id) { 
    	userRepository.archiveById(id);
    }
    
}
