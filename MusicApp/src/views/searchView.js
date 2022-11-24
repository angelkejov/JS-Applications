import { html, render } from '../lib.js'
import { main } from '../app.js';
import { getResult } from '../crud.js';

export function showSearch(ctx) {
    const template = html `
        <section id="searchPage">
            <h1>Search by Name</h1>

            <div class="search">
                <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
                <button class="button-list" data-id=${ctx.params.id} @click=${onSearch}>Search</button>
            </div>

            <h2 id="results">Results:</h2>

            <!--Show after click Search button-->
            <div class="search-result">
                <!--If have matches-->
                

                <!--If there are no matches-->
                
            </div>
        </section>
`
    render(template, main);
}

async function onSearch(ev) {
    const result = document.getElementById('results');
    const searchField = document.getElementById('search-input');
    console.log(searchField.value);
    const data = await getResult(searchField.value);
    console.log(data);
    const template = html `
    ${data.length != 0 ? html`${data.map(item => html`<div class="card-box">
                    <img src=${item.imgUrl}>
                    <div>
                        <div class="text-center">
                            <p class="name">Name: ${item.name}</p>
                            <p class="artist">Artist: ${item.artist}</p>
                            <p class="genre">Genre: ${item.genre}</p>
                            <p class="price">Price: $${item.price}</p>
                            <p class="date">Release Date: ${item.releaseDate}</p>
                        </div>
                        ${sessionStorage.hasOwnProperty('password') ? html`<div class="btn-group">
                            <a href='.details/${ev.target.dataset.id}' id="details">Details</a>
                        </div>` : null}
                    </div>
                </div>`)}` : html`<p class="no-result">No result.</p>`}
    `
    render(template, result);
}