import { register } from "../crud.js";
import { formHandler } from "../formHandler.js";
import { page } from "../lib.js";
import { showNav } from "./navigation.js";


export async function onRegister(ev) {
    ev.preventDefault();
    const form = document.getElementById('register-form');
    const formData = formHandler(form);
    const values = Object.values(formData).map(v => {
        if (v == false) {
            throw new Error('Empty fields in the form!')
        }
    })

    if (formData['password'] != formData['conf-pass']) {
        alert('Passwords don\'t match!')
    } else {
        await register(formData);
        if (sessionStorage.hasOwnProperty('password')) {
            page.redirect('/home');
            showNav();
        }
    }
}