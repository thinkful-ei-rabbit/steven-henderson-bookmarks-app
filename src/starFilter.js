import $ from 'jquery';
import store from './store';

/* STAR FILTER FUNCTIONS */
/* 3 Functions
    filterSetting();
    starFilterAdder();
    starFilterRemover();
*/

//For giving the Bookmark Library a Star Filter Rating when Stars are added
function filterSetting(power) {
  const numbers = /\d+/;
  let result = power.match(numbers);
  if(result == 1) {
    store.library.filter= 1;
  } if(result == 2) {
    store.library.filter= 2;
  } if(result == 3) {
    store.library.filter= 3;
  } if(result == 4) {
    store.library.filter= 4;
  } if(result == 5) {
    store.library.filter= 5;
  };
};

//Adds Star Visual to Star Filter
function starFilterAdder(power) {
  let newStar = '../stars/star.png';
  if(power === 'top-star-1') {
  } if(power === 'top-star-2') {
      document.getElementById('top-star-1').classList.remove('dead-star');
      document.getElementById('top-star-1').classList.add('star-filter','live-star');
      $(document.getElementById('top-star-1')).attr('src', newStar);
  } if(power === 'top-star-3') {
      document.getElementById('top-star-1').classList.remove('dead-star');
      document.getElementById('top-star-1').classList.add('star-filter','live-star');
      document.getElementById('top-star-2').classList.remove('dead-star');
      document.getElementById('top-star-2').classList.add('star-filter','live-star');
      $(document.getElementById('top-star-1')).attr('src', newStar);
      $(document.getElementById('top-star-2')).attr('src', newStar);
  } if(power === 'top-star-4') {
      document.getElementById('top-star-1').classList.remove('dead-star');
      document.getElementById('top-star-1').classList.add('star-filter','live-star');
      document.getElementById('top-star-2').classList.remove('dead-star');
      document.getElementById('top-star-2').classList.add('star-filter','live-star');
      document.getElementById('top-star-3').classList.remove('dead-star');
      document.getElementById('top-star-3').classList.add('star-filter','live-star');
      $(document.getElementById('top-star-1')).attr('src', newStar);
      $(document.getElementById('top-star-2')).attr('src', newStar);
      $(document.getElementById('top-star-3')).attr('src', newStar);
  } if(power === 'top-star-5') {
      document.getElementById('top-star-1').classList.remove('dead-star');
      document.getElementById('top-star-1').classList.add('star-filter','live-star');
      document.getElementById('top-star-2').classList.remove('dead-star');
      document.getElementById('top-star-2').classList.add('star-filter','live-star');
      document.getElementById('top-star-3').classList.remove('dead-star');
      document.getElementById('top-star-3').classList.add('star-filter','live-star');
      document.getElementById('top-star-4').classList.remove('dead-star');
      document.getElementById('top-star-4').classList.add('star-filter','live-star');
      $(document.getElementById('top-star-1')).attr('src', newStar);
      $(document.getElementById('top-star-2')).attr('src', newStar);
      $(document.getElementById('top-star-3')).attr('src', newStar);
      $(document.getElementById('top-star-4')).attr('src', newStar);
  };
  filterSetting(power);
};

//Removes Star Visual from Star Filter
function starFilterRemover(power) {
  let newStar = '../stars/star-hollow.png';
  if(power === 'top-star-5') {
  } if(power === 'top-star-4') {
      document.getElementById('top-star-5').classList.remove('live-star');
      document.getElementById('top-star-5').classList.add('star-filter','dead-star');
      $(document.getElementById('top-star-5')).attr('src', newStar);
  } if(power === 'top-star-3') {
      document.getElementById('top-star-5').classList.remove('live-star');
      document.getElementById('top-star-5').classList.add('star-filter','dead-star');
      document.getElementById('top-star-4').classList.remove('live-star');
      document.getElementById('top-star-4').classList.add('star-filter','dead-star');
      $(document.getElementById('top-star-5')).attr('src', newStar);
      $(document.getElementById('top-star-4')).attr('src', newStar);
  } if(power === 'top-star-2') {
      document.getElementById('top-star-5').classList.remove('live-star');
      document.getElementById('top-star-5').classList.add('star-filter','dead-star');
      document.getElementById('top-star-4').classList.remove('live-star');
      document.getElementById('top-star-4').classList.add('star-filter','dead-star');
      document.getElementById('top-star-3').classList.remove('live-star');
      document.getElementById('top-star-3').classList.add('star-filter','dead-star');
      $(document.getElementById('top-star-5')).attr('src', newStar);
      $(document.getElementById('top-star-4')).attr('src', newStar);
      $(document.getElementById('top-star-3')).attr('src', newStar);
  } if(power === 'top-star-1') {
      document.getElementById('top-star-5').classList.remove('live-star');
      document.getElementById('top-star-5').classList.add('star-filter','dead-star');
      document.getElementById('top-star-4').classList.remove('live-star');
      document.getElementById('top-star-4').classList.add('star-filter','dead-star');
      document.getElementById('top-star-3').classList.remove('live-star');
      document.getElementById('top-star-3').classList.add('star-filter','dead-star');
      document.getElementById('top-star-2').classList.remove('live-star');
      document.getElementById('top-star-2').classList.add('star-filter','dead-star');
      $(document.getElementById('top-star-5')).attr('src', newStar);
      $(document.getElementById('top-star-4')).attr('src', newStar);
      $(document.getElementById('top-star-3')).attr('src', newStar);
      $(document.getElementById('top-star-2')).attr('src', newStar);
  };
  filterSetting(power);
};

export default {
  starFilterAdder,
  starFilterRemover
}