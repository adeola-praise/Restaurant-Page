import "./styles/headerNav-styles.css";
import logo from "./assets/images/logo.png";

let tabs = [];

export default function () {
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

  for (let i = 0; i < links.length; i++) {
    let navItem = document.createElement("li");
    navItem.className = "nav-link";

    let anchor = document.createElement("a");

    anchor.href = "#"; // Set your URL here
    anchor.innerHTML = links[i];
    tabs.push(anchor);

    navItem.appendChild(anchor);
    navLinks.appendChild(navItem);
  }
}

export { tabs };
