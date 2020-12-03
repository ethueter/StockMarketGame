package com.hcl.StockMarketGame.repository;

import com.hcl.StockMarketGame.model.User;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

	List<User> findByUsername(String username);
	
	//@Query(value="EXISTS(SELECT * FROM users WHERE username=?1)", nativeQuery=true)
	//boolean existsByName(String username);
	
}
