import { OurWork } from "./our-work.js";

export const workContainer = (data) => {
    const markup = document.createElement('div');
    markup.classList.add('ourWork-container');

    const h4 = document.createElement('h4');
    h4.classList.add('work-heading');
    h4.innerText = "Our Work";
    
    const work = OurWork(data);

    markup.appendChild(h4);
    markup.appendChild(work);

    return markup;
};
