import tab_div from "./tab";
const tab = tab_div();
const main_div = () => {
  const page = document.createElement("div");

  page.classList.add("main");
  page.appendChild(tab);

  return page;
};

export default main_div;
