

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

const login = async (email, password) => {
    // return axios.post(API_URL + "authenticate", {email, password})
    // .then((response) => {
    //     if(response.data.accessToken) {
    //         localStorage.setItem("user", JSON.stringify(response.data));
    //     }
    //     return response.data;
    // })
    const response = await fetch(API_URL + 'user', {
        method: 'POST',
        mode: 'cors',
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(email, password)
    });
    let body = await response.json();
        if (body.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(body.data));
            return true;
        } else {
            return false
        }

    
    
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export default { newUser, login, logout, getCurrentUser};

