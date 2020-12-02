import React from 'react';
import { AppBar, Button, Link, Grid } from '@material-ui/core';
import ToolBar from '@material-ui/core/Toolbar';

import Porfolio from '../components/Porfolio';
import TradingDesk from '../components/TradingDesk';
import TradingFloor from '../components/TradingFloor';
import stocks from '../testData/stocks';


const GamePage = () => {


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
                    <TradingDesk stocks={stocks}/>
            </Grid>
            <Grid item md={8}>
                    <TradingFloor />
            </Grid>
        </Grid>
        
        
        <Porfolio />
      </div>
    );
}

export default GamePage;