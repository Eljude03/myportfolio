import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
  return (
    <div name='about'>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>About</h2>
      </motion.div>
   
        <motion.p
          variants={fadeIn("", "", 0.3, 1)}
          className='text-xl dark:text-secondary'
        >
          Welcome to my portfolio! I’m currently immersing myself in the world
          of Web Development, with a keen focus on both Frontend and Backend
          Development. As I navigate through the complexities of creating
          dynamic and responsive web applications, I’m dedicated to mastering
          the latest technologies and best practices. My journey involves
          building intuitive user interfaces, crafting seamless user
          experiences, and developing robust server-side solutions. I’m excited
          to showcase my projects and share the progress as I continue to grow
          in this ever-evolving field.
        </motion.p>

    </div>
  );
};

export default SectionWrapper(About, "");
