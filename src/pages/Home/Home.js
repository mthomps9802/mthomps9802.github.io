import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

import htmlLogo from "../../assets/html5_logo.png";  // Replace with actual paths
import cssLogo from "../../assets/css3_logo.png";
import jsLogo from "../../assets/javascript_logo.png";
import reactLogo from "../../assets/react_logo.png";
import awslogo from "../../assets/aws_logo.png";
import dockerlogo from "../../assets/docker_logo.png";
import phplogo from "../../assets/php_logo.png";
import gologo from "../../assets/golang_logo.png";
import pythonlogo from "../../assets/python_logo.png";
import sqllogo from "../../assets/sql_logo.png";
import githublogo from "../../assets/github_logo.png";
import javalogo from "../../assets/java_logo.png";
import tailwindlogo from "../../assets/tailwind_logo.png";



const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };
  console.log("Home component is rendering!");
  return (
    
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-6">
      <div className="flex items-center gap-8 max-w-3xl w-full">
        {/* Left Side - Name & Description */}
        <div className="w-2/3 text-left">
          <h1 className="text-6xl font-extrabold">Mark A. Thompson,</h1>
          <p className="text-lg mt-4 max-w-md">
          Hello! I'm Mark, a passionate software engineer
           with a knack for creating innovative solutions.
            I thrive on challenges and love to learn new technologies.
             I am always eager to expand my skill set and take on new projects and 
             I hope to leverage my skillset to make a positive impact in the world.
          </p>
          <div className="mt-4 flex space-x-4">
            <a href="https://www.linkedin.com/in/mark-thompson-8124071b5/" target="blank" rel="noopener noreferrer">
              <AiFillLinkedin className="text-2xl text-gray-500 hover:text-white transition-colors" />
            </a>
            <a href="https://github.com/mthomps9802" target="_blank" rel="noopener noreferrer">
              <AiFillGithub className="text-2xl text-gray-300 hover:text-white transition-colors" />
            </a>
            <a href="mailto:markthompson_tla@yahoo.com" target="_blank" rel="noopener noreferrer">
              <AiOutlineMail className="text-2xl text-gray-300 hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Right Side - Carousel */}
        <div className="w-1/3 flex justify-center">
          <Slider {...settings} className="w-40 h-40 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
              <img src={pythonlogo} alt="React" className="w-32 h-32 object-contain mx-auto" />
              <p className="mt-2 text-white text-center text-lg font-semibold">Python</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={javalogo} alt="React" className="w-32 h-32 object-contain mx-auto" />
              <p className="mt-2 text-white text-center text-lg font-semibold">Java</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={htmlLogo} alt="HTML" className="w-32 h-32 object-contain mx-auto" />
              <p className="mt-2 text-white text-center text-lg font-semibold">HTML</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={cssLogo} alt="CSS" className="w-32 h-32 object-contain mx-auto" />
              <p className="mt-2 text-white text-center text-lg font-semibold">CSS</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={jsLogo} alt="JavaScript" className="w-32 h-32 object-contain mx-auto" />
              <p className="mt-2 text-white text-center text-lg font-semibold">JavaScript</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={phplogo} alt="React" className="w-32 h-32 object-contain mx-auto" />
              <p className="mt-2 text-white text-center text-lg font-semibold">PHP</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={sqllogo} alt="React" className="w-32 h-32 object-contain mx-auto" />
              <p className="mt-2 text-white text-center text-lg font-semibold">MySql</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={gologo} alt="React" className="w-32 h-32 object-contain mx-auto" />
              <p className="mt-2 text-white text-center text-lg font-semibold">Golang</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={reactLogo} alt="React" className="w-32 h-32 object-contain mx-auto" />
              <p className="mt-2 text-white text-center text-lg font-semibold">React</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={awslogo} alt="React" className="w-32 h-32 object-contain mx-auto" />
              <p className="mt-2 text-white text-center text-lg font-semibold">AWS</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={dockerlogo} alt="React" className="w-32 h-32 object-contain mx-auto" />
              <p className="mt-2 text-white text-center text-lg font-semibold">Docker</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={githublogo} alt="React" className="w-32 h-32 object-contain mx-auto" />
              <p className="mt-2 text-white text-center text-lg font-semibold">Github</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={tailwindlogo} alt="React" className="w-32 h-32 object-contain mx-auto" />
              <p className="mt-2 text-white text-center text-lg font-semibold">Tailwind</p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;