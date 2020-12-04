

const API_URL = "http://localhost:8080/";

const newUser = async (email, password) => {
    let newUser = {email: email, password: password};
    console.log(newUser);
    const response = await fetch(API_URL + 'newuser', {
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

const login = async (username, password) => {
    // return axios.post(API_URL + "authenticate", {email, password})
    // .then((response) => {
    //     if(response.data.accessToken) {
    //         localStorage.setItem("user", JSON.stringify(response.data));
    //     }
    //     return response.data;
    // })
    const response = await fetch(API_URL + 'login/' + username, {
        method: 'GET',
        mode: 'cors',
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        }
    });
    let body = await response.json();
        if (body.id) {
            localStorage.setItem("user", JSON.stringify(body));
            return true;
        } else {
            return false
        }

    console.log(body.games)
    
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export default { newUser, login, logout, getCurrentUser};

