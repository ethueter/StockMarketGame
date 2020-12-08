

const API_URL = "http://localhost:8080/";

const newUser = async (username, password) => {
    let newUser = {username: username, password: password};
    
    const response = await fetch(API_URL + 'create/', {
        method: 'POST',
        mode: 'cors',
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    });
    
    if(response.status === 200) {
        let body = await response.json();
        localStorage.setItem("user", JSON.stringify(body));
        return true;
    } else {
        alert("User Already Exists")
        return false;
    }
   
};

const login = async (username, password) => {
    let user = {
        username: username,
        password: password
    };
    const response = await fetch(API_URL + 'login', {
        method: 'POST',
        mode: 'cors',
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
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

