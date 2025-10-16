import "./styles.css";
import { greeting } from "./greeting.js";

console.log(greeting);

const hello = document.createElement("p");
hello.textContent = "hello";

document.body.appendChild(hello);
