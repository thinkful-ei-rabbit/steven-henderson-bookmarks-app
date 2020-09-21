import renders from "./renders";

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/steve-henderson/bookmarks';

const getItems = function () {
  return fetch(`${BASE_URL}`)
};

const createItem = function (title, description, url, rating) {
  return fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      'Access-Control-Allow-Headers': "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
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