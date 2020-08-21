import library from './library.js';

//TOP STAR FILTER SETTER
//
// function starFilterHover() {
//     $('#top-stars').hover(function(event) {
//         document.getElementById('top-stars').classList.add('checked');
//         console.log('hover good');
//     });
// };

// starFilterHover();


/* GENERATOR FUNCTIONS */
//Generates the Star Filter

//Generates the Creator Menu

//Condensed and Expanded Generators Combined
function masterGenerator() {
    let masterLog = "";
    for (let i = 0; i < library.libraryItems.length; i++) {
        let quarry = library.libraryItems[i];
        if(quarry.expanded === false) {
            masterLog += generateCondensed(quarry);
        } else if(quarry.expanded === true) {
            masterLog += generateExpanded(quarry);
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
                <span class='bookmark-top-left'><h3 contenteditable= true>${quarry.title}</h3></span>
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

//generateBookmark


/* RENDER FUNCTIONS */
//Renders the Library
function renderLibrary() {
    let spawn = masterGenerator()
    $('#bookmark-library').html(spawn); 
    expander();
    condenser();
};

//Places a Bookmark in the library


/* ALL HANDLERS FOR BUTTONS AND CLICKS */ 

//Opens the Creator Menu
function openCreator() {
    $('#create').on('click', function() {
        console.log('Creator Activate!');
        document.getElementById('top').classList.add('hidden');
        document.getElementById('top').classList.remove('top');
        document.getElementById('creator').classList.remove('hidden');
    });
};

//BUILD Button creates a new Library Item
function buildCreator() {
    $('#build').on('click', function(event) {
        event.preventDefault();
        console.log('Built!');
        document.getElementById('creator').classList.add('hidden');
        document.getElementById('top').classList.add('top');
        document.getElementById('top').classList.remove('hidden');
        //Generate Library Item
        //console.log(this.closest('#creator-entry'));
        let creation = this.closest('#creator-entry');
        library.addLibraryItem(creation);
        //Update API
        document.getElementById('creator-entry').reset();
    });
};

//CANCEL Button goes back to Main Page without changing anything
function cancelCreator() {
    $('#cancel').on('click', function(event) {
        event.preventDefault();
        console.log('cancelled!');
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
        console.log($(this).attr('id'));
        let starPower = $(this).attr('id');
        if (this.classList == 'star-filter dead-star') {
            this.classList.remove('dead-star');
            this.classList.add('star-filter','live-star');
            let newStar = '../stars/star.png';
            library.starFilterAdder(starPower);
            $(this).attr('src', newStar);
        } else if (this.classList == 'star-filter live-star') {
            this.classList.remove('live-star');
            this.classList.add('star-filter','dead-star');
            let newStar = '../stars/star-hollow.png';
            $(this).attr('src', newStar);
            library.starFilterRemover(starPower);
        }
        console.log('You clicked a FILTER star');
    });
};

//Allows User to set a Bookmark's Star Rating
function starRaterClick() {
    $('.star-rater').on('click', function(event) {
        event.preventDefault();
        console.log($(this).attr('id'));
        let starPower = $(this).attr('id');
        if (this.classList == 'star-rater dead-star') {
            this.classList.remove('dead-star');
            this.classList.add('star-rater','live-star');
            let newStar = '../stars/small-star.png';
            library.starRaterAdder(starPower);
            $(this).attr('src', newStar);
        } else if (this.classList == 'star-rater live-star') {
            this.classList.remove('live-star');
            this.classList.add('star-rater','dead-star');
            let newStar = '../stars/small-star-hollow.png';
            $(this).attr('src', newStar);
            library.starRaterRemover(starPower);
        }
        console.log('You clicked a RATER star');
    });
};

//Clicking an EXPAND Button will EXPAND the Bookmark
function expander() {
    $('.expand').on('click', function(event) {
        event.preventDefault();
        console.log("I'm EXPANDING");
        let expanderParent = this.closest('.bookmark');
        let expanderTag = $(expanderParent).attr('id');
        for (let i = 0; i < library.libraryItems.length; i++) {
            let quarry = library.libraryItems[i];
            if (quarry.id === expanderTag) {
                quarry.expanded = true;
            };
        };
    renderLibrary();
    });
};

//Clicking a CONDENSE Button will CONDENSE the Bookmark
function condenser() {
    $('.condense').on('click', function(event) {
        event.preventDefault();
        console.log("I'm CONDENSING");
        let condenserParent = this.closest('.bookmark');
        let condenserTag = $(condenserParent).attr('id');
        for (let i = 0; i < library.libraryItems.length; i++) {
            let quarry = library.libraryItems[i];
            if (quarry.id === condenserTag) {
                quarry.expanded = false;
            };
        };
    renderLibrary();
    });
};

    //NON ESSENTIAL

    // //Gives User the ability to Edit an Expanded Bookmark
    // function editor() {
    //     $('.edit').on('click', function(event) {
    //         event.preventDefault();
    //         let victim = this.closest('.bookmark');
    //         console.log(victim).div;
    //         // $(victim.h3).attr('contenteditable', true);
    //         // $(victim.h4).attr('contenteditable', true);
    //         // $(victim.h5).attr('contenteditable', true);
    //     });
    // };

    // //Cancels the Edit Function
    // function cancelEditor() {

    // }


function main() {
    renderLibrary();
    openCreator();
    starFilterClick();
    starRaterClick();
    buildCreator();
    cancelCreator();
    //editor();
};

export default {
    buildCreator,
    renderLibrary
};

$(main);