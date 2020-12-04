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
//import java.util.Date;

@Data
@Entity
@Table(name="games")
public class Game {// Table to store data on every game played
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    private int userId;
    @CreationTimestamp
    private Timestamp timestamp;
    private int score;
    @Enumerated(EnumType.STRING)
    private Gamemode gameMode;
}
