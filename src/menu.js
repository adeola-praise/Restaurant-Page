import "./styles/menu.css";

import barbequeChickenImg from "./assets/images/burgers/burger3.png";
import cheeseburgerImg from "./assets/images/burgers/burger1.png";
import veggieburgerImg from "./assets/images/burgers/burger4.png";
import steakhouseImg from "./assets/images/burgers/burger2.png";
import hamburgerImg from "./assets/images/burgers/burger5.png";
import bigkingImg from "./assets/images/burgers/Burger-Sandwich.png";

export default function createMenuPage() {
  let menuContainer = document.createElement("div");
  menuContainer.className = "menu-container";

  let menuContent = document.createElement("div");
  menuContent.className = "menu-content";
  menuContainer.appendChild(menuContent);

  let burgerImages = [
    barbequeChickenImg,
    hamburgerImg,
    veggieburgerImg,
    steakhouseImg,
    cheeseburgerImg,
    bigkingImg,
  ];
  let burgerNames = [
    "Barbeque Chicken",
    "Hamburger",
    "Veggie Burger",
    "Steakhouse",
    "Cheeseburger",
    "Big King",
  ];
  let burgers = [];

  for (let i = 0; i < burgerNames.length; i++) {
    let burgerDiv = document.createElement("div");
    burgerDiv.className = "burger-div";
    burgers.push(burgerDiv);

    let burgerImgDiv = document.createElement("div");
    burgerImgDiv.className = "burger-img";
    burgerDiv.appendChild(burgerImgDiv);

    let burgerImg = document.createElement("img");
    burgerImg.src = burgerImages[i];
    burgerImgDiv.appendChild(burgerImg);

    let burgerName = document.createElement("p");
    burgerName.className = "burger-name";
    burgerName.innerHTML = burgerNames[i];
    burgerDiv.appendChild(burgerName);
    menuContent.appendChild(burgerDiv);
  }

  return menuContainer;
}
