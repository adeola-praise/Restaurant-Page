import "./styles.css";
import headlineBurger from "./assets/images/burger.png";
import logo from "./assets/images/logo.png";

export default function createHomePage() {
  let content = document.getElementById("content");

  /// HEADER SECTION OF HOMEPAGE ///
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
    anchor.href = "http://"; // Set your URL here

    let textNode = document.createTextNode(links[i]);
    anchor.appendChild(textNode);

    navItem.appendChild(anchor);
    navLinks.appendChild(navItem);
  }

  // let orderBtnNav = document.createElement("button");
  // orderBtnNav.className = "order-btn";
  // orderBtnNav.innerHTML = "ORDER NOW";
  // navLinks.appendChild(orderBtnNav);

  /// HEADLINE SECTION OF THE WEBSITE ///
  let headlineSection = document.createElement("section");
  headlineSection.className = "headline";
  content.appendChild(headlineSection);

  let headlineContent = document.createElement("div");
  headlineContent.className = "headline-content";
  headlineSection.appendChild(headlineContent);

  let headlineMainMsg = document.createElement("h2");
  headlineContent.appendChild(headlineMainMsg);
  headlineMainMsg.innerHTML = "Feast on Flavor. Order Now, Savor Later!";

  let headlineMsg = document.createElement("p");
  headlineContent.appendChild(headlineMsg);
  headlineMsg.innerHTML =
    "Welcome to Burgaña, where every bite tells a story. Savor handcrafted burgers bursting with culinary creativity, using only the freshest ingredients.";

  let headlineBtn = document.createElement("button");
  headlineBtn.className = "order-btn";
  headlineBtn.innerHTML = "ORDER NOW";
  headlineContent.appendChild(headlineBtn);

  let headlineImgDiv = document.createElement("div");
  headlineImgDiv.className = "headline-img";
  headlineSection.appendChild(headlineImgDiv);

  let headlineImg = document.createElement("img");
  headlineImg.src = headlineBurger;
  headlineImgDiv.appendChild(headlineImg);
}
