import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

 
const TradingDesk = ({ stocks, buy, sell, cash, portVal }) => {
    const [buying, setBuying] = useState(true);
    const [deskTarget, setDeskTarget] = useState({});
    const [numShares, setNumShares] = useState(0);

    const handleDeskSelect = async (event) => {
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
            <Typography>Portfolio Value: {portVal}</Typography>
            <Typography>Cash to Trade: $ {cash}</Typography>
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
            />
          </FormControl>
          <Typography>
              Value: {getShareValue()}
          </Typography>
          <CardActions>
            <Button 
              size="large" 
              variant="outlined" 
              color="primary"
              
              >
              Execute Trade
            </Button>
          </CardActions>
        </Card>
      </Box>
    );
};

export default TradingDesk;