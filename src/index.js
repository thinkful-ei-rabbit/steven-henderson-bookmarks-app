import $ from 'jquery';
import renders from './renders';
import handlers from './handlers';
import './index.css';
import api from './api';

function main() {
    renders.renderInitial();
    handlers.starFilterClick();
    handlers.openCreator();
    handlers.starRaterClick();
    renders.renderLibrary();

  //api.getItems();
  //api.handleSubmit();
  //api.createItem('guitar')  

};

$(main);