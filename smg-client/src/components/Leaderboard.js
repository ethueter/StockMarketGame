import React, { useState } from 'react';
import { Card, CardActions, CardHeader, CardContent, Divider, Button, Paper, TableContainer, TableHead, TableRow, TableCell, TableBody, Table } from '@material-ui/core';


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