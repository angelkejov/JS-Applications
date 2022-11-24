import { html, render } from '../lib.js'
import { main } from '../app.js';
import { getItem } from '../crud.js';
import { onDelete } from '../controllers/delete.js';

export async function showDetails(ctx) {
    const data = await getItem(ctx.params.id);

    const template = html `
        <section id="detailsPage">
            <div class="wrapper">
                <div class="albumCover">
                    <img src=${data.imgUrl}>
                </div>
                <div class="albumInfo">
                    <div class="albumText">

                        <h1>Name: ${data.name}</h1>
                        <h3>Artist: ${data.artist}</h3>
                        <h4>Genre: ${data.genre}</h4>
                        <h4>Price: $${data.price}</h4>
                        <h4>Date: ${data.releaseDate}</h4>
                        <p>Description: ${data.description}
                        </p>
                    </div>

                    <!-- Only for registered user and creator of the album-->
                    ${sessionStorage.userId == data._ownerId ? html`<div class="actionBtn">
                        <a href="/edit/${ctx.params.id}" class="edit">Edit</a>
                        <a href="javascript:void(0)" data-id=${ctx.params.id} class="remove" @click=${onDelete}>Delete</a>
                    </div>` : null}
                    
                </div>
            </div>
        </section>
    `
    render(template, main)
}