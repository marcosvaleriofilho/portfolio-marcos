import aboutImg from '../assets/about.jpg'

const About = () => {
  return <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">Sobre
            <span className="text-neutral-500"> Mim</span>
        </h2>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl" src={aboutImg} alt="about"/>
                </div>
               
            </div> 
            <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6'>Sou estudante de Engenharia de Software no 6º semestre na PUC-Campinas,
                           atualmente atuando como bolsista pesquisador em Análise de Dados na Embrapa Agricultura Digital.
                           Tenho um forte interesse em desenvolvimento web e mobile, Business Intelligence, Ciência de Dados e Inteligência Artificial,
                           com foco em Machine Learning. Sou criativo, comunicativo, flexível e resiliente, sempre em busca de novas tecnologias e conhecimentos.
                           Procuro oportunidades em empresas de tecnologia em crescimento, onde possa aplicar e expandir minhas habilidades,
                           desenvolvendo-me em um ambiente que ofereça um plano de carreira sólido.
                        </p>
                    </div>
                </div>

        </div>
    </div>;
}

export default About;