import React from "react";
import tesla from "../assets/tesla.png";
import foodwebsite from "../assets/foodwebsite.png";
import imagify from "../assets/Imagify-home.png";
import twitter from "../assets/twitter.png";
import tenzies from "../assets/tenzies.png";


const Portfolio = () => {
  const links = [
    {
      id: 1,
      img: tesla,
      href: "https://teslaevp.netlify.app/",
      code: "https://github.com/Eljude03/tesla",
    },
    {
      id: 2,
      img: foodwebsite,
      href: "https://evpfoodwebsite.netlify.app/",
      code: "https://github.com/Eljude03/foodWebsite",
    },
    {
      id: 3,
      img: tenzies,
      href: "https://tenzieseljude.netlify.app/",
      code: "https://github.com/Eljude03/Project-1",
    },
    {
      id: 4,
      img: imagify,
      href: 'https://imagifyai-six.vercel.app',
      code: 'https://github.com/Eljude03/imagifyai'
    },
    {
      id: 5,
      img: twitter,
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full pt-20 bg-slate-50 dark:bg-gradient-to-b dark:from-black dark:to-gray-800
     dark:text-white md:h-screen"
    >
      <div className="p-4 mx-auto max-w-screen-lg flex flex-col justify-center w-full h-full">
        
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 ">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {links.map(({id, img, href, code}) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img src={img} alt="" className="rounded-md duration-200 hover:scale-105 "/>

            <div className="flex items-center justify-center ml-4">
              <a href={href} target="_blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" >Demo</a>
              <a href={code} target="_blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</a>
            </div>

          </div>
        ))}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
