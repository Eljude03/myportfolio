import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import HeroImage from "../assets/eljude.jpg";
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-slate-50 dark:bg-gradient-to-b dark:from-black dark:via-black dark:to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center w-full h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold dark:text-white">
            I'm a aspiring Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsa
            natus quos quae rem! Nihil et nobis expedita perferendis natus?
          </p>

         <Link to="portfolio" smooth duration={500}>
          
          <div>
            <div
              className="group text-white flex items-center 
              rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer
              w-fit px-6 py-3 my-2 "
              >
              Portfolio
              <span className="group-hover:rotate-90 ml-2 duration-300">
                <HiArrowNarrowRight size={20} />
              </span>
            </div>

          </div>
                </Link>
              
        </div>

        <div>
          <img
            src={HeroImage}
            alt=""
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
