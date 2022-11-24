import { showNav } from './controllers/navigation.js';
import { login, logout, register } from './crud.js';
import { page } from "./lib.js";
import { showCatalog } from './views/catalogView.js';
import { showCreate } from './views/createView.js';
import { showDetails } from './views/detailsView.js';
import { showEdit } from './views/editView.js';
import { showHome } from './views/homeView.js';
import { showLogin } from './views/loginView.js';
import { showRegister } from './views/registerView.js';
import { showSearch } from './views/searchView.js';

export const navigation = document.getElementById('navBar');
export const main = document.getElementById('main-content');

showNav()

page.redirect('/', '/home');
page('/home', showHome);
page('/login', showLogin);
page('/catalog', showCatalog);
page('/register', showRegister);
page('/create', showCreate);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);
page('/search', showSearch);

page.start();