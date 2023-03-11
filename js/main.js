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
  document.getElementsByTagName("h1")[0].classList.add("darkModeText");
  document.getElementsByTagName("h2")[0].classList.add("darkModeText");
  document.getElementsByTagName("h2")[1].classList.add("darkModeText");
  document.getElementsByTagName("h2")[2].classList.add("darkModeText");
  document.getElementsByTagName("h2")[3].classList.add("darkModeText");
  document.getElementsByTagName("p")[12].classList.add("darkModeText");
  document.getElementsByTagName("p")[13].classList.add("darkModeText");
  document.getElementsByTagName("figure")[0].classList.add("darkModeCircle");
  document.getElementsByTagName("figure")[1].classList.add("darkModeCircle");
  document.getElementsByTagName("figure")[5].classList.add("darkModeCircle");
  document.getElementsByTagName("ul")[0].classList.add("darkMode");

  const li_heading = document.querySelectorAll('.nav__link'); 
  const li_moon = document.querySelectorAll('.nav__listitem'); 
  const icons = document.querySelectorAll(".sidenav__icon");
  const li_skills = document.querySelectorAll('.skills__listitem'); 
  const p_skills = document.querySelectorAll('.skills__p'); 
  const icon_skills = document.querySelectorAll('.skills__icon'); 
  const contact__icons = document.querySelectorAll(".contact__icon");
  const contact_p = document.querySelectorAll(".contact__p");


  li_heading.forEach(nav => {
  nav.classList.add('darkModeText');
});

li_moon.forEach(moon => {
  moon.classList.add('darkModeText');
});

  icons.forEach(icon => {
  icon.classList.add('darkModeText');
});

li_skills.forEach(skills => {
  skills.classList.add('darkModeBox');
});

p_skills.forEach(skills_p => {
  skills_p.classList.add('darkMode');
});

icon_skills.forEach(skills_icon => {
  skills_icon.classList.add('darkMode');
});

contact__icons.forEach(contact => {
  contact.classList.add('darkModeText');
});

contact_p.forEach(contact__p => {
  contact__p.classList.add('darkModeText');
});

}

function removeDarkMode() {
  darkMode = localStorage.setItem("darkMode", "false");
  document.getElementsByTagName("body")[0].classList.remove("darkMode");
  document.getElementsByTagName("h1")[0].classList.remove("darkModeText");
  document.getElementsByTagName("h2")[0].classList.remove("darkModeText");
  document.getElementsByTagName("h2")[1].classList.remove("darkModeText");
  document.getElementsByTagName("h2")[2].classList.remove("darkModeText");
  document.getElementsByTagName("h2")[3].classList.remove("darkModeText");
  document.getElementsByTagName("figure")[5].classList.remove("darkModeCircle");
  document.getElementsByTagName("p")[12].classList.remove("darkModeText");

  const li_heading = document.querySelectorAll('.nav__link'); 
  const li_moon = document.querySelectorAll('.nav__listitem'); 

  const icons = document.querySelectorAll(".sidenav__icon");



  
  const li_skills = document.querySelectorAll('.skills__listitem'); 

  
  const p_skills = document.querySelectorAll('.skills__p'); 

  const icon_skills = document.querySelectorAll('.skills__icon'); 

  const contact__icons = document.querySelectorAll(".contact__icon");
  
  const contact_p = document.querySelectorAll(".contact__p");
  
  li_heading.forEach(nav => {
    nav.classList.remove('darkModeText');
  });

  li_moon.forEach(moon => {
    moon.classList.remove('darkModeText');
  });

  icons.forEach(icon => {
    icon.classList.remove('darkModeText');
  });

  li_skills.forEach(skills => {
    skills.classList.remove('darkModeBox');
  });
  
  p_skills.forEach(skills_p => {
    skills_p.classList.remove('darkMode');
  });
  
  icon_skills.forEach(skills_icon => {
    skills_icon.classList.remove('darkMode');
  });

  contact__icons.forEach(contact => {
    contact.classList.remove('darkModeText');
  });

  contact_p.forEach(contact__p => {
    contact__p.classList.remove('darkModeText');
  });

  
  document.getElementsByTagName("figure")[0].classList.remove("darkModeCircle");
  document.getElementsByTagName("figure")[1].classList.remove("darkModeCircle");
  document.getElementsByTagName("ul")[0].classList.remove("darkMode")
}


