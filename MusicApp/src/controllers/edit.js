import { editItem } from "../crud.js";
import { formHandler } from "../formHandler.js";
import { page } from "../lib.js";

export async function onEdit(ev) {
    ev.preventDefault();
    const form = document.getElementById('edit-form');
    const formData = formHandler(form);

    const values = Object.values(formData).map(v => {
        if (v == false) {
            throw new Error('Empty fields in the form!')
        }
    })

    await editItem(formData, ev.target.dataset.id);
    if (sessionStorage.hasOwnProperty('password')) {
        page.redirect(`/details/${ev.target.dataset.id}`);
    }
}