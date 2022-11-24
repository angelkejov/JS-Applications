export function getUserData() {
    return sessionStorage;
}

export function setUserData(email, password, token, id) {
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('password', password);
    sessionStorage.setItem('accessToken', token);
    sessionStorage.setItem('userId', id);
}

export function deleteUserData() {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('userId');
}