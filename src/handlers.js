import $ from 'jquery';
import starFilter from './starFilter';
import starRater from './starRater';
import renders from './renders';
import library from './library';

/* ALL HANDLERS FOR BUTTONS AND CLICKS */ 
//Opens the Creator Menu
function openCreator() {
  $('#create').on('click', function() {
      document.getElementById('top').classList.add('hidden');
      document.getElementById('top').classList.remove('top');
      document.getElementById('creator').classList.remove('hidden');
      buildCreator();
      cancelCreator();
  });
};

//BUILD Button creates a new Library Item
function buildCreator() {
  $('#build').on('click', function(event) {
      event.preventDefault();
      document.getElementById('creator').classList.add('hidden');
      document.getElementById('top').classList.add('top');
      document.getElementById('top').classList.remove('hidden');
      //Generate Library Item
      //console.log(this.closest('#creator-entry'));
      let creation = this.closest('#creator-entry');
      //library.addLibraryItem(creation);
      //Update API
      document.getElementById('creator-entry').reset();
  });
};

//CANCEL Button goes back to Main Page without changing anything
function cancelCreator() {
  $('#cancel').on('click', function(event) {
      event.preventDefault();
      document.getElementById('creator').classList.add('hidden');
      document.getElementById('top').classList.add('top');
      document.getElementById('top').classList.remove('hidden');
      //Update API
      document.getElementById('creator-entry').reset();
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
      for (let i = 0; i < library.store.libraryItems.length; i++) {
          let quarry = library.store.libraryItems[i];
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
      for (let i = 0; i < library.store.libraryItems.length; i++) {
          let quarry = library.store.libraryItems[i];
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
  starRaterClick,
  expander,
  condenser
}