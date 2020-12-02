import React, { useState } from 'react';
import { Box, Card, CardHeader, CardContent, Typography, CardActions, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';


const TradingDesk = ({ stocks }) => {
    const [buying, setBuying] = useState(true);
    const [deskTarget, setDeskTarget] = useState({});

    const handleDeskSelect = async (event) => {
        console.log("test", event.target.value)
        let targetStock = await displaySharePrice(event.target.value);
        setDeskTarget(targetStock)
    }

    const displaySharePrice = (symbol) => {
        return stocks.find((stock) => stock.syb === symbol);
    }

    return (
        <Box className="trading-desk">
        <Card variant="outlined">
        <CardHeader title="Trading Desk"/>
        <CardContent>
            <Typography>
                Portfolio Value: 0
            </Typography>
            <Typography>Cash to Trade: $ 100,000.00</Typography>
        </CardContent>
        <CardActions>
            <Button 
                size="large" 
                variant="outlined"
                onClick={() => setBuying(true)}
                >Buy</Button>
            <Button 
                size="large" 
                variant="outlined"
                        onClick={() => setBuying(false)}
                >Sell</Button>
        </CardActions>
        <CardContent>
                <InputLabel id="stock-symbol-lable">Symbol</InputLabel>
                <Select
                    labelId="stock-symbol-label"
                    id="stock-symbol"
                    value={deskTarget.syb}
                    onChange={handleDeskSelect}
                >
                {stocks.map((stock) => <MenuItem value={stock.syb}>{stock.syb}</MenuItem>)}
                </Select>
            
            <Typography>{deskTarget.name}</Typography>
            <Typography>Current Share Price: {deskTarget.price1}</Typography>
        </CardContent>
        <CardActions>
            <Button size="large" variant="outlined" color="primary">Execute Trade</Button>
        </CardActions>

        </Card>
            
        </Box>
    )
};

export default TradingDesk;