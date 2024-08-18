/*
fetch() is a function used for making HTTP requests to fetch resources (JSON style data, images, files)
used with (JSON style data, images, and files)
Simplifies asynchronous data fetching in JavaScript and used for interacting with APIs to retrieve and send
data asychronously over the web.
fetch(url, {options})
*/

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
