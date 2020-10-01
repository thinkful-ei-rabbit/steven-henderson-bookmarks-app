import $ from 'jquery';
import store from './store';

/* GENERATOR FUNCTIONS */
/*  5 Functions
    generateTop();
    generateCreator();
    masterGenerator();
    generateCondensed();
    generateExpanded();
*/
//Generates the top section of the page
//Has been updated to utilize Semantic HTML
function generateTop() {
  return `
  <header>
    <h1>The Bookmark Library</h1>
  </header>
  <nav id='top' class='top'>
    <button id='create' type='submit'>Create</button>
    <div id='top-stars'>
      <img id='top-star-1' class='star-filter live-star' src='../stars/star.png' alt="Filter Star 1"></span>
      <img id='top-star-2' class='star-filter live-star' src='../stars/star.png' alt="Filter Star 2"></span>
      <img id='top-star-3' class='star-filter live-star' src='../stars/star.png' alt="Filter Star 3"></span>
      <img id='top-star-4' class='star-filter live-star' src='../stars/star.png' alt="Filter Star 4"></span>
      <img id='top-star-5' class='star-filter live-star' src='../stars/star.png' alt="Filter Star 5"></span>
    </div>
  </nav>
  <section id='bookmark-library'>
  </section>
  <section id='library'>
  </section>
  `
};

//Generates the Creator screen
//Single Purpose
function generateCreator() {
  return `
  <div id='creator'>
    <h2>Create a Bookmark</h2>
      <section id='creator-entry'>
        <label for='title'>Enter a Name</label>
          <input id='title' type='text' name='title' placeholder='the whitehouse'>
          <br><br>
        <label for='url'>Enter a URL</label>
          <input id='url' type='text' name='url' placeholder='e.g., https://whitehouse.gov'>
          <br><br>
        <label for='description'>Enter a Description</label>
          <br><br>
        <textarea id='description' type='message' name='description' rows='10' cols='60' maxlength="100"
          placeholder='The official website of the United States Whitehouse'></textarea>
          <br><br>
          <img id='creator-star-1' class='star-rater live-star' src='../stars/small-star.png' alt="Filter Star 1"/></span>
          <img id='creator-star-2' class='star-rater live-star' src='../stars/small-star.png' alt="Filter Star 2"></span>
          <img id='creator-star-3' class='star-rater live-star' src='../stars/small-star.png' alt="Filter Star 3"></span>
          <img id='creator-star-4' class='star-rater live-star' src='../stars/small-star.png' alt="Filter Star 4"></span>
          <img id='creator-star-5' class='star-rater live-star' src='../stars/small-star.png' alt="Filter Star 5"></span>
          <br><br>
          <div id='creator-buttons'>
            <button id='build' type='submit'>Book it!</button>
            <div class='divider'></div>
            <button id='cancel' type='submit'>Cancel it!</button>
          </div>
      </section>
  </div>
  `
};

//Generates Condensed or Expanded Bookmarks depending on State of their Expanded Value
//MOVE TO RENDER 
function masterGenerator() {
  let masterLog = "";
  if(store.library.filter === 0) {
    for (let i = 0; i < store.library.libraryItems.length; i++) {
        let quarry = store.library.libraryItems[i];
        if(quarry.expanded === false) {
            masterLog += generateCondensed(quarry);
        } else if(quarry.expanded === true) {
            masterLog += generateExpanded(quarry);
        };
    };
  } else {
    let filter = store.library.filter;
    let chosen = store.library.libraryItems.filter((item) => {
      return item.rating <= filter});
    for (let i = 0; i < chosen.length; i++) {
      let quarry = chosen[i];
      if(quarry.expanded === false) {
        masterLog += generateCondensed(quarry);
      } else if(quarry.expanded === true) {
        masterLog += generateExpanded(quarry);
      };
     };
  };
  return masterLog;
};

//EXPANDS a CONDENSED Bookmark
function generateCondensed(quarry) {
  return `
    <div id='${quarry.id}' class='condensed bookmark'>
      <div class='bookmark-left'>
        <span class='title'><h3>${quarry.title}</h3></span>
        <span class='star-rating'><img src='${store.library.ratingSystem[quarry.rating]}'</span>
      </div>
      <span class='bookmark-right'><button class='expand' class='bookmark-button' type='submit'>Expand</button></span>
    </div>
  `
};

//CONDENSES an EXPANDED Bookmark
function generateExpanded(quarry) {
    return `
      <div id=${quarry.id} class='expanded bookmark'>
        <div class='bookmark-left-big'>
          <div class='bookmark-top'>
            <span class='bookmark-top-left'><h3 id=${'title-' + quarry.id} class='editOff' contenteditable=false data-id=${quarry.id}>${quarry.title}</h3></span>
            <span class='expanded-star-rating'><img src='${store.library.ratingSystem[quarry.rating]}'</span>
          </div>
            <span class='bookmark-middle-left'><h4 id=${'description-' + quarry.id} class='editOff' contenteditable=false data-id=${quarry.id}>${quarry.desc}</h4></span>
            <span class='bookmark-bottom-left'><h5 id=${'url-' + quarry.id} class='editOff' contenteditable=false data-id=${quarry.id}>${quarry.url}</h5></span>
        </div>

        <div class='bookmark-right-big'>
          <span class='bookmark-top-right'><button class='condense' class='bookmark-button' type='submit'>Condense</button></span>
          <span class='bookmark-middle-right'><button class='edit' class='bookmark-button' type='submit' data-id=${quarry.id}>Edit</button></span>
          <span class='bookmark-bottom-right'><button class='remove' class='bookmark-button' type='submit'>Remove</button></span>
        </div>
      </div>
    `
};

export default {
  generateTop,
  generateCreator,
  masterGenerator,
};
