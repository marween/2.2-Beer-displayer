
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

import axios from 'axios';

var url = "https://api.punkapi.com/v2/beers";

const getBeer = async () =>{

	let response = await axios.get(url);
   console.log(response.data);


   for(let i=0; i<25 ;i++){

      let div = document.createElement("article");

      let beerName = document.createElement("p");
      beerName.textContent = response.data[i].name;


      let beerTagline = document.createElement("p");
      beerTagline.textContent = response.data[i].tagline;

      let beerYear = document.createElement("p");
      beerYear.textContent = response.data[i].first_brewed;

      let img = document.createElement("img");
      img.setAttribute("src",response.data[i].image_url);

      div.appendChild(beerName);
      div.appendChild(beerTagline);
      div.appendChild(beerYear);
      div.appendChild(img);


      document.querySelector(".beer").appendChild(div);
  };
};

window.onload = function (){getBeer()};

console.log("Hey look in your browser console. It works!");