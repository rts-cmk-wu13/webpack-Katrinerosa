import _ from "lodash";
import "./style.css";
import Icon from "./icon.png";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

 
 /* const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon); */

  return element; 
}

document.body.innerHTML += '<h1>Demo-webpack</h1>'
document.body.innerHTML += '<nav></nav>'
document.body.appendChild(component());
