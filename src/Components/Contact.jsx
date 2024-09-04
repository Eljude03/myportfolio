import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const Contact = () => {
  return (
    <div name='contact'>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Contact</h2>
      </motion.div>

      <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 dark:text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Submit the form to get in touch with me
        </motion.p>
   
        <motion.div
          variants={fadeIn("", "", 0.3, 1)}
          className='flex flex-col justify-center items-center mt-14'
        >
          <form
            action="https://getform.io/f/23601a7d-d171-461a-b019-751189fc8206"
            method="Post"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none border-gray-500 dark:border-white-100"
            />

            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none  border-gray-500 dark:border-white-100"
            />

            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none  border-gray-500 dark:border-white-100"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-violet-400 to-purple-600 py-3 px-6 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </motion.div>

    </div>
  );
};

export default SectionWrapper(Contact, "");
