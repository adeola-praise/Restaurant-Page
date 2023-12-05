import "./styles/menu.css";

import barbequeChickenImg from "./assets/images/burgers/Barbeque-Chicken-Sandwich.png";
import cheeseburgerImg from "./assets/images/burgers/png_burger_sandwich_10806.png";
import veggieburgerImg from "./assets/images/burgers/png_burger_sandwich_10810.png";
import steakhouseImg from "./assets/images/burgers/png_burger_sandwich_10807.png";
import hamburgerImg from "./assets/images/burgers/Veggie-Burger-Tomato.png";
import bigkingImg from "./assets/images/burgers/Burger-Sandwich.png";

export default function createMenuPage() {
  let menuContainer = document.createElement("div");
  menuContainer.className = "menu-container";

  let menuContent = document.createElement("div");
  menuContent.className = "menu-content";
  menuContainer.appendChild(menuContent);

  let burgerImages = [
    barbequeChickenImg,
    cheeseburgerImg,
    veggieburgerImg,
    steakhouseImg,
    hamburgerImg,
    bigkingImg,
  ];
  let burgerNames = [
    "Barbeque Chicken",
    "Cheeseburger",
    "Veggie Burger",
    "Steakhouse",
    "Hamburger",
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
