const home_div = () => {
  const title = document.createElement("h1");
  title.classList.add("diner-sign");
  title.innerText = "Diner on 6th";

  const blurb = document.createElement("div");
  blurb.classList.add("blurb");
  blurb.innerText =
    "Classic and delicous steak burgers, hot fries, and creamy milkshakes! Since the 1950s we have been delivery great food and great serivce to our community";

  const pic = document.createElement("div");
  pic.classList.add("pic");
  const image = document.createElement("img");
  image.src = "/src/assets/images/platter.jpg";

  pic.appendChild(image);

  return { title, blurb, pic };
};

export default home_div;
