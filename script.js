console.log("hello");
console.log("yeah hey what the frick")
//make a fetch request ¯\_(ツ)_/¯

// window.fetch(urlStringGoesHere, headersAndMethodGoHere);
// window.fetch("https://api.chucknorris.io/jokes/random")
// const options = {
//     headers: {
//         "Accept": "application/json"
//     }
// }

// option one
// window.fetch("https://api.chucknorris.io/jokes/categories")
//   .then((response) => {
//     response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

//option two
var ravelryBaseUrl = 'https://api.ravelry.com'
var endpoint = '/patterns/search.json?query=cloak';
// username here
// password here

const headers = new Headers();
headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));

async function exampleFunction () {
    var response = await window.fetch(ravelryBaseUrl + endpoint, { method: 'GET', headers: headers });
    var readableData = await response.json();
    console.log(readableData);
}

exampleFunction()

// function fetchRequest () {
//   const url = "https://api.chucknorris.io/jokes/categories"
//   const options = {
//     headers: {
//         "Accept": "application/json"
//     }
// }
// fetch(url, options)
//   .then((response) => {
//     response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
// }

// fetchRequest();

