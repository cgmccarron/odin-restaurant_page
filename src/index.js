import header_div from "./components/header";
import main_div from "./components/page";
import home_div from "./pages/home/home";

const content = document.getElementById("content");
const header = header_div();
const main = main_div();
const home = home_div();
main.firstChild.appendChild(home.title);
main.firstChild.appendChild(home.blurb);
main.firstChild.appendChild(home.pic);
content.appendChild(header);
content.appendChild(main);
