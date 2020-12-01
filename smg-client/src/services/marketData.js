import axios from 'axios';
import authHeader from './authHeader';

//Retrieve stock market data
const API_URL = "localhost:8080"

const getMarkeData = () => {
    return axios.get(API_URL + "market", {headers: authHeader()})
}

export default {getMarkeData};