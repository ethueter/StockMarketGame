import axios from 'axios';

const API_URL = "localhost:8080/";

const newUser = (email, password) => {
    return axios.post(API_URL + "create", {
        email,
        password
    }).then((response) => {
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    })
};

const login = (email, password) => {
    return axios.post(API_URL + "authenticate", {email, password})
    .then((response) => {
        if(response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    })
    
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export default { newUser, login, logout, getCurrentUser};

