

const API_URL = "http://localhost:8080/";

const newUser = async (username, password) => {
    let newUser = {username: username, password: password};
    console.log(newUser);
    const response = await fetch(API_URL + 'create/' + username, {
        method: 'POST',
        mode: 'cors',
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(password)
    });
    let body = await response.json();
    if (body.id) {
        localStorage.setItem("user", JSON.stringify(body));
        return true;
    } else {
        return false
    }
};

const login = async (username, password) => {
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
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export default { newUser, login, logout, getCurrentUser};

