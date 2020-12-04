

const authHeader = () => {
    const user = JSON.stringify(localStorage.getItem("user"));

    if( user && user.accessToken) {
        return { Authorization: "Bearer " + user.accessToken};
    } else {
        return {};
    }
};

export default authHeader;
