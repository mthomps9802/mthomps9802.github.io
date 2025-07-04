import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

import htmlLogo from "../../assets/html5_logo.png";  
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

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-12 pt-16 md:pt-20 lg:pt-24">
      {/* Container that limits width and centers content */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl w-full gap-24">
        {/* Left Side - Name & Description */}
        <div className="md:w-1/2 w-full text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Mark A. Thompson,
          </h1>
          <p className="text-base md:text-lg mt-4 max-w-md leading-relaxed">
            Hello! I'm Mark, a passionate software engineer/developer with a knack
            for creating innovative solutions. I thrive on challenges and love to
            learn new technologies. I have a keen interest in cybersecurity and I
            am always eager to expand my skill set and take on new projects. I
            hope to leverage my skillset to make a positive impact in the world.
          </p>
          <div className="mt-4 flex space-x-4">
            <a href="https://www.linkedin.com/in/mark-thompson-8124071b5/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin className="text-3xl text-gray-500 hover:text-white transition-colors" />
            </a>
            <a href="https://github.com/mthomps9802" target="_blank" rel="noopener noreferrer">
              <AiFillGithub className="text-3xl text-gray-300 hover:text-white transition-colors" />
            </a>
            <a href="mailto:markthompson_tla@yahoo.com" target="_blank" rel="noopener noreferrer">
              <AiOutlineMail className="text-3xl text-gray-300 hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Right Side - Carousel */}
        <div className="md:w-1/2 w-full flex justify-center  items-start mt-10">
          <div className="w-40 h-40">
            <Slider {...settings} className="w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72">
              {[ 
                { src: pythonlogo, name: "Python" },
                { src: javalogo, name: "Java" },
                { src: htmlLogo, name: "HTML" },
                { src: cssLogo, name: "CSS" },
                { src: jsLogo, name: "JavaScript" },
                { src: phplogo, name: "PHP" },
                { src: sqllogo, name: "MySql" },
                { src: gologo, name: "Golang" },
                { src: reactLogo, name: "React" },
                { src: awslogo, name: "AWS" },
                { src: dockerlogo, name: "Docker" },
                { src: githublogo, name: "Github" },
                { src: tailwindlogo, name: "Tailwind" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center px-4"
                >
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className="w-28 h-28 object-contain mx-auto"
                  />
                  <p className="mt-2 text-white text-center text-sm sm:text-base font-semibold">
                    {tech.name}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;