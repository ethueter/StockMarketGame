import axios from 'axios';
import authHeader from './authHeader';

//Retrieve stock market data
const API_URL = "localhost:8080"
const ADV_URL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&outputsize=full&apikey=RW4ZFMWBW2TWN5JH"

// const getMarketData = () => {
//     return axios.get(API_URL + "market", {headers: authHeader()})
// }


const getMarketData = () => {
    return axios.get(ADV_URL)
    .then((response) => response.data)
}

export default { getMarketData };