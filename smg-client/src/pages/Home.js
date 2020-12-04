import React from 'react';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ToolBar from '@material-ui/core/Toolbar';
import HomeContainer from '../components/HomeContainer';
import Auth from '../services/auth';

const Home = () => {
    
    return (
      <div>
        <AppBar  color='inherit' position='relative'>
          <ToolBar className="toolbar">
            <Link component={Button} onClick={Auth.logout} href="/">Logout</Link>
            <Link component={Button} href="/game">Play Game</Link>
          </ToolBar>
        </AppBar>
        <HomeContainer />
      </div>
    );
}

export default Home;