import $ from 'jquery';
import generators from './generators';
import handlers from './handlers';

/* RENDER FUNCTIONs */
//Renders the initial HTML
function renderInitial() {
  $('#root').html(generators.generateTop());
  $('#bookmark-library').html(generators.generateCreator());
};


//Renders the Library
function renderLibrary() {
  let spawn = generators.masterGenerator()
  $('#library').html(spawn); 
  handlers.expander();
  handlers.condenser();
};

export default {
  renderInitial,
  renderLibrary,
};