import _ from "lodash";
import style from "./index.css";
import "./clearButton";

import logo from './assets/webpack_logo.png';

import './assets/fonts/Redressed-Regular.ttf';

const logoEl = document.getElementById('logo');
const btn1 = document.getElementById("button1");

btn1.addEventListener("click", function () {
  const el = document.getElementById("header");
  el.innerHTML = "Hey i have updated the code !";
  el.classList.add([style.header]);

  const listItems = ["Apple", "orange", "Banana"];
  const ul = document.getElementById("shoppingList");
  _.forEach(listItems, function (item) {
    const tempEl = document.createElement("li");
    tempEl.innerHTML = item;
    ul.appendChild(tempEl);
  });
});

btn1.classList.add([style.button]);

logoEl.src = logo;
