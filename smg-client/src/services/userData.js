import axios from 'axios';
import authHeader from './authHeader';


const API_URL = "http://localhost:8080/";

//Get players' top scores
const getGameScores = () => {
    return axios.get(API_URL + "scores", {headers: authHeader()});
};

//Get all top scores, needs public endpoint
const getLeaderboard = () => {
    return axios.get(API_URL + "leaderboard");
};

const getAllUsers = async () => {
    
    const response = await fetch(API_URL + "user", {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin"
    });
    let body = await response.json();
    
    return body;
}


export default { getGameScores, getLeaderboard, getAllUsers };