import $ from 'jquery';
import api from './api';
import store from './store';
import renders from './renders';

/* LIBRARY FUNCTIONS */
/* 4 Functions
    addLibraryItem();
    addApi();
    removeLibraryItem();
    removeApi();
*/

//Adds a Bookmark to the local store for rendering
function addLibraryItem() {
    let newBookmark = {
        title: $('#title').val(),
        description: $('#description').val(),
        url: $('#url').val(),
        rating: store.library.rating,
        expanded: false,
    }
    api.createItem(newBookmark.title, newBookmark.description, newBookmark.url, newBookmark.rating);
    renders.removeLibrary();
    api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => addApi(item));
    });
};

//Adds a Library Item to the API
function addApi(item) {
    item.expanded = false
    
    store.library.libraryItems.push(item);
    console.log(store.library.libraryItems)
    renders.updateUI();
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
    renders.updateUI();
};

    export default {
        store,
        addLibraryItem,
        addApi,
        removeLibraryItem
    };