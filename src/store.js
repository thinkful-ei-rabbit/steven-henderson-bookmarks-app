let library = {
  libraryItems: [
      {
          id: 'a',
          title: "Google",
          description: "The most well known Search Engine around",
          url: "https://google.com",
          rating: 3,
          expanded: false,
      },
      {
          id: 'b',
          title: "DuckDuckGo",
          description: "The best Search Engine around",
          url: "https://duckduckgo.com",
          rating: 5,
          expanded: false,
      },
      {
          id: "c",
          title: "Yahoo",
          description: "A Search Engine",
          url: "https://yahoo.com",
          rating: 2,
          expanded: false,
      },
      {
        id: "d",
        title: "IGN",
        description: "A video game news site",
        url: "https://ign.com",
        rating: 3,
        expanded: true,
      },
      {
        id: "e",
        title: "News",
        description: "A place to get the news",
        url: "https://ign.com",
        rating: 4,
        expanded: false,
      },
  ],
  filter: 0,
  rating: 0,
  state: 'library',
  ratingSystem: {
    null: '../stars/zero-of-five.png',
    0: '../stars/zero-of-five.png',
    1: '../stars/one-of-five.png',
    2: '../stars/two-of-five.png',
    3: '../stars/three-of-five.png',
    4: '../stars/four-of-five.png',
    5: '../stars/five-of-five.png'
  }
};

export default {
  library
};