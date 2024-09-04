import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import HeroImage from "../assets/eljude.jpg";
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full "
    >
      <div className="max-w-[1160px] p-6 pr-[20px] mx-auto flex flex-col items-center justify-center w-full h-full md:flex-row">
        <div className="mt-8 flex flex-col justify-center h-full dark:text-white">
          <h6 className="text-2xl sm:text-4xl font-bold">
          Hi! I’m <span className="text-purple-600">Eljude Panao</span>, a passionate <span className="text-purple-600">web developer</span>
          </h6>
          <p className=" font-medium py-4 max-w-md dark:text-secondary text-[18px]">
           dedicated to
            creating impactful digital experiences. With expertise in both
            front-end and back-end technologies, I transform ideas into
            beautiful, functional websites that engage users. I’m always pushing
            the boundaries of web development, staying ahead of trends to
            deliver cutting-edge solutions. Explore my portfolio to see my work,
            and let’s collaborate to bring your vision to life!
          </p>

          <Link to="projects" smooth duration={500}>
            <div>
              <div
                className="group text-white flex items-center 
              rounded-md bg-gradient-to-r from-violet-400 to-purple-600 cursor-pointer
              w-fit px-6 py-3 my-2 "
              >
                Projects
                <span className="group-hover:rotate-90 ml-2 duration-300">
                  <HiArrowNarrowRight size={20} />
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="p-4">
          <img
            src={HeroImage}
            alt=""
            className="rounded-2xl mx-auto w-2/3 md:w-[75%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
