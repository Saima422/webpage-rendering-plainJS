import { bannerData } from "../data/data.js";

export const Banner = () => {
    const markup = document.createElement('div');
    markup.classList.add('banner');
    markup.style.backgroundImage = bannerData.bannerImage;

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

// export {banner};