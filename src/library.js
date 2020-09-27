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
function addLibraryItem() {
    let newBookmark = {
        title: $('#title').val(),
        description: $('#description').val(),
        url: $('#url').val(),
        rating: store.library.rating,
        expanded: false,
    }
    addApi(newBookmark)
};

function addApi(newBookmark) {
    api.createItem(newBookmark.title, newBookmark.description, newBookmark.url, newBookmark.rating)
    .then((newItem) => {
        newItem.expanded = false
        store.library.libraryItems.push(newItem)
        renders.removeLibrary()
        renders.updateUI()
    })
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

function updateLibraryItem(id, itemName) { 
      api.updateItem(id, { name: itemName })
        .then(() => {
          const updater = store.library.libraryItems.findById(id);
          Object.assign(currentItem, itemName)
          render();
        })
};


    export default {
        addLibraryItem,
        removeLibraryItem,
        updateLibraryItem
    };