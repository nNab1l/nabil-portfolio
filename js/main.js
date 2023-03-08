const handleOnMouseMove = e => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
        y = e.clientX - rect.left,
        x = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
}

for(const card of document.querySelectorAll(".skills__listitem")){
    card.onmousemove = e => handleOnMouseMove(e);
}





let darkMode = localStorage.getItem("darkMode");

if (darkMode == "true") {
  addDarkMode();
}
document.querySelector(".nav__moon").addEventListener("click", function () {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode == "true") {
    removeDarkMode();
  } else {
    addDarkMode();
  }
});

function addDarkMode() {
  darkMode = localStorage.setItem("darkMode", "true");
  document.getElementsByTagName("body")[0].classList.add("darkMode");
  document.getElementsByTagName("li")[0].classList.add("darkModeText");
  document.getElementsByTagName("li")[1].classList.add("darkModeText");
  document.getElementsByTagName("li")[2].classList.add("darkModeText");
  document.getElementsByTagName("li")[3].classList.add("darkModeText");
  document.getElementsByTagName("li")[4].classList.add("darkModeText");
  document.getElementsByTagName("h1")[0].classList.add("darkModeText");
  document.getElementsByTagName("figure")[0].classList.add("darkModeCircle");
}

function removeDarkMode() {
  darkMode = localStorage.setItem("darkMode", "false");
  document.getElementsByTagName("body")[0].classList.remove("darkMode");
  document.getElementsByTagName("li")[0].classList.remove("darkModeText");
  document.getElementsByTagName("li")[1].classList.remove("darkModeText");
  document.getElementsByTagName("li")[1].classList.remove("darkModeText");
  document.getElementsByTagName("li")[2].classList.remove("darkModeText");
  document.getElementsByTagName("li")[3].classList.remove("darkModeText");
  document.getElementsByTagName("li")[4].classList.remove("darkModeText");
  document.getElementsByTagName("figure")[0].classList.remove("darkModeCircle");
}


