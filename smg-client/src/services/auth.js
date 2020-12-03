import axios from 'axios';

const API_URL = "http://localhost:8080/";

const newUser = async (email, password) => {
    let newUser = {email: email, password: password};
    console.log(newUser);
    const response = await fetch(API_URL + 'user', {
        method: 'POST',
        mode: 'cors',
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    });
    let res = await response.json();
    
    return res;
};

const login = (email, password) => {
    // return axios.post(API_URL + "authenticate", {email, password})
    // .then((response) => {
    //     if(response.data.accessToken) {
    //         localStorage.setItem("user", JSON.stringify(response.data));
    //     }
    //     return response.data;
    // })
    fetch(API_URL + 'user', {
        method: 'POST',
        mode: 'cors',
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(email, password)
    }).then((response) => {
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }

    })
    
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export default { newUser, login, logout, getCurrentUser};

