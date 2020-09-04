import $ from 'jquery';
import library from './library';

//GENERATOR FUNCTIONS
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
      <label><img id='top-star-1' class='star-filter dead-star' src='../stars/star-hollow.png'></span></label>
      <label><img id='top-star-2' class='star-filter dead-star' src='../stars/star-hollow.png'></span></label>
      <label><img id='top-star-3' class='star-filter dead-star' src='../stars/star-hollow.png'></span></label>
      <label><img id='top-star-4' class='star-filter dead-star' src='../stars/star-hollow.png'></span></label>
      <label><img id='top-star-5' class='star-filter dead-star' src='../stars/star-hollow.png'></span></label>
    </div>
  </nav>
  <section id='bookmark-library'>
  </section>
  <section id='library'>
  </section>
  `
};

//Generates the Creator screen
function generateCreator() {
  return `
  <div id='creator'>
    <h2>Create a Bookmark</h2>
      <form id='creator-entry'>
        <label for='title'>Enter a Name</label>
          <input id='title' type='text' name='title' placeholder='the whitehouse' isRequired>
          <br><br>
        <label for='url'>Enter a URL</label>
          <input id='url' type='text' name='url' placeholder='e.g., whitehouse.gov' isRequired>
          <br><br>
        <label for='description'>Enter a Description</label>
          <br><br>
        <textarea id='description' type='message' name='description' rows='10' cols='60' maxlength="100"
          placeholder='The official website of the United States Whitehouse' required></textarea>
          <br><br>
          <img data-rating='1' id='creator-star-1' class='star-rater dead-star' src='../stars/small-star-hollow.png'></span>
          <img id='creator-star-2' class='star-rater dead-star' src='../stars/small-star-hollow.png'></span>
          <img id='creator-star-3' class='star-rater dead-star' src='../stars/small-star-hollow.png'></span>
          <img id='creator-star-4' class='star-rater dead-star' src='../stars/small-star-hollow.png'></span>
          <img id='creator-star-5' class='star-rater dead-star' src='../stars/small-star-hollow.png'></span>
          <br><br>
          <div id='creator-buttons'>
            <button id='build' type='submit'>Book it!</button>
            <div class='divider'></div>
            <button id='cancel' type='submit'>Cancel it!</button>
          </div>
      </form>
  </div>
  `
};

//Generates Condensed or Expanded Bookmarks depending on State of their Expanded Value
//MOVE TO RENDER 
function masterGenerator() {
  let masterLog = "";
  if(library.store.filter === 0) {
    for (let i = 0; i < library.store.libraryItems.length; i++) {
        let quarry = library.store.libraryItems[i];
        if(quarry.expanded === false) {
            masterLog += generateCondensed(quarry);
        } else if(quarry.expanded === true) {
            masterLog += generateExpanded(quarry);
        };
    };
  } else {
    let filter = library.store.filter;
    let chosen = library.store.libraryItems.filter((item) => {
      return item.rating === filter});
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
        <span class='star-rating'><img src='${library.ratingSystem[quarry.rating]}'</span>
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
          <span class='bookmark-top-left'><h3 contenteditable= true>${quarry.title}</h3></span>
          <span class='expanded-star-rating'><img src='${library.ratingSystem[quarry.rating]}'</span>
        </div>
          <span class='bookmark-middle-left'><h4 contenteditable= true>${quarry.description}</h4></span>
          <span class='bookmark-bottom-left'><h5 contenteditable= true>${quarry.url}</h5></span>
      </div>

      <div class='bookmark-right-big'>
        <span class='bookmark-top-right'><button class='condense' class='bookmark-button' type='submit'>Condense</button></span>
        <span class='bookmark-middle-right'><button class='edit' class='bookmark-button' type='submit'>Edit</button></span>
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