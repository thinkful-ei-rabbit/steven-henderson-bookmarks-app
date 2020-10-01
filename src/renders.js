import $ from 'jquery';
import generators from './generators';
import handlers from './handlers';
import store from './store';

/* RENDER FUNCTIONs */
/* 4 Functions
    renderIntial()
    updateUI
    renderLibrary
    removeLibrary
    renderCreator
    removeCreator
*/

//Renders the initial HTML
function renderInitial() {
  $('#root').html(generators.generateTop());
  handlers.openCreator();
  handlers.starFilterClick();
};

//Single Focus Function that determines what to render based on state of Store
function updateUI() {
  if(store.library.state === "library") {
    renderLibrary();
  } else if(store.library.state === "creator") {
    renderCreator();
  };
};

//Renders the Library
function renderLibrary() {
  $('#library').html(generators.masterGenerator());
  removeCreator();
  handlers.expander();
  handlers.condenser();
};

//Removes the Library
function removeLibrary() {
  $('#library').empty();
  $('#library').html("");
};

//Renders the Creator
function renderCreator() {
  $('#bookmark-library').html(generators.generateCreator());
  removeLibrary();
};

//Removes the Creator
function removeCreator() {
  $('#bookmark-library').empty();
  $('#bookmark-library').html("");
};


export default {
  renderInitial,
  renderLibrary,
  removeLibrary,
  updateUI
};