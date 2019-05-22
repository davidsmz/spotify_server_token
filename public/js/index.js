const url = 'http://localhost:3000/api/token';

const token = fetch(url)
  .then(data => {
    // data = JSON.stringify(data);
    return data.json();
  })
  .catch(err => console.log(err));

token.then(data => console.log(data)).catch(err => console.log(err));
