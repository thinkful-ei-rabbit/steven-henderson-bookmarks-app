import $ from 'jquery';
import library from './library';

//For giving the Bookmark Library a Star Filter Rating
function ratingSetting(power) {
  const numbers = /\d+/;
  let result = power.match(numbers);
  if(result == 1) {
    library.store.rating= 1;
  } if(result == 2) {
    library.store.rating= 2;
  } if(result == 3) {
    library.store.rating= 3;
  } if(result == 4) {
    library.store.rating= 4;
  } if(result == 5) {
    library.store.rating= 5;
  };
};

//Runs whenever the Creator is closed and resets Star Rater to All Clear
function starRaterDefault() {
  library.store.rating= 0;
  let newStar = '../stars/small-star-hollow.png';
  document.getElementById('creator-star-1').classList.replace('live-star', 'dead-star');
  document.getElementById('creator-star-2').classList.replace('live-star', 'dead-star');
  document.getElementById('creator-star-3').classList.replace('live-star', 'dead-star');
  document.getElementById('creator-star-4').classList.replace('live-star', 'dead-star');
  document.getElementById('creator-star-5').classList.replace('live-star', 'dead-star');
  $(document.getElementById('creator-star-1')).attr('src', newStar);
  $(document.getElementById('creator-star-2')).attr('src', newStar);
  $(document.getElementById('creator-star-3')).attr('src', newStar);
  $(document.getElementById('creator-star-4')).attr('src', newStar);
  $(document.getElementById('creator-star-5')).attr('src', newStar);
};

//Gives Bookmark a Star Rating for Filter and Visual purposes
function starRaterAdder(power) {
  let newStar = '../stars/small-star.png';
  if(power === 'creator-star-1') {
      console.log('All good bruh');
  } if(power === 'creator-star-2') {
      document.getElementById('creator-star-1').classList.remove('dead-star');
      document.getElementById('creator-star-1').classList.add('star-rater','live-star');
      $(document.getElementById('creator-star-1')).attr('src', newStar);
  } if(power === 'creator-star-3') {
      document.getElementById('creator-star-1').classList.remove('dead-star');
      document.getElementById('creator-star-1').classList.add('star-rater','live-star');
      document.getElementById('creator-star-2').classList.remove('dead-star');
      document.getElementById('creator-star-2').classList.add('star-rater','live-star');
      $(document.getElementById('creator-star-1')).attr('src', newStar);
      $(document.getElementById('creator-star-2')).attr('src', newStar);
  } if(power === 'creator-star-4') {
      document.getElementById('creator-star-1').classList.remove('dead-star');
      document.getElementById('creator-star-1').classList.add('star-rater','live-star');
      document.getElementById('creator-star-2').classList.remove('dead-star');
      document.getElementById('creator-star-2').classList.add('star-rater','live-star');
      document.getElementById('creator-star-3').classList.remove('dead-star');
      document.getElementById('creator-star-3').classList.add('star-rater','live-star');
      $(document.getElementById('creator-star-1')).attr('src', newStar);
      $(document.getElementById('creator-star-2')).attr('src', newStar);
      $(document.getElementById('creator-star-3')).attr('src', newStar);
  } if(power === 'creator-star-5') {
      document.getElementById('creator-star-1').classList.remove('dead-star');
      document.getElementById('creator-star-1').classList.add('star-rater','live-star');
      document.getElementById('creator-star-2').classList.remove('dead-star');
      document.getElementById('creator-star-2').classList.add('star-rater','live-star');
      document.getElementById('creator-star-3').classList.remove('dead-star');
      document.getElementById('creator-star-3').classList.add('star-rater','live-star');
      document.getElementById('creator-star-4').classList.remove('dead-star');
      document.getElementById('creator-star-4').classList.add('star-rater','live-star');
      $(document.getElementById('creator-star-1')).attr('src', newStar);
      $(document.getElementById('creator-star-2')).attr('src', newStar);
      $(document.getElementById('creator-star-3')).attr('src', newStar);
      $(document.getElementById('creator-star-4')).attr('src', newStar);
  };
  ratingSetting(power);
};

//Gives Bookmark a Star Rating for Filter and Visual purposes
function starRaterRemover(power) {
  let newStar = '../stars/small-star-hollow.png';
  if(power === 'creator-star-5') {
      console.log('All good bruh');
  } if(power === 'creator-star-4') {
      document.getElementById('creator-star-5').classList.remove('live-star');
      document.getElementById('creator-star-5').classList.add('star-rater','dead-star');
      $(document.getElementById('creator-star-5')).attr('src', newStar);
  } if(power === 'creator-star-3') {
      document.getElementById('creator-star-5').classList.remove('live-star');
      document.getElementById('creator-star-5').classList.add('star-rater','dead-star');
      document.getElementById('creator-star-4').classList.remove('live-star');
      document.getElementById('creator-star-4').classList.add('star-rater','dead-star');
      $(document.getElementById('creator-star-5')).attr('src', newStar);
      $(document.getElementById('creator-star-4')).attr('src', newStar);
  } if(power === 'creator-star-2') {
      document.getElementById('creator-star-5').classList.remove('live-star');
      document.getElementById('creator-star-5').classList.add('star-rater','dead-star');
      document.getElementById('creator-star-4').classList.remove('live-star');
      document.getElementById('creator-star-4').classList.add('star-rater','dead-star');
      document.getElementById('creator-star-3').classList.remove('live-star');
      document.getElementById('creator-star-3').classList.add('star-rater','dead-star');
      $(document.getElementById('creator-star-5')).attr('src', newStar);
      $(document.getElementById('creator-star-4')).attr('src', newStar);
      $(document.getElementById('creator-star-3')).attr('src', newStar);
  } if(power === 'creator-star-1') {
      document.getElementById('creator-star-5').classList.remove('live-star');
      document.getElementById('creator-star-5').classList.add('star-rater','dead-star');
      document.getElementById('creator-star-4').classList.remove('live-star');
      document.getElementById('creator-star-4').classList.add('star-rater','dead-star');
      document.getElementById('creator-star-3').classList.remove('live-star');
      document.getElementById('creator-star-3').classList.add('star-rater','dead-star');
      document.getElementById('creator-star-2').classList.remove('live-star');
      document.getElementById('creator-star-2').classList.add('star-rater','dead-star');
      $(document.getElementById('creator-star-5')).attr('src', newStar);
      $(document.getElementById('creator-star-4')).attr('src', newStar);
      $(document.getElementById('creator-star-3')).attr('src', newStar);
      $(document.getElementById('creator-star-2')).attr('src', newStar);
  };
  ratingSetting(power);
};

export default {
  starRaterDefault,
  starRaterAdder,
  starRaterRemover
}