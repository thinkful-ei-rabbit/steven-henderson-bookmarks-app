import $ from 'jquery';
import api from './api';
import library from './library';
import renders from './renders';
import './index.css';

/* MAIN FUNCTIONS */
/* 1 Function
    Main();
*/

function main() {
  api.getItems()
  .then(res => res.json())
  .then((items) => {
    items.forEach((item) => library.addApi(item));
  });
  renders.renderInitial();
  renders.updateUI();
};

$(main);