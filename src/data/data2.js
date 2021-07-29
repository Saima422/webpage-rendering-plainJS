import { Banner } from "../components/banner.js";
import { Navigation } from "../components/navigation.js";
import { footer } from "../components/footer.js";
import { workContainer } from "../components/work-container.js";

let root = document.getElementById('root');

const dataEndPoint = "https://saima422.github.io/Image-JSON-Data-Repo/json-data/json-data.json";

fetch(dataEndPoint)
    .then((response)=> {
        return response.json();
    })
    .then((data)=>{
        root.appendChild(Navigation(data.NavData));
        root.appendChild(Banner(data.BannerData));
        root.appendChild(workContainer(data.ProjectData));
        root.appendChild(footer(data.FooterData));  
    })
    .catch((err)=> console.log("Error"));

