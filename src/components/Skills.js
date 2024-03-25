import { skillsData } from "../data/skillsData";
import { skillsImage } from "../utils/skillsImage";
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <section
      className="bg-primary text-white px-2 py-8 md:px-7 md:py-16"
      id="skills"
    >
      <div className="container mx-auto lg:max-w-[85%]">
        <div className="about-info mb-5">
          <h2 className="text-5xl text-center md:text-left md:text-6xl font-bold mb-5 text-secondary">
            Skills
          </h2>
        </div>

        <div className="skillsContainer flex items-center justify-center w-full mt-8">
          <div className="skill--scroll w-full mx-8 my-0">
            <Marquee
              gradient={false}
              speed={80}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="right"
            >
              {skillsData.map((skill, id) => (
                <div
                  className="skill--box shadow-[0px_10px_20px_rgba(241,73,73,0.2)] w-40 h-40 flex flex-col items-center justify-center transition-[300ms] duration-[ease-in-out] m-6 px-4 py-8 rounded-[10px] hover:scale-[1.15]"
                  key={id}
                >
                  <img
                    src={skillsImage(skill)}
                    alt={skill}
                    className="h-[50px] pointer-events-none;"
                  />
                  <h3 className="font-medium text-[22px] text-center mt-4">
                    {skill}
                  </h3>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
