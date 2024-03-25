import expImgWhite from "../assets/expImgWhite.svg";
import { motion } from "framer-motion";

const ExperienceCard = ({
  index,
  jobtitle,
  company,
  startYear,
  endYear,
  animate,
}) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 100 }}
      animate={animate}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5, delay: `${index * 0.3}` }}
    >
      <div className="experience-card flex flex-row items-start justify-start w-full h-[140px] transition-[background-color] duration-200 ease-[ease-in-out] mb-6 p-4 md:p-6 rounded-[20px] bg-[rgba(241,73,73,0.5)] hover:bg-[rgba(241,73,73,0.7)]">
        <div className="expcard-img w-[55px] h-[55px] flex items-center justify-center shrink-0 rounded-[50%] bg-secondery">
          <img src={expImgWhite} alt="" className="w-9 pointer-events-none" />
        </div>
        <div className="experience-details ml-[0.6rem]">
          <h6 className="text-[0.85rem] font-bold mb-1 text-secondary">
            {startYear}-{endYear}
          </h6>
          <h4 className="text-base md:text-[1.225rem] font-bold">{jobtitle}</h4>
          <h5 className="text-base md:text-[1.15rem] font-semibold ">
            {company}
          </h5>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
