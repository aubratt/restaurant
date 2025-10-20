import "./styles.css";
import { homepage, showHomepage } from "./homepage.js";
import { menu, showMenu } from "./menu.js";
import { about, showAbout } from "./about.js";

showHomepage();

const flos = document.getElementById("flos");
const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");

flos.addEventListener("click", showHomepage);
homeBtn.addEventListener("click", showHomepage);
menuBtn.addEventListener("click", showMenu);
aboutBtn.addEventListener("click", showAbout);
