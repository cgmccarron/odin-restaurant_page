import links_div from "./links";

const navbar_div = () => {
  const navbar = document.createElement("div");
  navbar.classList.add("navbar");
  let home = links_div();
  let menu = links_div();
  let order = links_div();
  navbar.appendChild(home);
  navbar.appendChild(menu);
  navbar.appendChild(order);

  return navbar;
};

export default navbar_div;
