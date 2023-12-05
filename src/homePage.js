import "./styles/homepage-styles.css";
import headlineBurger from "./assets/images/burger.png";

export default function createHomePage() {
  /// HEADLINE SECTION OF THE WEBSITE ///
  let headlineSection = document.createElement("section");
  headlineSection.className = "headline";

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

  return headlineSection;
}
