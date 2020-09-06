import $ from 'jquery';
import api from './api';
import store from './store';
import renders from './renders';

//Adds a Bookmark to the local store for rendering
function addLibraryItem() {
    let newBookmark = {
        id: Math.floor(Math.random() * 10000),
        title: $('#title').val(),
        description: $('#description').val(),
        url: $('#url').val(),
        rating: store.library.rating,
        expanded: false,
    }
    store.library.libraryItems.push(newBookmark);
    api.createItem(newBookmark.title, newBookmark.description, newBookmark.url, newBookmark.rating);
    //renders due to 'store' update
    renders.updateUI();
};

//Adds a Library Item to the API
function addApi(item) {
    item.expanded = false;
    store.library.libraryItems.push(item);
};

//Removes a Bookmark from the local store
function removeLibraryItem(id) {
    let found = store.library.libraryItems.find(item => item.id === id);
    let index = store.library.libraryItems.indexOf(found);
    store.library.libraryItems.splice(index, 1);
    removeApi(id);
};

//Removes a Bookmark from the API
function removeApi(id) {
    api.deleteItem(id);
    //Renders due to 'store' update
    renders.updateUI();
};

    export default {
        store,
        addLibraryItem,
        addApi,
        removeLibraryItem
    };