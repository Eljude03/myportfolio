import React from "react";
import react from "../assets/react.png";
import js from "../assets/js.png";
import html from "../assets/html.png";
import css from "../assets/css-3.png";
import tailwindcss from "../assets/tailwind.svg";
import {FaGithub} from 'react-icons/fa'
import { SiNextdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import gitIcon from '../assets/Git-Icon.svg'
import nodeJs from '../assets/Node.js.svg'
import MongoDB from '../assets/MongoDB.svg'

const Experience = () => {
  const tech = [
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

  return (
    <div
      name="experience"
      className="w-full pt-20 bg-slate-50 dark:bg-gradient-to-b dark:from-gray-800 dark:to-black 
    dark:text-white pt-50"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tech.map(({ id, img, techName, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={img} alt="" className="w-20 mx-auto" />
               {id === 2 && <SiNextdotjs size={80} className="w-20 mx-auto"/>}
               {id === 6 && <FaGithub size={80} className="w-20 mx-auto"/>}
               {id === 10 && <SiExpress size={80} className="w-20 mx-auto"/>}
              <p className="mt-4">{techName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
