import $ from 'jquery';
import starFilter from './starFilter';
import starRater from './starRater';
import renders from './renders';
import library from './library';
import store from './store';

/* ALL HANDLERS FOR BUTTONS AND CLICKS */ 
//Opens the Creator Menu
function openCreator() {
  $('#create').on('click', function() {
      store.library.state = 'creator';
      renders.updateUI();
      validateCreator();
      cancelCreator();
      starRaterClick();
      store.library.filter = 0;
  });
};

//BUILD Button creates a new Library Item
function buildCreator() {
  $('#top').html('');
  $('#library').html('');
  store.library.state = 'library';
  library.addLibraryItem();
  //Update API
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
  if (x === "" && y === "") {
    alert("Both the Title and the URL must be filled out");
  } else if (x === "") {
    alert("Title must be filled out");
  } else if (y === "") {
    alert("URL must be filled out")
  } else {
    buildCreator()
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
      let starPower = $(this).attr('id');
      if (this.classList == 'star-filter dead-star') {
          this.classList.remove('dead-star');
          this.classList.add('star-filter','live-star');
          let newStar = '../stars/star.png';
          starFilter.starFilterAdder(starPower);
          $(this).attr('src', newStar);
      } else if (this.classList == 'star-filter live-star') {
          this.classList.remove('live-star');
          this.classList.add('star-filter','dead-star');
          let newStar = '../stars/star-hollow.png';
          $(this).attr('src', newStar);
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
          this.classList.remove('live-star');
          this.classList.add('star-rater','dead-star');
          let newStar = '../stars/small-star-hollow.png';
          $(this).attr('src', newStar);
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
          if (quarry.id === expanderTag) {
              quarry.expanded = true;
          };
      };
  renders.renderLibrary();
  });
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
  })
}

export default {
  starFilterClick,
  openCreator,
  validateCreator,
  cancelCreator,
  starRaterClick,
  expander,
  condenser
}