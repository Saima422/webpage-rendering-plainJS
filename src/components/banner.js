// import { bannerData } from "../data/data.js";

export const Banner = (bannerData) => {
    const markup = document.createElement('div');
    markup.classList.add('banner');
    markup.style.backgroundImage = `linear-gradient(
        to right,
        rgba(255, 255, 255, 0.438),
        rgba(0, 0, 0, 0.753)
      ),url(${bannerData.bannerImage})`;

    let heading = document.createElement('h1');
    heading.classList.add('banner-heading');
    heading.textContent = bannerData.companyName;

    let para = document.createElement('p');
    para.classList.add('banner-tagline');
    para.textContent = bannerData.tagline;

    let anchor = document.createElement('a');
    anchor.classList.add('btn');
    anchor.textContent = bannerData.cta;
    anchor.href = bannerData.href;
    
    markup.appendChild(heading);
    markup.appendChild(para);
    markup.appendChild(anchor);

    return markup;
};

