import $ from 'jquery';
import generators from './generators';
import handlers from './handlers';
import store from './store';

/* RENDER FUNCTIONs */
//Renders the initial HTML
function renderInitial() {
  $('#root').html(generators.generateTop());
  handlers.openCreator();
  handlers.starFilterClick();
};

//Renders the Creator
function renderCreator() {
  document.getElementById('top').classList.add('hidden');
  document.getElementById('top').classList.remove('top');
  $('#bookmark-library').html(generators.generateCreator());
  //Conditionally calls the Form Creator on Create Button Click
};

//Single Focus Function that determines what to render based on state of Store
function updateUI() {
  if(store.library.state === "library") {
    renderInitial();
    renderLibrary();
  };
  if(store.library.state === "creator") {
    renderCreator();
  };
};

//Renders the Library
//Did the student create at least one render function (that may or may not call other rendering functions) 
//that conditionally replaces the content of the <main> tag based upon the properties held within the `store`?
//This Render Function is dependent on the values within the Store and replaces Content in the <Main> Tag when calling masterGenerator()
function renderLibrary() {
  let spawn = generators.masterGenerator()
  $('#library').html(spawn);
  debugger;
  handlers.expander();
  handlers.condenser();
};




export default {
  renderInitial,
  renderLibrary,
  updateUI
};