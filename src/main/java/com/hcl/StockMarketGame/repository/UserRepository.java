package com.hcl.StockMarketGame.repository;

import com.hcl.StockMarketGame.model.User;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

	List<User> findByUsername(String username);
	
	@Modifying
	@Query(value="UPDATE users SET games=games+1 WHERE username=?", nativeQuery=true)
	void addGame(String username);
	
	@Modifying
	@Query(value="UPDATE users SET archived=1 WHERE id=?1", nativeQuery=true)
	void archiveById(int id);
	
}
