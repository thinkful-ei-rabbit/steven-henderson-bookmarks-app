import $ from 'jquery';

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
    filter: null
};

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
        id: `${(libraryItems.length) + 1}`,
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

    export default {
        store,
        ratingSystem,
        addLibraryItem,
    };