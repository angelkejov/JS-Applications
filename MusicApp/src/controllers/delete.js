import { deleteItem } from "../crud.js";
import { page } from '../lib.js';

export async function onDelete(ev) {
    const choice = confirm('Are you sure you want to delete this record?')

    if (choice) {
        await deleteItem(ev.target.dataset.id);
        page.redirect('/catalog');
    }
}