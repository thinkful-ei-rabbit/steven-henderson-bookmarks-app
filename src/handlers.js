import $ from 'jquery';
import starFilter from './starFilter';
import starRater from './starRater';
import renders from './renders';
import library from './library';
import store from './store';

/* HANDLER FUNCTIONS */
/* 11 Functions
    openCreator();
    buildCreator();
    validateCreator();
    validator();
    cancelCreator();
    starFilterClick();
    starRaterClick();
    expander();
    condenser();
    remover();
    editor();
*/

//Opens the Creator Menu
function openCreator() {
  $('#create').on('click', function() {
      store.library.state = 'creator';
      renders.updateUI();
      validateCreator();
      cancelCreator();
      starRaterClick();
  });
};

//BUILD Button creates a new Library Item
function buildCreator() {
  store.library.state = 'library';
  library.addLibraryItem();
  store.library.rating = 5;
};

//But first it must pass validation
//Handler with Single Focus
function validateCreator() {
  $('#build').on('click', validator);
};

//Function to Validate appropriate fields are filled out
function validator(event) {
  event.preventDefault();
  const x = $('#title').val();
  const y = $('#url').val();
  const z = store.library.rating;
  console.log(store.library.rating)
  if (x === "" && y === "") {
    alert("Both the Title and the URL must be filled out");
  } else if (x === "") {
    alert("Title must be filled out");
  } else if (y === "") {
    alert("URL must be filled out")
  } else if (y.includes('http://') || y.includes('https://')) {
    buildCreator();
  } else {
    alert("URL must contain either http:// or https://");
  };
}


//CANCEL Button goes back to Main Page without changing anything
function cancelCreator() {
  $('#cancel').on('click', function(event) {
      event.preventDefault();
      store.library.state = 'library';
      renders.updateUI();
  });
};

//Allows User to set the Star Filter
function starFilterClick() {
  $('.star-filter').on('click', function(event) {
      event.preventDefault();
      console.log(store.library.filter)
      let starPower = $(this).attr('id');
      if (this.classList == 'star-filter dead-star') {
          this.classList.remove('dead-star');
          this.classList.add('star-filter','live-star');
          let newStar = '../stars/star.png';
          starFilter.starFilterAdder(starPower);
          $(this).attr('src', newStar);
      } else {
          starFilter.starFilterRemover(starPower);
      }
      renders.renderLibrary();
  });
};

//Allows User to set a Bookmark's Star Rating
function starRaterClick() {
  $('.star-rater').on('click', function(event) {
      event.preventDefault();
      let starPower = $(this).attr('id');
      if (this.classList == 'star-rater dead-star') {
          this.classList.remove('dead-star');
          this.classList.add('star-rater','live-star');
          let newStar = '../stars/small-star.png';
          starRater.starRaterAdder(starPower);
          $(this).attr('src', newStar);
      } else if (this.classList == 'star-rater live-star') {
        starRater.starRaterRemover(starPower);
      }
  });
};

//Clicking an EXPAND Button will EXPAND the Bookmark
function expander() {
  $('.expand').on('click', function(event) {
      event.preventDefault();
      let expanderParent = this.closest('.bookmark');
      let expanderTag = $(expanderParent).attr('id');
      for (let i = 0; i < store.library.libraryItems.length; i++) {
          let quarry = store.library.libraryItems[i];
          if (quarry.id === expanderTag || quarry.id === 'temp') {
              quarry.expanded = true;
          };
      };
  renders.updateUI();
  });
  editor();
  remover();
};

//Clicking a CONDENSE Button will CONDENSE the Bookmark
function condenser() {
  $('.condense').on('click', function(event) {
      event.preventDefault();
      let condenserParent = this.closest('.bookmark');
      let condenserTag = $(condenserParent).attr('id');
      for (let i = 0; i < store.library.libraryItems.length; i++) {
          let quarry = store.library.libraryItems[i];
          if (quarry.id === condenserTag) {
              quarry.expanded = false;
          };
      };
  renders.renderLibrary();
  });
};

//Clicking a REMOVE Button will REMOVE the Bookmark
function remover() {
  $('.remove').on('click', function(event) {
      event.preventDefault();
      let removerParent = this.closest('.bookmark');
      console.log(removerParent)
      let removerTag = $(removerParent).attr('id');
      library.removeLibraryItem(removerTag);
  });
};

function editor() {
  $('.edit').on('click', function(event) {
    event.preventDefault();
    let editParent = this.closest('.bookmark')
    let editorTag = $(editParent).attr('id');
    let editorName = $(editParent).attr('name');
    let editsTitle = $(editParent).children().children().children().children('.editOff');
    let editsMain = $(editParent).children().children().children('.editOff');
    if (store.library.editMode === false) {
      store.library.editMode = true;
      $('.expand').prop('disabled', true);
      $('.condense').prop('disabled', true);
      $('.edit').prop('disabled', true);
      $('.remove').prop('disabled', true);
      $(this).prop('disabled', false);
      editParent.classList.add('editOn');
      $(editsTitle).attr('contenteditable', true);
      $(editsMain).attr('contenteditable', true);
    } else if (store.library.editMode === true) {
      store.library.editMode = false;
      $('.expand').prop('disabled', false);
      $('.condense').prop('disabled', false);
      $('.edit').prop('disabled', false);
      $('.remove').prop('disabled', false);
      editParent.classList.remove('editOn');
      $(editsTitle).attr('contenteditable', false);
      $(editsMain).attr('contenteditable', false);
    };
    library.updateLibraryItem(editorTag, editorName);
  });
};

export default {
  starFilterClick,
  openCreator,
  validateCreator,
  cancelCreator,
  starRaterClick,
  expander,
  condenser
}