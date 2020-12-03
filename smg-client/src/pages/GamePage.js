import React, { useState, useEffect } from 'react';
import { AppBar, Button, Link, Grid } from '@material-ui/core';
import ToolBar from '@material-ui/core/Toolbar';

import Porfolio from '../components/Porfolio';
import TradingDesk from '../components/TradingDesk';
import TradingFloor from '../components/TradingFloor';
import stocks from '../testData/stocks';
import Market from '../services/marketData';


const GamePage = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [cash, setCash ] = useState(100000);
  const [portValue, setPortValue] = useState(0);
  const [mktCall, setMktCall ] = useState()

  useEffect(async() => {
    let newCall = await Market.getMarketData()
    setMktCall(newCall);
  }, [])

  const testingEffect = () => {
    console.log(mktCall["Meta Data"]["2. Symbol"]);
  }

  const buyStock = (stk, shares) => {
   //needs to be reworked based on new data structure
  }

  const sellStock = (stk, shares) => {
   //needs to be reworked based on new data structure
  }

  const getPortVal = () => {
    
  }


    return (
      <div>
        <AppBar color="inherit" position="relative">
          <ToolBar className="toolbar">
            <Link component={Button} href="/">
              Logout
            </Link>
            <Link component={Button} href="/home">Home</Link>
          </ToolBar>
        </AppBar>
        <Button onClick={testingEffect}>Test</Button>
        <Grid container >
            <Grid item md={4}>
                    <TradingDesk stocks={stocks} buy={buyStock} sell={sellStock} cash={cash} portVal={portValue} />
            </Grid>
            <Grid item md={8}>
                    <TradingFloor stocks={stocks}/>
            </Grid>
        </Grid>
        
        
        <Porfolio />
      </div>
    );
}

export default GamePage;