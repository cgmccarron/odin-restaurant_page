const header_div = () => {
  const header = document.createElement("div");
  header.id = "header";

  header.style.height = "20vh";
  header.style.width = "100%";
  header.style.backgroundColor = "black";
  header.style.color = "white";

  header.textContent = "This is the header";

  return header;
};

export default header_div;
