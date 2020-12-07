package com.hcl.StockMarketGame.model;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import java.sql.Timestamp;
import java.util.Comparator;

@Data
@Entity
@Table(name="games")
public class Game {// Table to store data on every game played
    public Game(){}
    public Game(int userId, int score, Gamemode gameMode){
    	this.userId = userId;
    	this.score = score;
    	this.gameMode = gameMode;
    }
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    private int userId;
    @CreationTimestamp
    private Timestamp timestamp;
    private int score;
    @Enumerated(EnumType.STRING)
    private Gamemode gameMode;
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	@Override
	public String toString() {
		return this.userId + "|score=" + this.score + "|mode=" + this.gameMode;
	}
}
