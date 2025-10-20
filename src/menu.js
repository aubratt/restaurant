import c from "./c.jpg";
import g from "./g.jpg";
import gr from "./gr.jpg";
import ln from "./ln.jpg";
import o from "./o.jpg";

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");
const content = document.getElementById("content");

export function showMenu() {
    if (document.getElementById("menu")) {
        return;
    }

    if (document.getElementById("homepage")) {
        content.removeChild(document.getElementById("homepage"));
    }

    if (document.getElementById("about")) {
        content.removeChild(document.getElementById("about"));
    }

    homeBtn.classList.remove("active");
    menuBtn.classList.add("active");
    aboutBtn.classList.remove("active");

    const menu = document.createElement("div");
    menu.id = "menu";

    const lugnuts = document.createElement("div");
    const lugnutsImg = document.createElement("img");
    const lugnutsDesc = document.createElement("div");

    lugnuts.classList.add("menu-card");
    lugnutsImg.classList.add("menu-img");
    lugnutsImg.src = ln;
    lugnutsDesc.classList.add("menu-desc");
    lugnutsDesc.textContent = "LUGNUTS\n$2.50";

    lugnuts.appendChild(lugnutsImg);
    lugnuts.appendChild(lugnutsDesc);

    const gas = document.createElement("div");
    const gasImg = document.createElement("img");
    const gasDesc = document.createElement("div");

    gas.classList.add("menu-card");
    gasImg.classList.add("menu-img");
    gasImg.src = g;
    gasDesc.classList.add("menu-desc");
    gasDesc.textContent = "GAS\n$7.50";

    gas.appendChild(gasImg);
    gas.appendChild(gasDesc);

    const oil = document.createElement("div");
    const oilImg = document.createElement("img");
    const oilDesc = document.createElement("div");

    oil.classList.add("menu-card");
    oilImg.classList.add("menu-img");
    oilImg.src = o;
    oilDesc.classList.add("menu-desc");
    oilDesc.textContent = "OIL\n$5.00";

    oil.appendChild(oilImg);
    oil.appendChild(oilDesc);

    const coolant = document.createElement("div");
    const coolantImg = document.createElement("img");
    const coolantDesc = document.createElement("div");

    coolant.classList.add("menu-card");
    coolantImg.classList.add("menu-img");
    coolantImg.src = c;
    coolantDesc.classList.add("menu-desc");
    coolantDesc.textContent = "COOLANT\n$4.00";

    coolant.appendChild(coolantImg);
    coolant.appendChild(coolantDesc);

    const grease = document.createElement("div");
    const greaseImg = document.createElement("img");
    const greaseDesc = document.createElement("div");

    grease.classList.add("menu-card");
    greaseImg.classList.add("menu-img");
    greaseImg.src = gr;
    greaseDesc.classList.add("menu-desc");
    greaseDesc.textContent = "GREASE\n$4.00";

    grease.appendChild(greaseImg);
    grease.appendChild(greaseDesc);

    menu.appendChild(lugnuts);
    menu.appendChild(gas);
    menu.appendChild(oil);
    menu.appendChild(coolant);
    menu.appendChild(grease);

    content.appendChild(menu);
}
