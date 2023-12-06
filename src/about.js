import "./styles/about-styles.css";
import restaurant_image from "./assets/images/restaurant.jpg";
import location_icon from "./assets/icons/location.png";
import reserve_icon from "./assets/icons/reserve.png";
import timer_icon from "./assets/icons/timer.png";

export default function () {
  let aboutContent = document.createElement("div");
  aboutContent.className = "about-content";

  let storyDiv = document.createElement("div");
  storyDiv.className = "story";
  aboutContent.appendChild(storyDiv);

  let storyHeader = document.createElement("h2");
  storyHeader.innerHTML = "About Us";
  storyDiv.appendChild(storyHeader);

  let storyContent = document.createElement("div");
  storyContent.className = "story-content";
  storyDiv.appendChild(storyContent);

  let storyContentImg = document.createElement("img");
  storyContentImg.src = restaurant_image;
  storyContent.appendChild(storyContentImg);

  let storyContentPara = document.createElement("p");
  storyContentPara.innerHTML =
    "At Burgaña, our journey began with a passion for crafting exceptional culinary experiences. Founded in the heart of Lagos, our restaurant was born from a shared love for delicious, handcrafted burgers that tell a story with every bite. Our commitment to quality, creativity, and using only the freshest ingredients has earned us a cherished place in the hearts of our patrons. We take pride in serving up a delectable menu that's a testament to our dedication, consistently delighting our customers with flavors that ignite the senses. At Burgaña, we continue to uphold our legacy of excellence, offering not just meals but moments of culinary joy that keep our guests returning time and again.";

  storyContent.appendChild(storyContentPara);

  let restaurantInfo = document.createElement("div");
  restaurantInfo.className = "restaurant-info";
  aboutContent.appendChild(restaurantInfo);

  let aboutInfo = [
    {
      icon: location_icon,
      header: "Location",
      content: "123, Victoria Island, Lagos, Nigeria",
    },

    {
      icon: timer_icon,
      header: "Working Hours",
      content: "Mon To Fri 9:00 AM - 9:00PM",
    },

    {
      icon: reserve_icon,
      header: "Reservation",
      content: "Hello@burgana.com",
    },
  ];

  for (let i = 0; i < aboutInfo.length; i++) {
    let contact = document.createElement("div");
    contact.className = "about-info";

    let iconDiv = document.createElement("div");
    iconDiv.className = "icon";
    contact.appendChild(iconDiv);

    let iconImg = document.createElement("img");
    iconImg.src = aboutInfo[i].icon;
    iconDiv.appendChild(iconImg);

    let infoDiv = document.createElement("div");
    infoDiv.className = "info";
    contact.appendChild(infoDiv);

    let infoHeader = document.createElement("h4");
    infoHeader.innerHTML = aboutInfo[i].header;
    infoDiv.appendChild(infoHeader);

    let infoContent = document.createElement("p");
    infoContent.innerHTML = aboutInfo[i].content;
    infoDiv.appendChild(infoContent);

    restaurantInfo.appendChild(contact);
  }

  return aboutContent;
}
