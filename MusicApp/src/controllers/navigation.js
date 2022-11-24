import { render } from '../lib.js';
import { navigation } from "../app.js";
import { guestNav, loggedNav } from '../views/navigationView.js';

export function showNav() {
    if (sessionStorage.hasOwnProperty('email') && sessionStorage.hasOwnProperty('password')) {
        render(loggedNav(), navigation);
    } else {
        render(guestNav(), navigation);
    }
}