import authHeader from './authHeader';


const API_URL = "http://localhost:8080/";

//Get single player's top scores
const getGameScores = async () => {
    const response = await fetch(API_URL + '/games', {
        method: "GET",
        mode: "cors",
        cashe: "no-cache",
        credentials: "same-origin"
    })
    let scores = await response.json();
    return scores;
};

//Get all top scores
const getLeaderboard = async () => {
    const response = await fetch(API_URL + "leaderboard", {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin"
    });
    let body = await response.json();
    return body;
};

const getAllUsers = async () => {
    const response = await fetch(API_URL + "users", {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin"
    });
    let body = await response.json();
    
    return body;
}

const postNewScore = async (gameMode, score) => {
    let mode;
    if( gameMode === 15) {
        mode = "FIFTEEN";
    } else if ( gameMode === "30") {
        mode = "THIRTY";
    } else {
        mode = "SIXTY";
    };

    let newGame = {
        username: JSON.parse(localStorage.getItem("user")).username,
        score: score,
        gameMode: mode
    };
    console.log('new game', newGame)
    const response = await fetch(API_URL + "newgame", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newGame)
    })
    console.log('response', response.status);
    let res = await response.status;
    return res;
}


export default { getGameScores, getLeaderboard, getAllUsers, postNewScore };