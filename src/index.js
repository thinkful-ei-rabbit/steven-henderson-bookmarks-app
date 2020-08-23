import $ from 'jquery';

function generateTop() {
    return `<header>
    <h1>The Bookmark Library</h1>
</header>
<div id='top' class='top'>
    <button id='create' type='submit'>Create</button>
    <div id='top-stars'>
        <label><img id='top-star-1' class='star-filter dead-star' src='../stars/star-hollow.png'></span></label>
        <label><img id='top-star-2' class='star-filter dead-star' src='../stars/star-hollow.png'></span></label>
        <label><img id='top-star-3' class='star-filter dead-star' src='../stars/star-hollow.png'></span></label>
        <label><img id='top-star-4' class='star-filter dead-star' src='../stars/star-hollow.png'></span></label>
        <label><img id='top-star-5' class='star-filter dead-star' src='../stars/star-hollow.png'></span></label>
    </div>
</div>`
};

function generateMore() {
    return `<div id='creator'>
    <h2>Create a Bookmark</h2>
    <form id='creator-entry'>
        <label for='title'>Enter a Name</label>
        <input type='text' name='title' placeholder='the whitehouse' required>
        <br><br>
        <label for='url'>Enter a URL</label>
        <input type='text' name='url' placeholder='e.g., whitehouse.gov' required>
        <br><br>
        <label for='description'>Enter a Description</label>
        <br><br>
        <textarea type='message' name='description' rows='10' cols='60' maxlength="100"
          placeholder='The official website of the United States Whitehouse' required></textarea>
          <br><br>
          <img id='creator-star-1' class='star-rater dead-star' src='../stars/small-star-hollow.png'></span>
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
    <article id='bookmark-library'>

    </article>`
};



function main() {
  console.log('DOM is loaded');

  //const startMsg = $('<p>Webpack is working!</p>');
  $('#root').append(generateTop());
  $('#create').click(function(event){
      event.preventDefault();
    $('#library').append(generateMore());
    $('#creator-entry').submit(function(event){
        event.preventDefault();
        debugger;
    })
  });

};

$(main);