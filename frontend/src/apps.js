const component = () => {
  const element = document.getElementById("app");
  element.innerHTML = "Hello webpack!!";
  return element;
};

document.body.appendChild(component());
