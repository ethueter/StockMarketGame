package com.hcl.StockMarketGame.model;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import java.sql.Timestamp;
import java.util.Date;

@Data
@Entity
public class User {// Table to store user data
	// com.hackerrank.orm.enums.ItemStatus;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;
	private String userUsername;
    private String userPassword;
    private int userGames;
    @CreationTimestamp
    private Timestamp userTimestamp;
    private Date userLastLoginDate = new Date();
}
