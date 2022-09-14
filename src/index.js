import header_div from "./components/header";
import main_div from "./components/page";
import home_div from "./pages/home/home";

const content = document.getElementById("content");
const header = header_div();
const main = main_div();
const home = home_div();

content.appendChild(header);
content.appendChild(main);

const set_tab = (tab_selector) => {
  let child = main.firstChild.lastChild;
  while (child) {
    main.firstChild.removeChild(child);
    child = main.firstChild.lastChild;
  }

  switch (tab_selector) {
    case "Home":
      main.firstChild.appendChild(home.title);
      main.firstChild.appendChild(home.blurb);
      main.firstChild.appendChild(home.pic);
      break;
  }
};

const links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    console.log(link.getAttribute("id"));
    set_tab(link.getAttribute("id"));
  });
});
