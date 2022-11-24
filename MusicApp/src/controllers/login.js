import { login } from "../crud.js";
import { formHandler } from "../formHandler.js";
import { page } from "../lib.js";
import { showNav } from "./navigation.js";

export async function onLogin(ev) {
    ev.preventDefault();
    const form = document.getElementById('login-form');
    const formData = formHandler(form);
    console.log('works');
    const values = Object.values(formData).map(v => {
        if (v == false) {
            throw new Error('Empty fields in the form!')
        }
    })

    await login(formData);
    if (sessionStorage.hasOwnProperty('password')) {
        page.redirect('/home');
        showNav();
    }
}