import React, { useState } from 'react';
import { AppBar, Button, Link, Grid } from '@material-ui/core';
import ToolBar from '@material-ui/core/Toolbar';

import Porfolio from '../components/Porfolio';
import TradingDesk from '../components/TradingDesk';
import TradingFloor from '../components/TradingFloor';
import stocks from '../testData/stocks';


const GamePage = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [cash, setCash ] = useState(100000);
  const [portValue, setPortValue] = useState(0);


  const buyStock = (stk, shares) => {
    let newStock = {
      ...stk,
      numberShares: shares
    };
    setPortfolio([...portfolio, newStock]);
  }

  const sellStock = (stk, shares) => {
    let stock = portfolio.find(stock => stock.syb === stk.syb);
    let salePrice = stk.price1 * shares;
    if(shares > stock.numberShares) {
      alert("Cannot sell more than you own!");
    } else if (shares == stock.numberShares) {
      let newPort = portfolio.filter(stock => stock.syb != stk.syb);
      setCash(cash + salePrice);
      setPortfolio(newPort);
    } else {
      let ind = portfolio.indexOf(stock => stock.syb == stk.syb);
      let newPort = [...portfolio];
      newPort[ind].numberShares -= shares;
      setCash(cash + salePrice);
      setPortfolio(newPort);
    }
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