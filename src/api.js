const BASE_URL = 'https://thinkful-list-api.herokuapp.com/steve-henderson/bookmarks';

const getItems = function () {
  return fetch(`${BASE_URL}`)
    .then(res => res.json())
    .then(res => console.log(res))
};

const createItem = function (name) {
  const newItem = JSON.stringify({ name });
  console.log(newItem);
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newItem
    }
  console.log(options)
  return fetch(`${BASE_URL}`, options)
    .then(res => res.json())
    .then((newItem) => {
        console.log(newItem)
        return api.getItems();
    })
    .then(res => res.json())
    .then((items) => {
      console.log(items);
    })
};

function handleSubmit() {
  //event.preventDefault();
  //const name = this.nameInput.current.value;
  //const id = this.state.folderInput;
  //const content = this.contentInput.current.value;
  fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      title: 'woah',
      url: 'http://yahoo.com'
    })
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        Promise.reject('Not Good');
      }
    })
}


export default {
  BASE_URL,
  getItems,
  createItem,
  handleSubmit
};