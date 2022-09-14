const hotdog_div = () => {
  const hotdog = document.createElement("div");
  hotdog.classList.add("menu-iten");

  const pic = document.createElement("img");
  pic.src = "../src/assets/images/hotdog.jpg";
  pic.classList.add("pic");

  const blurb = document.createElement("span");
  blurb.textContent = "Hot dog";

  hotdog.appendChild(pic);
  hotdog.appendChild(blurb);

  return hotdog;
};

export default hotdog_div;
