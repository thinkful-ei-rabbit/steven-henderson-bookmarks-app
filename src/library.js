import $ from 'jquery';
import renders from './renders';
import api from './api';
import store from './store';

function addLibraryItem() {
    let newBookmark = {
        id: `${(store.libraryItems.length) + 1}`,
        title: $('#title').val(),
        description: $('#description').val(),
        url: $('#url').val(),
        rating: store.rating,
        expanded: false,
    }
    store.libraryItems.push(newBookmark);
    api.createItem(newBookmark.title, newBookmark.description, newBookmark.url, newBookmark.rating);
    renders.updateUI();
};

    export default {
        store,
        addLibraryItem,
    };