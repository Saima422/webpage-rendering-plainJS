import { NavLogo } from "./logo.js";
import { HamBurger} from "./hamburger.js";
import { NavLinks } from "./navlinks.js";

export const Navigation = () => {
    const markup = document.createElement('div');
    markup.classList.add('navigation');

    markup.appendChild(NavLogo());
    markup.appendChild(HamBurger());
    markup.appendChild(NavLinks());

    return markup;
};