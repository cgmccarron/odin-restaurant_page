import hotdog_div from "./hotdog";

const hotdog = hotdog_div();
const menu_div = () => {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(hotdog);

  return menu;
};

export default menu_div;
