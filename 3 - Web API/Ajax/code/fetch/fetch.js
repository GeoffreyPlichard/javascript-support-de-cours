
let url = 'https://jsonplaceholder.typicode.com/todos';

fetch(url)
  .then(data => {
    return data.json();
  })
  .then(newData => newData);