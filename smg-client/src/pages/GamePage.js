import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import ToolBar from '@material-ui/core/Toolbar';
import useinterval from 'react-useinterval';
import Porfolio from '../components/Porfolio';
import TradingDesk from '../components/TradingDesk';
import TradingFloor from '../components/TradingFloor';
import stocks from '../testData/stocks';
import Market from '../services/marketData';
import Counter from '../components/Counter';
import Auth from '../services/auth';
import Game from '../services/userData';

const GamePage = () => {
  // const [portfolio, setPortfolio] = useState([]);
  const [cash, setCash ] = useState(100000);
  const [portValue, setPortValue] = useState(0);
  const [mktCall, setMktCall ] = useState();
  const [gameMode, setGameMode ] = useState(15);

  const [sec, setSec ] = useState(0);
  const [gameClock, setGameClock] = useState(gameMode);
  const [gameOn, setGameOn ] = useState(false)


  useEffect(async() => {
    let newCall = await Market.getMarketData()
    setMktCall(newCall);
  }, [])

  const testingEffect = () => {
    // console.log(mktCall["Meta Data"]["2. Symbol"]);
    gameOn ? setGameOn(false) : setGameOn(true)
    
  }

  const buyStock = (stk, shares) => {
   //needs to be reworked based on new data structure
  }

  const sellStock = (stk, shares) => {
   //needs to be reworked based on new data structure
  }

  const getPortVal = () => {
    //needs to establish portfolio
  }

  //Simulated game scores
  const submitScore = () => {
    let num = Math.floor(Math.random() * 1000);
    Game.postNewScore(gameMode, num)
    .then((res) => {
      if(res === 201) {
        alert("Great Job. Did you make the LeaderBord?")
        let user = JSON.parse(localStorage.getItem("user"));
        user.games++
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        alert("Game Score not recored try again.");
      }
    })
  }

  const handleGameMode = (event) => {
    setGameMode(event.target.value);
    setGameClock(event.target.value);
  }

  const leadingZeros = (num) => {
    if (num === 60 || num === 0) {
      return "00";
    } else if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }

  const gameTimer = () => {

    if (sec === 0 && gameClock === 0) {
      endGame();
    } else if (sec === 0 && gameClock !== 0) {
      setGameClock(min => min - 1);
      setSec(59);
    } else if (sec > 0) {
      setSec(sec => sec - 1);
    }

  }

  const endGame = () => {
    setGameOn(false);
    //will also make call to send game score to DB
  }

  useinterval(gameTimer, gameOn ? 1000 : null);

    return (
      <div>
        <AppBar color="inherit" position="relative">
          <ToolBar className="toolbar">
            <Link component={Button} onClick={Auth.logout} href="/">
              Logout
            </Link>
            <Link component={Button} href="/home">
              Home
            </Link>
            <Counter
              displayTime={gameClock}
              displaySec={sec}
              zero={leadingZeros}
            />
            <span>
              <InputLabel id="stock-symbol-lable">Game Mode</InputLabel>
              <Select
                labelId="stock-symbol-label"
                id="stock-symbol"
                value={gameMode}
                onChange={handleGameMode}
              >
                <MenuItem value="15">15 min</MenuItem>
                <MenuItem value="30">30 min</MenuItem>
                <MenuItem value="60">1 hr</MenuItem>
              </Select>
            </span>
          </ToolBar>
        </AppBar>
        <Button onClick={testingEffect}>Play</Button>
        <Button onClick={submitScore}>Submit Score</Button>
        <Grid container>
          <Grid item md={4}>
            <TradingDesk
              stocks={stocks}
              buy={buyStock}
              sell={sellStock}
              cash={cash}
              portVal={portValue}
            />
          </Grid>
          <Grid item md={8}>
            <TradingFloor stocks={stocks} />
          </Grid>
        </Grid>

        <Porfolio />
      </div>
    );
}

export default GamePage;