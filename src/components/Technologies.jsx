import { RiReactjsLine } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiJavaFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiMetabase } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import {motion, transform} from "framer-motion";

const iconVariants = (duration) =>({
  initial: {y: -10},
  transition:{
    duration: duration,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse" 
  }
})

const techData = [
  { icon: <RiReactjsLine />, name: 'React', color: 'text-cyan-400', bgColor: 'bg-cyan-400' },
  { icon: <RiJavascriptLine />, name: 'JavaScript', color: 'text-yellow-400', bgColor: 'bg-yellow-400' },
  { icon: <SiTypescript />, name: 'TypeScript', color: 'text-blue-500', bgColor: 'bg-blue-500' },
  { icon: <FaNodeJs />, name: 'Node.js', color: 'text-green-500', bgColor: 'bg-green-500' },
  { icon: <SiMongodb />, name: 'MongoDB', color: 'text-green-500', bgColor: 'bg-green-500' },
  { icon: <BiLogoPostgresql />, name: 'PostgreSQL', color: 'text-sky-700', bgColor: 'bg-sky-700' },
  { icon: <RiJavaFill />, name: 'Java', color: 'text-red-500', bgColor: 'bg-red-500' },
  { icon: <FaPython />, name: 'Python', color: 'text-yellow-500', bgColor: 'bg-yellow-500' },
  { icon: <FaDocker />, name: 'Docker', color: 'text-blue-600', bgColor: 'bg-blue-600' },
  { icon: <SiMetabase />, name: 'Metabase', color: 'text-blue-500', bgColor: 'bg-blue-500' },
  { icon: <FaGithub />, name: 'GitHub', color: 'text-white', bgColor: 'bg-white' },
  { icon: <FaFigma />, name: 'Figma', color: 'text-purple-600', bgColor: 'bg-purple-600' },
];

const Technologies = () => {
  return (
    <div className="border-b-4 border-neutral-700 border-opacity-5 pb-24">
      <motion.h2 initial={{y: -50, opacity: 0}} animate={{y:0, opacity:1}} transition={{duration: 1, delay: 1}} className="my-20 text-center text-4xl">Tecnologias</motion.h2>
      <motion.div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2">
        {techData.map((tech, index) => (
          <motion.div
          whileInView={{opacity: 1, y: 0,}} initial={{opacity: 0, y: 100}} transition={{duration: 1, delay: .5}}
            key={index}
            className={`relative flex flex-col items-center space-y-2 rounded-2xl bg-neutral-800 bg-opacity-15 p-4 overflow-hidden group`}
          >
            <div
              className={`absolute inset-0 ${tech.bgColor} opacity-0 group-hover:opacity-50 transition-opacity`}
            />
            <div className={`relative z-10 text-4xl sm:text-5xl lg:text-7xl transition-colors group-hover:filter group-hover:text-white ${tech.color}`}>
              {tech.icon}
            </div>
            <span className={`relative z-10 text-sm sm:text-base lg:text-lg font-semibold transition-colors group-hover:text-white`}>
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
