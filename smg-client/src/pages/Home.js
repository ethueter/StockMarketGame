import React from 'react';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ToolBar from '@material-ui/core/Toolbar';
import HomeContainer from '../components/HomeContainer';

const Home = () => {
    

    return (
      <div>
        <AppBar  color='inherit' position='relative'>
          <ToolBar className="toolbar">
            <Link component={Button} href="/">Logout</Link>
            <Link component={Button} href="/game">Play Game</Link>
          </ToolBar>
        </AppBar>
        <HomeContainer />
      </div>
    );
}

export default Home;