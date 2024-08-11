import { PROJECTS } from "../constants";
import {motion } from "framer-motion";

const Projects = () => {
  return ( 
    <div className="border-b-4 border-neutral-700 border-opacity-5 pb-4">
        <motion.h2 initial={{y: -50, opacity: 0}} animate={{y:0, opacity:1}} transition={{duration: 1, delay: 1}} className="my-20 text-center text-4xl">
            Projetos
        </motion.h2>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div whileInView={{opacity: 1, x: 0,}} initial={{opacity: 0, x: -100}} transition={{duration: 1, delay: .5}} className="w-full lg:w-1/4">
                        <img src={project.image} width={150} height={150} className="mb-6 rounded" alt={project.title}/>
                    </motion.div>
                    <motion.div  whileInView={{opacity: 1, x: 0,}} initial={{opacity: 0, x: 100}} transition={{duration: 1, delay: .5}} className="w-full max-w-xl lg:w-3/4">
                        <h5 className="mb-2 font-semibold">{project.title}</h5>
                        <p className="mb-4 text-neutral-500">{project.description}</p>
                        {project.technologies.map((tech,index)=> (
                            <span key={index} className=" text-sm font-medium mr-2 rounded bg-neutral-800 bg-opacity-25 px-2 py-1">
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Projects