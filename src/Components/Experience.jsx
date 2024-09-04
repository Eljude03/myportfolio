import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { tech } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import {FaGithub} from 'react-icons/fa'
import { SiNextdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";

const TechCard = ({
  index,
  id,
  img,
  techName,
  style
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        key={id}
        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
      >
        <img src={img} alt="" className="w-20 mx-auto" />
        {id === 2 && <SiNextdotjs size={80} className="w-20 mx-auto" />}
        {id === 6 && <FaGithub size={80} className="w-20 mx-auto" />}
        {id === 10 && <SiExpress size={80} className="w-20 mx-auto" />}
        <p className="mt-4">{techName}</p>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div name='experience'>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Experience</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 dark:text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          These are the technologies I've worked with
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
        {tech.map((tech, index) => (
          <TechCard key={`project-${index}`} index={index} {...tech} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "");
