import { deleteUserData } from "../session.js";
import { page } from "../lib.js";
import { logout } from "../crud.js";
import { showNav } from "./navigation.js";

export function onLogout() {
    logout();
    deleteUserData();
    page.redirect('/home');
    showNav();
}