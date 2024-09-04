import React from "react";
import { FaGithub, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { AiOutlineMail, AiOutlineArrowUp } from "react-icons/ai";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center  ">
        <div className="flex gap-2 mb-4">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/eljude-panao-370219134/"
            className="icons"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            target="_blank"
            href="https://github.com/Eljude03"
            className="icons"
          >
            <FaGithub size={30} />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/JudE03.VP/"
            className="icons"
          >
            <FaFacebookSquare size={30} />
          </a>
          <a
            target="_blank"
            href="mailto:eljudepanao37@gmail.com"
            className="icons"
          >
            <AiOutlineMail size={30} />
          </a>
        </div>
        <div>
          <p className="credit">© ELJUDE PANAO 2023 </p>
        </div>
      </div>
      <div className="arrow-up">
        <Link to="home" smooth duration={500} className="hover:scale-110">
          <AiOutlineArrowUp size={25} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
