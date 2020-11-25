import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ToolBar from '@material-ui/core/Toolbar';


const Home = () => {
    

    return (
        <div>
            <AppBar>
                <ToolBar>
                    <Button>Logout</Button>
                </ToolBar>
            </AppBar>
            
        </div>
    );
}

export default Home;