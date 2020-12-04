import React from 'react';
import { Card, CardActions, CardHeader, Typography, CardContent, Divider, Button, Paper, TableContainer, TableHead, TableRow, TableCell, TableBody, Table } from '@material-ui/core';



const columns = [
    {field: 'username', headerName: 'Player'},
    {field: 'earnings', headerName: 'Earnings'}
];

const rows = [
    {username: "Gordon Gecko", earnings: 124682},
    {username: "Player A", earnings: 12597 },
    {username: "Player B", earnings: 56879},
    { username: "Warren Buffet", earnings: 84329},
    {username: "Tyler H", earnings: 72653},
    { username: "Ashwin A", earnings: 81467}
]

const sortRows = rows.sort((a, b) => b.earnings - a.earnings)

const Leaderboard = ({title, subtitle, leaders}) => {
    
    return (
      <Card variant="outlined">
        <CardHeader title={title} />
        <CardActions className="game-mode-selector">
          <Button size="medium">15 min</Button>
          <Divider orientation="vertical" flexItem />
          <Button size="medium">30 min</Button>
          <Divider orientation="vertical" flexItem />
          <Button size="medium">1 hr</Button>
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
                {leaders.map(row => (
                <TableRow key={row.timestamp}>
                  <TableCell component="th" scope="row">
                    {row.userId}
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