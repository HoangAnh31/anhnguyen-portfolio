import ExperienceCard from "../UI/ExperienceCard";
import expImg from "../assets/expRed.svg";
import { experienceData } from "../data/experiencesData";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Experiences = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger animations repeatedly
  });
  return (
    <section
      className="bg-primary text-white px-2 py-8 md:px-7 md:py-16"
      id="experiences"
    >
      <div className="container mx-auto lg:max-w-[85%]">
        <div className="about-info mb-5">
          <h2 className="text-5xl text-center md:text-6xl font-bold mb-10 text-secondary md:text-right inline-block w-full">
            Experiences
          </h2>
        </div>
        <div className="exp-container grid md:grid-cols-2 items-center justify-center md:justify-between gap-3">
          <div className="about-img">
            <img
              src={expImg}
              alt="Experiences"
              className="max-w-[80%] mx-auto md:mx-0"
            />
          </div>

          <motion.div ref={ref}>
            {experienceData.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                index={index}
                jobtitle={exp.jobtitle}
                company={exp.company}
                startYear={exp.startYear}
                endYear={exp.endYear}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              ></ExperienceCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Experiences;
