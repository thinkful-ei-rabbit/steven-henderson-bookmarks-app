import $ from 'jquery';
import api from './api';
import store from './store';
import renders from './renders';

/* LIBRARY FUNCTIONS */
/* 5 Functions
    addLibraryItem();
    addApi();
    removeLibraryItem();
    removeApi();
    updateLibraryItem();
*/

//Adds a Bookmark to the local store for rendering
function addLibraryItem(item) {
    item.expanded = false
    store.library.libraryItems.push(item)
    renders.removeLibrary()
    renders.updateUI()
};

function addApi() {
    let newBookmark = {
        title: $('#title').val(),
        description: $('#description').val(),
        url: $('#url').val(),
        rating: store.library.rating,
    }
    api.createItem(newBookmark.title, newBookmark.description, newBookmark.url, newBookmark.rating)
        .then((newItem) => {
            addLibraryItem(newItem)
        });
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

function updateLibraryItem(model) {
    const data = {title: model.title, desc: model.desc, url: model.url};
    const dataLocal = {id: model.id, title: model.title, desc: model.desc, url: model.url, rating: model.rating}
    api.updateItem(model.id, data);
    let found = store.library.libraryItems.find(item => item.id === model.id);
    found.title = model.title;
    found.desc = model.desc;
    found.url = model.url;
};

    export default {
        addLibraryItem,
        addApi,
        removeLibraryItem,
        updateLibraryItem
    };