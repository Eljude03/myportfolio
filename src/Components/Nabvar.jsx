import React from "react";
import { FaBars, FaTimes } from "react-icons";

const Nabvar = () => {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="font-signature text-5xl ml-2">Eljude</h1>
      </div>

      <ul className="hidden md:flex">

        {links.map(({id, link}) => (
          <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
            {link}
          </li>
        ))}

      </ul>
    </div>
  );
};

export default Nabvar;
