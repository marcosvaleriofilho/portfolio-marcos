import profilePic from '../assets/marcos.png';
import cvFile from '../assets/[PT-BR]CVMarcosValerio.pdf';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="border-b-4 border-neutral-700 border-opacity-5 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-4xl font-normal tracking-tight lg:mt-16 lg:text-5xl">
              Marcos Antonio Valério Filho
            </h1>
            <span className="my-8 text-white bg-clip-text text-3xl tracking-tight text-transparent">
              Engenheiro de Software
            </span>
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
              <button 
                onClick={scrollToContact} 
                className="border-4 border-neutral-300 border-opacity-5 text-white font-bold py-3 px-4 rounded hover:bg-blue-900 hover:bg-opacity-50 hover:text-white transition-colors duration-300 mr-4"
              >
                Entre em contato!
              </button>
              <a 
                href={cvFile} 
                download="[PT-BR]CVMarcosValerio.pdf" 
                className="my-8 mt-4 lg:mt-0 text-white font-semibold bg-opacity-5 py-4 px-4 rounded bg-neutral-300 hover:bg-blue-900 hover:bg-opacity-50"
              >
                Baixe meu CV
              </a>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <img src={profilePic} alt='Marcos Filho'/>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default Hero;
