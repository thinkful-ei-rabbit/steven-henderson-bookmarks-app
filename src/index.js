import $ from 'jquery';
import renders from './renders';
import handlers from './handlers';
import './index.css';
import api from './api';

const store = {
    libraryItems: [],
    rating: null,
};

function main() {
  renders.renderInitial();
  handlers.starFilterClick();
  handlers.openCreator();
  handlers.starRaterClick();
  renders.renderLibrary();

  api.getItems();
  api.handleSubmit();
  //api.createItem('guitar')  

};

$('#create').click(function(event){
    event.preventDefault();
    $('.star-rater').click(function(event){
        event.preventDefault();
        store.rating=$(`#${event.target.id}`).data('rating');
        debugger;
    })
    $('#creator-entry').submit(function(event){
        event.preventDefault();
        const title = $('#title').val();
        const url = null;
        const description = null;
        const rating = store.rating;
        debugger;
        addClass
    })
  console.log(store)
});

$(main);