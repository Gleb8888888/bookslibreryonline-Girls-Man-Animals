//import React from "react";
import "./App.css";

const requestUrl = "http://api.tvmaze.com/search/shows?q=books";
const dataWrapper = document.getElementById('App');


const App = data => {
  let genres = [];

  if(data.show.genres.length){
    genres = data.show.genres.reduce((acc,item)=> {
      return acc + ", " + item;
    })
  } else {
    genres = 'unknown'
  }

  return `
  <div id="data-wrapper"></div>
  <div class="data-item">
    <div class="image">
      <img src="${data.show.image ? data.show.image.medium : '' }" alt="">
    </div>
    <div><span>Name:</span>${data.show.name}</div>
    <div><span>Score:</span>${data.score}</div>
    <div><span>Genres:</span>${genres}</div>
    <div><span>Language:</span>${data.show.language}</div>
    <div><span>Description:</span>${data.show.summary}</div>
  </div>
  `;

};

fetch (requestUrl)
  .then(Response => Response.json())
  .then(data =>{
    if(data) {
      data.forEach(item => {
        dataWrapper.innerHTML += App(item)
        
      })
    }
  })


  export default App;
