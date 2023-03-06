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



const darkmode = document.getElementById("js--darkMode");