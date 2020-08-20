//TOP STAR FILTER SETTER
//
// function starFilterHover() {
//     $('#top-stars').hover(function(event) {
//         document.getElementById('top-stars').classList.add('checked');
//         console.log('hover good');
//     });
// };

function starFilterClick() {
    $('.star-filter').on('click', function(event) {
        event.preventDefault();
        //document.getElementById('top-stars').classList.remove('fa_fa-star');
        //document.getElementById('top-stars').classList.add('fa_fa-star_checked');
        console.log('You clicked a FILTER star');
    });
};

function starRaterClick() {
    $('.star-rater').on('click', function(event) {
        event.preventDefault();
        //document.getElementById('top-stars').classList.remove('fa_fa-star');
        //document.getElementById('top-stars').classList.add('fa_fa-star_checked');
        console.log('You clicked a RATER star');
    });
};

// starFilterHover();
// starFilterClick();

//Generator Functions
//Generates a CONDENSED Bookmark


//EXPANDS a CONDENSED Bookmark
function generateCondensed() {
   return `
        <h3>this is it</h3>
        <button id='expand' class='bookmark-button' type='submit'>Expand</button>
    `
};

//CONDENSES an EXPANDED Bookmark
function generateExpanded() {
    return `
         <div class='bookmark-left'>
             <h3>this is it</h3>
             <hr>
             <h4>chai tea bing bang wahoo plumbing all day swanging all night ladies love me and dogs wanna be me knowWhatIMean() UP UP DOWN DOWN LEFT RIGHT LEFT RIGHT B A START</h4>
             <hr>
             <h5>yo here's the URL</h5>
         </div>
         <div class='bookmark-right'>
             <button id='edit' class='bookmark-button' type='submit'>Edit</button>
             <button id='remove' class='bookmark-button' type='submit'>Remove</button>
             <button id='condense' class='bookmark-button' type='submit'>Condense</button>
         </div>
     `
 };

//generateBookmark


//Render Functions
//Renders the Library
function renderLibrary(action, tag) {
    console.log(action);
    console.log(tag);
    //add loop to find ID
    //let element = document.getElementById()
    // if(value==='expand') {
    //     let spawn = generateExpanded();
    //     $('#a').html(spawn);
    //     condenser();
    // } if(value==='condense') {
    //     let spawn = generateCondensed();
    //     $('#a').html(spawn);
    //     expander();
    // } if(value==='expand') {
    //     let spawn = generateExpanded();
    //     $('#b').html(spawn);
    //     condenser();
    // } if(value==='condense') {
    //     let spawn = generateCondensed();
    //     $('#b').html(spawn);
    //     expander();
    // } if(value==='expand') {
    //     let spawn = generateExpanded();
    //     $('#c').html(spawn);
    //     condenser();
    // } if(value==='condense') {
    //     let spawn = generateCondensed();
    //     $('#c').html(spawn);
    //     expander();
    // } else {
    //     console.log('ohhh fuggg :DD')
    // }   
    console.log('I rendered this :) ')
};

//Places a Bookmark in the library



//Opens the Creator menu
function createBookmark() {
    $('#create').on('click', function() {
        console.log('Creator Activate!');
        document.getElementById('top').classList.add('hidden');
        document.getElementById('top').classList.remove('top');
        document.getElementById('creator').classList.remove('hidden');
    });
};


/* ALL HANDLERS FOR BUTTONS AND CLICKS */ 
//Clicking a Bookmark will expand it
function expander() {
    $('#expand').on('click', function(event) {
        event.preventDefault();
        console.log("I'm EXPANDING");
        let expanderParent = this.closest('.bookmark');
        console.log(expanderParent);
        expanderParent.classList.add('expanded');
        expanderParent.classList.remove('condensed');
        let expanderTag = $(this).closest('.bookmark').attr('id');
        console.log(expanderTag);
        renderLibrary('expand', expanderTag);
    });
};

//Clicking a Condense Button will condense the Bookmark
function condenser() {
    $('#condense').on('click', function(event) {
        event.preventDefault();
        console.log("I'm CONDENSING");
        let condenserParent = this.closest('.bookmark');
        condenserParent.classList.add('condensed');
        condenserParent.classList.remove('expanded');
        let condenserTag = $(this).closest('.bookmark').attr('id');
        console.log(condenserTag);
        renderLibrary('condense', condenserTag);
    });
};

//Build button creates a new library item
function buildCreator() {
    $('#build').on('click', function(event) {
        event.preventDefault();
        console.log('Built!');
        document.getElementById('creator').classList.add('hidden');
        document.getElementById('top').classList.add('top');
        document.getElementById('top').classList.remove('hidden');
        //Generate Library Item
        //Update API
        //Reset URL
        //Reset Description
        //Reset Star Rating
    });
};

//Cancel button goes back to main without changing anything
function cancelCreator() {
    $('#cancel').on('click', function(event) {
        event.preventDefault();
        console.log('cancelled!');
        document.getElementById('creator').classList.add('hidden');
        document.getElementById('top').classList.add('top');
        document.getElementById('top').classList.remove('hidden');
        //Generate Libary Item
        //Update API
        //Reset URL
        //Reset Description
        //Reset Star Rating
    });
};

function main() {
    //renderLibrary();
    createBookmark();
    starFilterClick();
    expander();
    condenser();
    starRaterClick();
    buildCreator();
    cancelCreator();
};

$(main);