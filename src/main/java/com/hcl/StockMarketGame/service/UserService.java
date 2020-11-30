package com.hcl.StockMarketGame.service;

import com.hcl.StockMarketGame.model.User;
import com.hcl.StockMarketGame.repository.UserRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class UserService {
	@Autowired
	public UserRepository userRepository;

    public boolean existsbyId(int id) {
    	return userRepository.existsById(id);
    }
    
    public void post(User user) { //Create
    	userRepository.save(user);
    }
    
    public User get(int id) { //Read
    	return userRepository.findById(id).get();
    }
    
    public List<User> getAll(){
    	return userRepository.findAll();
    }
    
    public void put(User item) { //Update
    	userRepository.save(item);
    }
    
    public void delete(int id) { //Delete
    	userRepository.deleteById(id);
    }
    
}
