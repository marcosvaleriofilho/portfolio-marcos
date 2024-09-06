import {motion} from "framer-motion"

const About = () => {
  return (
    <div className="border-b-4 border-neutral-700 border-opacity-5 pb-4">
      <motion.h2 initial={{y: -50, opacity: 0}} animate={{y:0, opacity:1}} transition={{duration: 1, delay: 1}}  className="my-10 text-center text-4xl">
        Sobre
        <span className="text-neutral-300 text-opacity-20"> Mim</span>
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center"> 
        <motion.div  whileInView={{opacity: 1, y: 0,}} initial={{opacity: 0, y: 100}} transition={{duration: 1, delay: 1}} className='w-full'>
          <div className='flex items-center justify-center'>
            <p className='max-w-6xl text-center my-10 mb-20'>
            Estudante de Engenharia de Software no 6º semestre na PUC-Campinas com experiência prática em análise de dados e desenvolvimento de software. Atuo como bolsista pesquisador na Embrapa Agricultura Digital e tenho forte interesse em desenvolvimento web, mobile e Machine Learning. Busco uma posição em empresas de tecnologia em crescimento para aplicar e expandir minhas habilidades, com foco em soluções inovadoras e desenvolvimento contínuo.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
