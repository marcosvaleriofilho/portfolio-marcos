import profilePic from '../assets/marcos.png';
import cvFile from '../assets/[PT-BR]CVMarcosValerio-2.pdf';
import {motion} from "framer-motion";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const container = (delay) => ({
    hidden: {x: -100, opacity:0},
    visible: {
      x: 0,
      opacity: 1,
      transition: {duration: 0.5, delay: delay}
    }
  })

  return (
    <div className="border-b-4 border-neutral-700 border-opacity-5 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="pb-16 text-4xl font-normal tracking-tight lg:mt-16 lg:text-5xl">
              Marcos Antonio Valério Filho
            </motion.h1>
            <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="my-8 text-white bg-clip-text text-3xl tracking-tight text-transparent">
              Estudante de Engenharia de Software
            </motion.span>
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
              <motion.button 
              variants={container(1)} initial="hidden" animate="visible"
                onClick={scrollToContact} 
                className="border-4 border-neutral-300 border-opacity-5 text-white font-bold py-3 px-4 rounded hover:bg-blue-900 hover:bg-opacity-50 hover:text-white transition-colors duration-300 mr-4"
              >
                Entre em contato!
              </motion.button>
              <motion.a 
                variants={container(1)} initial="hidden" animate="visible"
                href={cvFile} 
                download="[PT-BR]CVMarcosValerio-2.pdf" 
                className="my-8 mt-4 lg:mt-0 text-white font-semibold bg-opacity-5 py-4 px-4 rounded bg-neutral-300 hover:bg-blue-900 hover:bg-opacity-50"
              >
                Baixe meu CV
              </motion.a>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <motion.img initial={{x: 100, opacity: 0}} animate={{x:0, opacity:1}} transition={{duration: 1, delay: 1.2}}
            src={profilePic} alt='Marcos Filho'/>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default Hero;
