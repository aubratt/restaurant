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

    const aboutContent = document.createElement("div");
    aboutContent.id = "about-content";

    const aboutTitle = document.createElement("div");
    aboutTitle.id = "about-title";
    aboutTitle.textContent = "FLO'S V8 CAFE";

    const aboutDesc = document.createElement("p");
    aboutDesc.id = "about-desc";
    aboutDesc.textContent = "Celebrate the pioneering spirit of the open road at Flo's V8 Cafe in Radiator Springs. Conveniently located on Route 66, Flo's has everything you need to refuel for your journey.";

    aboutContent.appendChild(aboutTitle);
    aboutContent.appendChild(aboutDesc);

    about.appendChild(aboutContent);

    content.appendChild(about);
}
