import renders from "./renders";

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/steve-henderson/bookmarks';

const getItems = function () {
  return fetch(`${BASE_URL}`)
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
    if (res.ok) {
      return res.json();
    } else {
      Promise.reject('Not Good');
    };
  });
};

const deleteItem = function (id) {
  return fetch(`${BASE_URL}/` + id , {
    method: 'delete'
  })
    .then(response => response.json()
    .then(json => {
      return json;
    })
  );
};

export default {
  BASE_URL,
  getItems,
  createItem,
  deleteItem
};