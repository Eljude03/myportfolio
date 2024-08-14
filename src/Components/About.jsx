import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" h-screen w-full bg-slate-50 dark:bg-gradient-to-b dark:from-gray-800 dark:to-black dark:text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl">
          Welcome to my portfolio! I’m currently immersing myself in the world
          of Web Development, with a keen focus on both Frontend and Backend
          Development. As I navigate through the complexities of creating
          dynamic and responsive web applications, I’m dedicated to mastering
          the latest technologies and best practices. My journey involves
          building intuitive user interfaces, crafting seamless user
          experiences, and developing robust server-side solutions. I’m excited
          to showcase my projects and share the progress as I continue to grow
          in this ever-evolving field.
        </p>
      </div>
    </div>
  );
};

export default About;
