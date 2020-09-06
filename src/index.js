import $ from 'jquery';
import api from './api';
import store from './store';
import library from './library';
import renders from './renders';
import './index.css';


function main() {
  api.getItems()
  .then(res => res.json())
  .then((items) => {
    items.forEach((item) => library.addApi(item));
    renders.renderLibrary();
    console.log(store.library.libraryItems)
  });
  renders.renderInitial();
};

$(main);