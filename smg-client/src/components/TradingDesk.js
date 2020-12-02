import React, { useState } from 'react';
import { Box, Card, CardHeader, CardContent, Typography, CardActions, Button, FormControl, InputLabel, Select, MenuItem, Input } from '@material-ui/core';


const TradingDesk = ({ stocks }) => {
    const [buying, setBuying] = useState(true);
    const [deskTarget, setDeskTarget] = useState({});
    const [numShares, setNumShares] = useState(0);

    const handleDeskSelect = async (event) => {
        console.log("test", event.target.value)
        let targetStock = await displaySharePrice(event.target.value);
        setDeskTarget(targetStock)
    }

    const displaySharePrice = (symbol) => {
        return stocks.find((stock) => stock.syb === symbol);
    }

    const handleNumSharesChange = async (event) => {
        await setNumShares(event.target.value);
        
    }

    const getShareValue = () => {
        return deskTarget.price1 * numShares;
    }

    return (
      <Box className="trading-desk">
        <Card variant="outlined">
          <CardHeader title="Trading Desk" />
          <CardContent>
            <Typography>Portfolio Value: 0</Typography>
            <Typography>Cash to Trade: $ 100,000.00</Typography>
          </CardContent>
          <CardActions>
            <Button
              size="large"
              variant={buying ? "contained" : "outlined"}
              onClick={() => setBuying(true)}
            >
              Buy
            </Button>
            <Button
              size="large"
              variant={buying ? "outlined" : "contained"}
              onClick={() => setBuying(false)}
            >
              Sell
            </Button>
          </CardActions>
          <CardContent>
            <InputLabel id="stock-symbol-lable">Symbol</InputLabel>
            <Select
              labelId="stock-symbol-label"
              id="stock-symbol"
              value={deskTarget.syb}
              onChange={handleDeskSelect}
            >
              {stocks.map(stock => (
                <MenuItem value={stock.syb}>{stock.syb}</MenuItem>
              ))}
            </Select>

            <Typography>{deskTarget.name}</Typography>
            <Typography>Current Share Price: {deskTarget.price1}</Typography>
          </CardContent>
          <FormControl>
            <InputLabel id="number-shares-lable">Number of Shares</InputLabel>
            <Input
              id="number-shares"
              value={numShares}
              onChange={handleNumSharesChange}
              type="number"
              shrink
            />
          </FormControl>
          <Typography>
              Value: {getShareValue()}
          </Typography>
          <CardActions>
            <Button size="large" variant="outlined" color="primary">
              Execute Trade
            </Button>
          </CardActions>
        </Card>
      </Box>
    );
};

export default TradingDesk;