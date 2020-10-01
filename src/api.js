const BASE_URL = 'http://thinkful-list-api.herokuapp.com/steve-henderson/bookmarks';

/* API FUNCTIONS */
/* 5 Functions
    listApiFetch();
    getItems();
    createItem();
    updateItem();
    deleteItem();
*/

const listApiFetch = function (...args) {
  let error;
  return fetch(...args)
    .then(res => {
      if (!res.ok) {
        error = { code: res.status};
        if (!res.headers.get('content-type').includes('json')) {
          error.message = res.statusText;
          return Promise.reject(error);
        }
      }
      return res.json();
    })
    .then(data => {
      if (error) {
        error.message = data.message;
        return Promise.reject(error);
      }
      return data;
    });
};

const getItems = function () {
  return listApiFetch(`${BASE_URL}`);
};

const createItem = function (title, description = " ", url, rating) {
  return listApiFetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: title,
      desc: description,
      url: url,
      rating: Number(rating),
    })
  });
};

const updateItem = function (id, updateData) {
  const newData = JSON.stringify(updateData);
  return listApiFetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: newData
  });
};

const deleteItem = function (id) {
    return listApiFetch(`${BASE_URL}/` + id , {
      method: 'delete'
    })
};

export default {
  BASE_URL,
  getItems,
  createItem,
  updateItem,
  deleteItem
};