import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { BsSun } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Resume from "../assets/Eljude-V-Panao-CV.pdf";

const Nabvar = () => {
  const [nav, setNav] = useState(false);
  const toggle = () => {
    setNav((prev) => !prev);
  };

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const links = [
    {
      id: 1,
      link: "home",
      href: "#home",
    },
    {
      id: 2,
      link: "about",
      href: "#about",
    },
    {
      id: 3,
      link: "portfolio",
      href: "#portfolio",
    },
    {
      id: 4,
      link: "experience",
      href: "#experience",
    },
    {
      id: 5,
      link: "contact",
      href: "#contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 fixed shadow-lg bg-white dark:bg-black dark:text-white">
      <div className="flex">
        <h1 className="font-signature text-5xl ml-2">Eljude</h1>
      </div>

      <ul className="hidden md:flex">
        <button
          onClick={handleThemeSwitch}
          className="pl-4 ml-4 cursor-pointer flex justify-center items-center"
        >
          {theme === "dark" ? (
            <BsSun size={25} className="darkmode-icons" />
          ) : (
            <BsFillMoonStarsFill size={30} className="darkmode-icons"  />
          )}
        </button>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex justify-center items-center gap-4 md:hidden">
        <button
          onClick={handleThemeSwitch}
          className="pl-4 ml-4 cursor-pointer flex justify-center items-center"
        >
          {theme === "dark" ? (
            <BsSun size={25} className="darkmode-icons"/>
          ) : (
            <BsFillMoonStarsFill size={30} className="darkmode-icons"/>
          )}
        </button>
        <a href={Resume} download={true} rel="noreferrer" className="rounded-md cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 w-fit px-4 py-2 my-2 font-medium text-white">
          Download Resume
        </a>
        <div
          onClick={toggle}
          className="cursor-pointer pr-4 z-10 text-gray-500 "
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="text-4xl capitalize cursor-pointer px-4 py-6"
            >
              <Link onClick={()=> setNav(false)} to={link} smooth duration={500}>
              {link}
            </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Nabvar;
