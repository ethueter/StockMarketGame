import React from 'react';
import Box from '@material-ui/core/Box';
import { Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

const TradingFloor = ({ stocks }) => {

    return (
      <Box component={Paper}>
        <h1>Trading Floor</h1>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Symbol</TableCell>
                <TableCell>Company</TableCell>
                <TableCell align="right">Current Price</TableCell>
                <TableCell align="right">Past 5 min</TableCell>
                <TableCell align="right">10 min</TableCell>
                <TableCell align="right">15 min</TableCell>
                <TableCell align="right">20 min</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stocks.map(stk => (
                <TableRow key={stk.syb}>
                  <TableCell component="th" scope="row">
                    {stk.syb}
                  </TableCell>
                  <TableCell>{stk.name}</TableCell>
                  <TableCell align="right">{stk.price1}</TableCell>
                  <TableCell align="right">{stk.price2}</TableCell>
                  <TableCell align="right">{stk.price3}</TableCell>
                  <TableCell align="right">{stk.price4}</TableCell>
                  <TableCell align="right">{stk.price5}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
};

export default TradingFloor;