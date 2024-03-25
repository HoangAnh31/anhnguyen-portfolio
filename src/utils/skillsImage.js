import html from "../assets/skills/html.svg";
import react from "../assets/skills/react.svg";
import javascript from "../assets/skills/javascript.svg";
import css from "../assets/skills/css.svg";
import tailwind from "../assets/skills/tailwind.svg";
import figma from "../assets/skills/figma.svg";
import node from "../assets/skills/node.svg";
import typescript from "../assets/skills/typescript.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "react":
      return react;
    case "tailwind":
      return tailwind;
    case "figma":
      return figma;
    case "node":
      return node;
    case "typescript":
      return typescript;
    default:
      break;
  }
};
