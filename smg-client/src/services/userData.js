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
    return body[0];
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

<<<<<<< Updated upstream

export default { getGameScores, getLeaderboard, getAllUsers };
=======
const postNewGame = async (gameMode, score) => {
    let newGame = {
        username: localStorage.getItem("user").username,
        score: score,
        gameMode: gameMode
    };
    const response = await fetch(API_URL, +"newgame", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      body: JSON.stringify(newGame)
    });
    let body = await response.json();

    return body;
}


export default { getGameScores, getLeaderboard, getAllUsers, postNewGame };
>>>>>>> Stashed changes
