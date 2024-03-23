import { AiOutlineCaretRight } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";

const ProjectCard = ({ index, img, title, desc, live, code }) => {
  return (
    <div className="rounded-xl bg-secondery p-5 box-border shadow-sm shadow-red-500">
      <div className="img-cover relative rounded-xl overflow-hidden">
        <img className="img-project" src={img} alt={title} />
        <div className="flex absolute left-0 right-0 top-0 bottom-0 mx-auto bg-primary opacity-0 duration-500 justify-center flex-col hover:opacity-90 ">
          <p className="py-5 text-center font-normal text-base px-2 text-accent">
            {desc}
          </p>
        </div>
      </div>
      <h3 className="text-center text-accent mt-3 font-medium text-2xl">
        {title}
      </h3>
      <div className="flex justify-between mt-5 ">
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="rounded-full h-[45px] w-[45px] flex justify-center items-center border-2 border-solid border-[rgb(234, 234, 234)] box-border hover:bg-[#212121] hover:border-[#212121]"
        >
          <AiOutlineCaretRight
            size={30}
            className="text-accent hover:text-[#f14949]"
          />
        </a>
        <a
          href={code}
          target="_blank"
          rel="noreferrer"
          className="rounded-full h-[45px] w-[45px] flex justify-center items-center border-2 border-solid border-[rgb(234, 234, 234)] box-border hover:bg-[#212121] hover:border-[#212121]"
        >
          <AiOutlineLink
            size={30}
            className="text-accent hover:text-[#f14949]"
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
