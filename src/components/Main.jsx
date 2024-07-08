import React from "react";
import { MdAttachEmail     } from "react-icons/md";
import { SlSocialLinkedin  } from "react-icons/sl";
import { FaGithub          } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { FaDatabase,FaTwitter,FaLinkedin, FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { RiJavaLine } from "react-icons/ri";

import { ReactTyped,Typed } from "react-typed";
import pic from "../../public/myphoto.jpeg";
import Card from 'react-bootstrap/Card';


function Main()
{
    return (
<>
  <div name="Home" className="mt-24 text-white max-w-screen-2xl container mx-auto px-4 md:px-20 flex justify-center items-center min-h-screen">
    <div className="flex flex-col md:flex-row">
      {/* Left Portion */}
      <div className="md:w-1/2 mt-12 md: space-y-4 order-1 md:order-1">
        <span className="text-3xl md:text-5xl break-words">Welcome to my feed</span>
        <div className="flex space-x-1 text-3xl md:text-4xl">
          <div className="flex items-center space-x-2 text-3xl md:text-4xl">
            <h1>Hello, I'm a</h1>
            <ReactTyped
              className="text-red-700 font-bold"
              strings={["Developer", "Programmer", "Coder"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>
        </div>
        <br />
        <p className="text-lg md:text-2xl text-justify font-bold italic">
          I'm a dedicated Software Development Engineer at CAMS in Chennai, India.
          We are working on advanced software solutions to tackle challenges within the Indian Mutual Fund industry, aiming to improve business operations and solve customer issues.
        </p>
        <br />
        <h1 className="font-bold">Currently Working On</h1>
        <br />
        <ul className="flex space-x-4 md:space-x-9 text-2xl md:text-4xl cursor-pointer">

          <li><RiJavaLine /></li>
          <li><FaDatabase /></li>
          <li><SiSpringboot/></li>
          <li><SiGooglecloud/></li>
        </ul>
      </div>
      {/* Right Portion */}
      <div className="md:w-1/2 md:ml-48 mt-8 md:mt-20 order-2 md:order-2 flex justify-center md:justify-start">
        <img src={pic} className="rounded-full w-48 h-48 md:w-[550px] md:h-[550px]" alt="Profile" />
      </div>
    </div>
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
</>

    );
}

export default Main;