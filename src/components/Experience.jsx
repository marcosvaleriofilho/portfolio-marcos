import { EXPERIENCES } from "../constants";
import {motion} from "framer-motion"

const Experience = () => {
  return (
        <div className="border-b-4 border-neutral-700 border-opacity-5 pb-4">
            <motion.h2 initial={{y: -50, opacity: 0}} animate={{y:0, opacity:1}} transition={{duration: 1, delay: 1}} className="my-20 text-center text-4xl">Experiências </motion.h2>
            <div>
                {EXPERIENCES.map((experience,index) => (
                    <div key={index} className="items-center py-8 mb-8 flex flex-wrap lg:justify-center">
                        <motion.div whileInView={{opacity: 1, x: 0,}} initial={{opacity: 0, x: -100}} transition={{duration: 1, delay: .5}} className="w-full lg:w-1/4">
                            <p className="mb-2 text-md font-semibold text-neutral-100">{experience.year}</p>
                        </motion.div>
                        <motion.div whileInView={{opacity: 1, x: 0,}} initial={{opacity: 0, x: 100}} transition={{duration: 1, delay: .5}} className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 text-neutral-100 font-semibold">
                                {experience.role} -{" "}
                                <span className="text-md text-green-600"> 
                                    {experience.company}
                                </span>
                            </h6>
                            <p className="mb-4 text-neutral-500">{experience.description}</p>
                            {experience.technologies.map((tech,index) =>(
                                <span key={index} className="text-sm font-medium mr-2 rounded bg-neutral-800 bg-opacity-25 px-2 py-1">{tech}</span>
                            ) )}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
  );
};

export default Experience