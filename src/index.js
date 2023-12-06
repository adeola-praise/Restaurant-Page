import headerNav from "./headerNav.js";
import { tabs } from "./headerNav.js";

import homePage from "./homePage.js";
import menuPage from "./menu.js";
import aboutPage from "./about.js";

import "./styles/styles.css";

let menuContent = menuPage();
let homePageContent = homePage();
let aboutPageContent = aboutPage();

let previousPage;

headerNav();

/// TAB SWITCHING LOGIC ///
function displayPage(page) {
  let content = document.querySelector("#content");
  if (previousPage != null) {
    content.removeChild(previousPage);
  }

  content.appendChild(page);
  document.body.appendChild(content);

  previousPage = page;
}

displayPage(homePageContent);

console.log(tabs);

tabs.forEach((element) => {
  element.addEventListener("click", function () {
    switch (element.innerHTML) {
      case "HOME":
        displayPage(homePageContent);
        break;
      case "MENU":
        displayPage(menuContent);
        break;
      case "ABOUT":
        displayPage(aboutPageContent);
        break;
      default:
        break;
    }
  });
});
