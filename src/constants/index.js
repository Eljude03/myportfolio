//Projects Images
import tesla from "../assets/tesla.png";
import foodwebsite from "../assets/foodwebsite.png";
import imagify from "../assets/Imagify-home.png";
import tenzies from "../assets/tenzies.png";
import qrGenerator from "../assets/qr-generator.png";
import text2speech from "../assets/text2speech.png";
//Tech Icons
import gitIcon from '../assets/Git-Icon.svg'
import nodeJs from '../assets/Node.js.svg'
import MongoDB from '../assets/MongoDB.svg'
import react from "../assets/react.png";
import js from "../assets/js.png";
import html from "../assets/html.png";
import css from "../assets/css-3.png";
import tailwindcss from "../assets/tailwind.svg";

  export const projects = [
    {
      name: "Tesla Landing Page",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "blue-text-gradient",
        }
      ],
      image: tesla,
      source_code_link: "https://github.com/Eljude03/tesla",
      demo_link: "https://github.com/Eljude03/tesla"
    },
    {
      name: "EVP Resto",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: foodwebsite,
      source_code_link: "https://github.com/Eljude03/foodWebsite",
      demo_link: "https://evpfoodwebsite.netlify.app/",
    },
    {
      name: "Tenzies Game",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tenzies,
      source_code_link: "https://github.com/Eljude03/Project-1",
      demo_link: "https://tenzieseljude.netlify.app/",
    },
    {
      name: "ImagifyAI",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: imagify,
      source_code_link: "https://github.com/Eljude03/imagifyai",
      demo_link: "https://imagifyai-six.vercel.app",
    },
    {
      name: "Text2Speech",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: text2speech,
      source_code_link: "https://github.com/Eljude03/text2speech",
      demo_link: "https://qr-generator-evp-0215-edh7h4geebb0h2fn.eastasia-01.azurewebsites.net/",
    },
    {
      name: "QR Generator",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: qrGenerator,
      source_code_link: "https://github.com/Eljude03/qr-code-generator-frontend",
      demo_link: "https://qr-generator-evp-0215-edh7h4geebb0h2fn.eastasia-01.azurewebsites.net/",
    },
  ];

  export const tech = [
    {
      id: 1,
      img: react,
      techName: "React",
      style: 'shadow-blue-600',
    },
    {
      id: 2,
      techName: "Next.js",
      style: 'shadow-gray-400',
    },
    {
      id: 3,
      img: js,
      techName: "JavaScript",
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      img: html,
      techName: "HTML",
      style: 'shadow-orange-500',
    },
    {
      id: 5,
      img: css,
      techName: "CSS",
      style: 'shadow-blue-500',
    },
    {
      id: 6,
      techName: "GitHub",
      style: 'shadow-gray-400',
    },
    {
      id: 7,
      img: tailwindcss,
      techName: "Tailwind",
      style: 'shadow-sky-400',
    },
    {
      id: 8,
      img: gitIcon,
      techName: "Git",
      style: 'shadow-red-400',
    },
    {
      id: 9,
      img: nodeJs,
      techName: "Node.js",
      style: 'shadow-green-400',
    },
    {
      id: 10,
      techName: "Express.js",
      style: 'shadow-gray-400',
    },
    {
      id: 11,
      img: MongoDB,
      techName: "MongoDB",
      style: 'shadow-green-400',
    },
  ];

