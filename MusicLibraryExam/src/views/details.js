import { deleteById, getById } from '../api/data.js';
import {html, nothing} from '../lib.js';

const detailsTemplate = (song, hasUser, isOwner, onDelete) => html `
<section id="details">
        <div id="details-wrapper">
          <p id="details-title">Album Details</p>
          <div id="img-wrapper">
            <img src="${song.imageUrl}" alt="example1" />
          </div>
          <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${song.singer}</span></p>
            <p>
              <strong>Album name:</strong><span id="details-album">${song.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${song.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${song.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${song.sales}</span></p>
          </div>
          <div id="likes">Likes: <span id="likes-count">0</span></div>

          ${hasUser ? html `
          
          <div id="action-buttons">
          ${isOwner ? html `
          <a href="/edit/${song._id}" id="edit-btn">Edit</a>
          <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>` : html `<a href="" id="like-btn">Like</a>`}
          </div>
          
          ` : nothing}
        </div>
      </section>

`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const song = await getById(id);

    const hasUser = Boolean(ctx.user);
    const isOwner = hasUser && ctx.user._id == song._ownerId;

    ctx.render(detailsTemplate(song, hasUser, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this pet?');
        
        if(choice) {
            await deleteById(id);
            ctx.page.redirect('/')
        }
    }
}