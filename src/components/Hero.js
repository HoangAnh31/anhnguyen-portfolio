import React from "react";
import avatarImg from "../assets/avatar.jpg";
import { TypeAnimation } from "react-type-animation";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-2 py-24 text-white md:px-7 md:py-32 relative box-border">
      <div className="container mx-auto md:grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-img">
          <img
            src={avatarImg}
            alt="my avatar"
            className=" w-[320px] h-[320px] rounded-full object-cover mx-auto shadow-md shadow-slate-500 lg:w-[450px] lg:h-[450px]"
          />
        </div>
        <div className="hero-info pt-5 md:pt-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, I am{" "}
            <TypeAnimation
              sequence={["Anh Nguyen"]}
              wrapper="span"
              speed={50}
              style={{ color: "#f14949" }}
              cursor={false}
            />
            <TypeAnimation
              sequence={["Frontend Developer", "Software Engineer"]}
              wrapper="p"
              speed={10}
              cursor={false}
            />
          </h1>

          <p className="py-5">
            A Frontend developer with a spotlight on creating responsive,
            user-friendly solutions. My primary tech stack includes in
            Javascript, HTML/CSS, and ReactJS for frontend development.With a
            focus on continuous learning and improvement, I eagerly seek out
            opportunities to contribute my expertise to challenging projects,
            advance my capabilities, and make meaningful contributions to any
            team or project I'm a part of.
          </p>

          <div className="flex py-5 ">
            <a
              href="https://github.com/HoangAnh31"
              target="_blank"
              rel="noreferrer"
              className="pr-4 inline-block text-secondary hover:text-white"
            >
              {" "}
              <AiFillGithub size={40} />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/anhnguyen31/"
              target="_blank"
              rel="noreferrer"
              className="pr-4 inline-block text-secondary hover:text-white"
            >
              {" "}
              <AiFillLinkedin size={40} />{" "}
            </a>
          </div>

          <a
            href="/anhnguyen-portfolio/#projects"
            className=" inline-block btn bg-secondery border-2 border-[#f14949] text-white px-6 py-2 hover:bg-transparent rounded-md"
          >
            See Projects
          </a>
        </div>
      </div>
      <div className="line-styling">
        <div className="style-circle w-1 h-1 md:w-3 md:h-3 rounded-full bg-[#f14949]"></div>
        <div className="style-circle w-1 h-1 md:w-3 md:h-3 rounded-full bg-[#f14949]"></div>
        <div className="style-line rounded-xl h-1 w-[95%] bg-[#f14949]"></div>
      </div>
    </section>
  );
};
export default Hero;
