const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");
const content = document.getElementById("content");

export function showAbout() {
    if (document.getElementById("about")) {
        return;
    }

    if (document.getElementById("homepage")) {
        content.removeChild(document.getElementById("homepage"));
    }

    if (document.getElementById("menu")) {
        content.removeChild(document.getElementById("menu"));
    }

    homeBtn.classList.remove("active");
    menuBtn.classList.remove("active");
    aboutBtn.classList.add("active");

    const about = document.createElement("div");
    about.id = "about";
    about.textContent = "ABOUT";

    content.appendChild(about);
}
