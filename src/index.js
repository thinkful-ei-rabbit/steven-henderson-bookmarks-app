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
  api.getItems()
    .then((items) => {
      items.forEach((item) => store.library.libraryItems.push(item));
      renders.updateUI();
    });
};

$(main);