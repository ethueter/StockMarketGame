package com.hcl.StockMarketGame.repository;

import com.hcl.StockMarketGame.model.Game;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GameRepository extends JpaRepository<Game, Integer>{

}
