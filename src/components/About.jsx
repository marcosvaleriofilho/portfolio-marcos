import {motion} from "framer-motion"

const About = () => {
  return (
    <div className="border-b-4 border-neutral-700 border-opacity-5 pb-4">
      <motion.h2 initial={{y: -50, opacity: 0}} animate={{y:0, opacity:1}} transition={{duration: 1, delay: 1}}  className="my-10 text-center text-4xl">
        Sobre
        <span className="text-purple-300"> Mim</span>
        </motion.h2>
      <div className="flex flex-wrap items-center justify-center"> 
        <motion.div  whileInView={{opacity: 1, y: 0,}} initial={{opacity: 0, y: 100}} transition={{duration: 1, delay: 1}} className='w-full'>
          <div className='flex items-center justify-center'>
            <p className='max-w-6xl text-center my-10 mb-20'>
            Estudante de Engenharia de Software no 6º semestre da PUC-Campinas, atualmente atuando como Estagiário em Inteligência Artificial no Instituto de Pesquisas Eldorado. Altamente adaptável, proativo e colaborativo, com boas habilidades de resolução de problemas e trabalho em equipe. Sempre em busca de expandir meus conhecimentos em novas tecnologias para entregar soluções inovadoras.            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
