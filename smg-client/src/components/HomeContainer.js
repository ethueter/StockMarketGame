import React, { useEffect, useState } from 'react';
import { Grid, Button } from '@material-ui/core';

import LeaderBoard from './Leaderboard';
import User from '../services/userData';



const HomeContainer = () => {
  const [playerScores, setPlayerScores] = useState([]);
  const [leaderboard, setLeaderboard] = useState([[{userId: "loading", score: "loading", timestamp: "loading"}]]);

  const username = JSON.parse(localStorage.getItem("user"));

  const handleClick = async () => {
    let users = await User.getAllUsers();

    console.log(users)
  }

  useEffect( async () => {
    // let myScores = await User.getGameScores();
    let ldbd = await User.getLeaderboard();
    // setPlayerScores(myScores);
    setLeaderboard(ldbd);
  }, [setLeaderboard]);


    return (
      <Grid
        container
        direction="row"
      >
        <Grid item  sm={8}>
          <h1>Welcome {username.username}!</h1>
          <h3>Games Played: {username.games}</h3>
          <p>Do you have what it takes to master Wall St? Test your skills against the worlds best in 3 different game lengths.
              We will spot you $100K in virtual currency then you can buy and sell as much as you can for your selected game length. 
              Just like on the real Wall St, whoever has the most money at the end wins!!
          </p>
          <Button onClick={handleClick}>Get All Users</Button>
            <LeaderBoard title="My Top Earnings" subtitle="Date" leaders={leaderboard}/>
        </Grid>
        <Grid item sm={4}>
            <LeaderBoard title="Global Leaderboard" subtitle="Player name" leaders={leaderboard}/>
        </Grid>
        
      </Grid>
    );
};

export default HomeContainer;