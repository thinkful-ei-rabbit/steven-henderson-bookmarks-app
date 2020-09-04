import $ from 'jquery';
import renders from './renders';
 ///MAKE STORE ITS OWN THING
let store = {
    libraryItems: [
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
            description: "ladies love me and dogs wanna be me",
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
        }
    ],
    filter: 0,
    rating: 0,
    state: 'welcome',
    // ratingSystem: {
    //     0: '../stars/zero-of-five.png',
    //     1: '../stars/one-of-five.png',
    //     2: '../stars/two-of-five.png',
    //     3: '../stars/three-of-five.png',
    //     4: '../stars/four-of-five.png',
    //     5: '../stars/five-of-five.png'
    // }
};

const ratingSystem = {
    0: '../stars/zero-of-five.png',
    1: '../stars/one-of-five.png',
    2: '../stars/two-of-five.png',
    3: '../stars/three-of-five.png',
    4: '../stars/four-of-five.png',
    5: '../stars/five-of-five.png'
};

function addLibraryItem() {
    let newBookmark = {
        id: `${(store.libraryItems.length) + 1}`,
        title: $('#title').val(),
        description: $('#description').val(),
        url: $('#url').val(),
        rating: store.rating,
        expanded: false,
    }
    console.log(newBookmark);
    store.libraryItems.push(newBookmark);
    renders.renderLibrary();
};

    export default {
        store,
        ratingSystem,
        addLibraryItem,
    };