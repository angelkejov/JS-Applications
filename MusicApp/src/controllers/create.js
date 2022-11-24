import { createItem } from "../crud.js";
import { formHandler } from "../formHandler.js";
import { page } from "../lib.js";

export async function onCreate(ev) {
    ev.preventDefault();
    const form = document.getElementById('create-form');
    const formData = formHandler(form);
    const values = Object.values(formData).map(v => {
        if (v == false) {
            throw new Error('Empty fields in the form!')
        }
    })

    await createItem(formData);
    if (sessionStorage.hasOwnProperty('password')) {
        page.redirect('/catalog');
    }

}