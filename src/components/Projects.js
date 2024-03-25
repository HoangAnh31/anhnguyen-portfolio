import ProjectCard from "../UI/ProjectCard";
import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  return (
    <section
      className="bg-primary text-white px-2 py-8 md:px-7 md:py-16"
      id="projects"
    >
      <div className="container mx-auto lg:max-w-[85%]">
        <div className="about-info mb-5">
          <h2 className="text-5xl text-center md:text-left md:text-6xl font-bold mb-12 text-secondary">
            Projects
          </h2>
        </div>
      </div>

      <motion.div
        className="projects container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:max-w-[85%] "
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
      >
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            img={project.img}
            title={project.title}
            desc={project.desc}
            live={project.live}
            code={project.code}
          ></ProjectCard>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
