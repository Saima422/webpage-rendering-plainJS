import { Navigation } from "./components/navigation.js";
import { Banner } from "./components/banner.js";

let root = document.getElementById('root');
root.appendChild(Navigation());
root.appendChild(Banner());