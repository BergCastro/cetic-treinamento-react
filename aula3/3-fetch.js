const fetch = require("node-fetch");

//https://jsonplaceholder.typicode.com/

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => console.log(json));
