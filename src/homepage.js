import f from "./f.jpg";

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");
const content = document.getElementById("content");

export function showHomepage() {
    if (document.getElementById("homepage")) {
        return;
    }

    if (document.getElementById("menu")) {
        content.removeChild(document.getElementById("menu"));
    }

    if (document.getElementById("about")) {
        content.removeChild(document.getElementById("about"));
    }

    homeBtn.classList.add("active");
    menuBtn.classList.remove("active");
    aboutBtn.classList.remove("active");

    const homepage = document.createElement("div");
    homepage.id = "homepage";

    const slogan = document.createElement("p");
    slogan.classList.add("slogan");
    slogan.textContent = "Go with the Flo - On the Mother Road";

    const img = document.createElement("img");
    img.src = f;
    img.alt = "Flo's V8 Cafe at night";

    homepage.appendChild(slogan);
    homepage.appendChild(img);

    content.appendChild(homepage);
}
