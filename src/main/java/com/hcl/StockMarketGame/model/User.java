package com.hcl.StockMarketGame.model;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import java.sql.Timestamp;
import java.util.Date;

@Data
@Entity
@Table(name="users")
public class User {// Table to store user data
	// com.hackerrank.orm.enums.ItemStatus;
    public User(){}
    public User(String username, String password){
    	this.username=username;
    	this.password=password;
    }
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
	private String username;
    private String password;
    private int games=0;
    @CreationTimestamp
    private Timestamp created;
    @CreationTimestamp
    private Timestamp last_login;
    private boolean archived = false;
	public String getUsername() {
		return username;
	}
    public void setUsername(String string) {
		this.username=string;
	}
    public String getPassword() {
    	return password;
    }
	public void setPassword(String string) {
		this.password=string;
	}
	@Override
	public String toString() {
		return this.username + " has played " + this.games + " games.";
	}
}
