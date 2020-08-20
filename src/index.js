//TOP STAR FILTER SETTER
//
// function starFilterHover() {
//     $('#top-stars').hover(function(event) {
//         document.getElementById('top-stars').classList.add('checked');
//         console.log('hover good');
//     });
// };

// function starFilterClick() {
//     $('#top').click('fa-star', function() {
//         document.getElementById('top-stars').classList.remove('fa_fa-star');
//         document.getElementById('top-stars').classList.add('fa_fa-star_checked');
//         console.log('click good');
//     });
// };

// starFilterHover();
// starFilterClick();

//Generator Functions
//generateBookmark


//Render Functions
//Opens up a create a Bookmark Screen
//Places a Bookmark in the library



//Create Button creates new url
function createBookmark() {
    $('#create').on('click', function() {
        console.log('click good');
        document.getElementById('top').classList.add('hidden');
        document.getElementById('top').classList.remove('top');
        document.getElementById('creator').classList.remove('hidden');
    });
};

//Build button creates a new library item
function buildCreator() {
    $('#build').on('click', function(event) {
        event.preventDefault();
        console.log('Built!');
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

createBookmark();
buildCreator();
cancelCreator();