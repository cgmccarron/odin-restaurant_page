import navbar_div from "./navbar";
const navbar = navbar_div();
const header_div = () => {
  const header = document.createElement("div");
  header.classList.add("header");
  header.appendChild(navbar);
  return header;
};

export default header_div;
