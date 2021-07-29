
export const OurWork = (data) => {
    const markup = document.createElement('div');
    markup.classList.add('project-section');
    
    data.forEach((item) => {
        let heading = document.createElement('h3');
        heading.classList.add('project-heading');
        heading.innerText = item.name;

        let para = document.createElement('p');
        para.classList.add('project-desc');
        para.innerText = item.desc;

        let image = document.createElement('img');
        image.classList.add('project-image');
        image.src = item.progImg;

        markup.appendChild(image);
        markup.appendChild(heading);
        markup.appendChild(para);
    })

    return markup;
};