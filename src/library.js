import main from './index.js';

const libraryItems = [
    {
        id: 'a',
        title: "plumbing hard",
        description: "chai tea bing bang wahoo plumbing all day swanging all night",
        url: "hffbs://itsAme.luihio",
        rating: 5,
        expanded: true,
    },
    {
        id: 'b',
        title: "oh you bad",
        description: "ladies love me and dogs wanna be me knowWhatIMean()",
        url: "net.getiton.tonight",
        rating: 3,
        expanded: false,
    },
    {
        id: "c",
        title: "vidya guys",
        description: "UP UP DOWN DOWN LEFT RIGHT LEFT RIGHT B A START",
        url: "vvv.realgamersnow.moc",
        rating: 0,
        expanded: false,
    },
];

const ratingSystem = {
    0: '../stars/zero-of-five.png',
    1: '../stars/one-of-five.png',
    2: '../stars/two-of-five.png',
    3: '../stars/three-of-five.png',
    4: '../stars/four-of-five.png',
    5: '../stars/five-of-five.png'
};

function addLibraryItem(creation) {
    let cereal = $(creation).serializeArray();
    let newBookmark = {
        id: `(cuid())`,
        title: `${cereal[0].value}`,
        description: `${cereal[2].value}`,
        url: `${cereal[1].value}`,
        rating: 5,
        expanded: false,
    }
    console.log(newBookmark);
    libraryItems.push(newBookmark);
    console.log(libraryItems);
    console.log(libraryItems[2]);
    console.log(libraryItems[3]);
    main.renderLibrary();
};

function starFilterAdder(power) {
    let newStar = '../stars/star.png';
    if(power === 'top-star-1') {
        console.log('All good bruh');
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
};

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
};

function starFilterRemover(power) {
    let newStar = '../stars/star-hollow.png';
    if(power === 'top-star-5') {
        console.log('All good bruh');
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
};

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
};

// const topStars = `
//     <img id='top-star-1' class='star-filter' src='../stars/star-hollow.png'></span>
//     <img id='top-star-2' class='star-filter' src='../stars/star-hollow.png'></span>
//     <img id='top-star-3' class='star-filter' src='../stars/star.png'></span>
//     <img id='top-star-4' class='star-filter' src='../stars/star.png'></span>
//     <img id='top-star-5' class='star-filter' src='../stars/star.png'></span>
//     `
//     //make top-star-# selectable
//     //figure out how to 
//     `
//     <img id='top-star-1' class='star-filter' src='../stars/star-hollow.png'></span>
//     <img id='top-star-2' class='star-filter' src='../stars/star-hollow.png'></span>
//     <img id='top-star-3' class='star-filter' src='../stars/star.png'></span>
//     <img id='top-star-4' class='star-filter' src='../stars/star.png'></span>
//     <img id='top-star-5' class='star-filter' src='../stars/star.png'></span>
//     `
   

    export default {
        libraryItems,
        ratingSystem,
        addLibraryItem,
        starFilterAdder,
        starRaterAdder,
        starFilterRemover,
        starRaterRemover
    };