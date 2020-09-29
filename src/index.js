import $ from 'jquery';
import api from './api';
import library from './library';
import store from './store';
import renders from './renders';
import './index.css';

/* MAIN FUNCTIONS */
/* 1 Function
    Main();
*/

function main() {
  renders.renderInitial();
  console.log(store.library.libraryItems)
  api.getItems()
    .then((items) => {
      items.expanded = false;
      items.forEach((item) => library.addLibraryItem(item));
    });
};

$(main);