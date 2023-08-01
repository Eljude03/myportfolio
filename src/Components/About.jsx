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

        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsam
          inventore eum dolor et, quo odit pariatur id porro corporis in
          dignissimos, expedita aperiam a molestias libero tenetur? Vero numquam
          minima deserunt assumenda animi quia pariatur dolore nulla aliquid
          aspernatur a, quasi veritatis, omnis ex officiis ullam similique!
          Delectus, aperiam.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          beatae voluptas eos deleniti explicabo. Minima voluptatem dolor, fugit
          possimus nulla similique quidem delectus laboriosam aliquid culpa?
          Perspiciatis consequatur vitae illum laudantium, facilis sit debitis
          temporibus sapiente ea aut recusandae harum dolore, maiores facere?
          Assumenda inventore, placeat minima tempora sed sequi.
        </p>
      </div>
    </div>
  );
};

export default About;
