import $ from 'jquery';
import store from './store';

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/steve-henderson/bookmarks';

const getItems = function () {
  return fetch(`${BASE_URL}`)
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.library.push(item));
    });
};

const createItem = function (title, description, url, rating) {
  return fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "title": title,
      "desc": description,
      "url": url,
      "rating": rating,
      "expanded": false
    })
  })
  .then(res => {
    console.log(res.json)
    if (res.ok) {
      return res.json();
    } else {
      Promise.reject('Not Good');
    };
  });
};

export default {
  BASE_URL,
  getItems,
  createItem,
};