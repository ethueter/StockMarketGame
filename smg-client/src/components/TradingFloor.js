import React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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