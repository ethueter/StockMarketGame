import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Leaderboard = ({title, subtitle, leaders}) => {
  const [gameMode, setGameMode] = useState(0);
    
    
    return (
      <Card variant="outlined">
        <CardHeader title={title} />
        <CardActions className="game-mode-selector">
          <Button size="medium" onClick={() => setGameMode(0)}>
            15 min
          </Button>
          <Divider orientation="vertical" flexItem />
          <Button size="medium" onClick={() => setGameMode(1)}>
            30 min
          </Button>
          <Divider orientation="vertical" flexItem />
          <Button size="medium" onClick={() => setGameMode(2)}>
            1 hr
          </Button>
        </CardActions>
        <CardContent>
          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>{subtitle}</TableCell>
                  <TableCell align="right">Earnings</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {leaders[gameMode].map(row => (
                  <TableRow key={row.timestamp}>
                    <TableCell component="th" scope="row">
                      {row.username}
                    </TableCell>
                    <TableCell align="right">{row.score}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
                
              
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    );
};

export default Leaderboard;