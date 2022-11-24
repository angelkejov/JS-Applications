import { html, render } from '../lib.js'
import { main } from '../app.js';
import { getAllItems } from '../crud.js';

export async function showCatalog(ctx) {
    const data = await getAllItems();

    const template = html `
        <section id="catalogPage">
            <h1>All Albums</h1>
            ${data.length !=0 ? html`${data.map(item=>html`
            <div class="card-box">
                <img src=${item.imgUrl}>
                <div>
                    <div class="text-center">
                        <p class="name">Name: ${item.name}</p>
                        <p class="artist">Artist: ${item.artist}</p>
                        <p class="genre">Genre: ${item.genre}</p>
                        <p class="price">Price: $${item.price}</p>
                        <p class="date">Release Date: ${item.releaseDate}</p>
                    </div>
                    ${sessionStorage.hasOwnProperty('accessToken') ? html`<div class="btn-group">
                        <a href="/details/${item._id}" id="details">Details</a>
                    </div>` : null}
                    
                </div>
            </div>
            `)}` : html`<p>No Albums in Catalog!</p>`}
            

            <!--No albums in catalog-->
            

        </section>
`
    render(template, main);
}