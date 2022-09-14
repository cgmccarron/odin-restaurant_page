const links_div = (title) => {
  const links = document.createElement("a");
  links.classList.add("link");
  links.textContent = title;
  return links;
};

export default links_div;
