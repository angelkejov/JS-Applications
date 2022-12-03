import { editSong, getById } from '../api/data.js';
import {html} from '../lib.js';
import { createSubmitHandler } from '../util.js';

const editTemplate = (song, onEdit) => html `
<section id="edit">
<div class="form">
  <h2>Edit Album</h2>
  <form @submit=${onEdit} class="edit-form">
    <input type="text" name="singer" id="album-singer" .value=${song.singer} placeholder="Singer/Band" />
    <input type="text" name="album" id="album-album" .value=${song.album} placeholder="Album" />
    <input type="text" name="imageUrl" id="album-img" .value=${song.imageUrl} placeholder="Image url" />
    <input type="text" name="release" id="album-release" .value=${song.release} placeholder="Release date" />
    <input type="text" name="label" id="album-label" .value=${song.label} placeholder="Label" />
    <input type="text" name="sales" id="album-sales" .value=${song.sales} placeholder="Sales" />

    <button type="submit">post</button>
  </form>
</div>
</section>

`;

export async function showEdit(ctx) {
    const id = ctx.params.id;
    const song = await getById(id);

    ctx.render(editTemplate(song, createSubmitHandler(onEdit)));

    async function onEdit({singer, album, imageUrl, release, label, sales}) {
        if(singer == '' || album == '' || imageUrl == '' || release == '' || label == '' || sales == '') {
            return alert('All fields are required!')
        }

         await editSong(id, {
             singer,
             album,
             imageUrl,
             release,
             label,
             sales
         });

        ctx.page.redirect('/catalog/' + id);
    }
}