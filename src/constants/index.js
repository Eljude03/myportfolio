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
        "This is a simple Tesla landing page built using ReactJS and styled with TailwindCSS. It features a clean and modern design. The site is fully responsive, offering a seamless user experience across devices.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        }
      ],
      image: tesla,
      source_code_link: "https://github.com/Eljude03/tesla",
      demo_link: "https://teslaevp.netlify.app/",
    },
    {
      name: "EVP Resto",
      description:
        "A simple food website built with ReactJS and TailwindCSS, allowing users to browse a selection of dishes and easily add their favorites to the cart for a streamlined and enjoyable shopping experience.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        }
      ],
      image: foodwebsite,
      source_code_link: "https://github.com/Eljude03/foodWebsite",
      demo_link: "https://evpfoodwebsite.netlify.app/",
    },
    {
      name: "Tenzies Game",
      description:
        "Tenzies is an engaging dice game built with React, featuring a clean and simple UI. Challenge yourself to roll and match dice to achieve the highest score in this addictive, fun-filled game.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
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
        "ImagifyAI is a powerful FullStack web app built with Next.js, Tailwind CSS, and ShadCN. It features secure user login with Clerk and leverages Cloudinary’s advanced tools like Image Restore, Generative Fill, Object Removal, Object Recolor, and Background Removal. MongoDB is used for efficient database management.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "shadcn",
          color: "orange-text-gradient",
        },
        {
          name: "clerk",
          color: "pink-text-gradient",
        },
        {
          name: "cloudinary",
          color: "black-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
      ],
      image: imagify,
      source_code_link: "https://github.com/Eljude03/imagifyai",
      demo_link: "https://imagifyai-six.vercel.app",
    },
    {
      name: "Text2Speech",
      description:
        "Text2Speech is a web application that seamlessly converts written text into natural-sounding speech. Built with a modern frontend using React, a serverless backend powered by AWS Lambda, and Amazon Polly for high-quality text-to-speech synthesis, Text2Speech offers a user-friendly and efficient way to bring your text to life.",
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
      demo_link: "https://main.d1ltm6s20k9ofb.amplifyapp.com/",
    },
    {
      name: "QR Generator",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "AWS Lambda",
          color: "green-text-gradient",
        },
        {
          name: "Amazon Polly",
          color: "pink-text-gradient",
        },
        {
          name: "Amazon S3",
          color: "orange-text-gradient",
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

