import { onLogout } from '../controllers/logout.js'
import { html } from '../lib.js'

export function guestNav() {
    return html `
        <nav>
            <img src="./images/headphones.png">
            <a href="/home">Home</a>
            <ul>
                <!--All user-->
                <li><a href="/catalog">Catalog</a></li>
                <li><a href="/search">Search</a></li>
                <!--Only guest-->
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>>
            </ul>
        </nav>
    `
}

export function loggedNav() {
    return html `
    <nav>
        <img src="./images/headphones.png">
        <a href="/home">Home</a>
        <ul>
            <!--All user-->
            <li><a href="/catalog">Catalog</a></li>
            <li><a href="/search">Search</a></li>
            <!--Only user-->
            <li><a href="/create">Create Album</a></li>
            <li><a href="javascript:void(0)" @click=${onLogout}>Logout</a></li>
        </ul>
    </nav>
    `
}