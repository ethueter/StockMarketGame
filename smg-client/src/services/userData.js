import axios from 'axios';
import authHeader from './authHeader';


const API_URL = "localhost:8080/";

//Get players' top scores
const getGameScores = () => {
    return axios.get(API_URL + "scores", {headers: authHeader()});
};

//Get all top scores, needs public endpoint
const getLeaderboard = () => {
    return axios.get(API_URL + "leaderboard");
};


export default { getGameScores, getLeaderboard};