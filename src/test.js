import "./styles.css";
import logo from "./assets/images/logo.png";

let headerSection = document.createElement("header");
headerSection.className = "header-section";
content.appendChild(headerSection);

let logoDiv = document.createElement("div");
logoDiv.className = "logo";
headerSection.appendChild(logoDiv);

let logoImg = document.createElement("img");
logoImg.src = logo;
logoDiv.appendChild(logoImg);
let logoText = document.createElement("h1");
logoDiv.appendChild(logoText);
logoText.innerHTML = "Burgaña";

let headerNav = document.createElement("nav");
headerNav.className = "header-nav";
headerSection.appendChild(headerNav);

let navLinks = document.createElement("ul");
navLinks.className = "nav-links";
headerNav.appendChild(navLinks);

let links = ["HOME", "MENU", "CONTACT", "SUPPORT"];
let tabs = [];

for (let i = 0; i < links.length; i++) {
  let navItem = document.createElement("li");
  navItem.className = "nav-link";
  tabs.push(navItem);

  let anchor = document.createElement("a");
  anchor.href = "http://"; // Set your URL here

  let textNode = document.createTextNode(links[i]);
  anchor.appendChild(textNode);

  navItem.appendChild(anchor);
  navLinks.appendChild(navItem);
}

export default function () {}
