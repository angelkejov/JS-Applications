export function getUserData(){
    return JSON.parse(localStorage.getItem('user'));
};

export function getAccessToken(){
    const user = getUserData();
    if(user){
        return user.accessToken;
    }else{
        return null;
    }
};

export function clearUserData(){
    localStorage.removeItem('user');
};

export function setUserData(data){
    localStorage.setItem('user', JSON.stringify(data));
};

export function createSubmitHandler(callback){
    return function(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        callback(data, event.target);
    }
}

export function parseQuerystring(query = ''){
    return Object.fromEntries(query
        .split('&')
        .map(kvp => kvp.split('=')));
}