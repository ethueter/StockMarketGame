package com.hcl.StockMarketGame.repository;

import com.hcl.StockMarketGame.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

}
