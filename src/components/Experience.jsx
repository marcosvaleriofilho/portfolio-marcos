import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
        <div className="border-b-4 border-neutral-700 border-opacity-5 pb-4">
            <h1 className="my-20 text-center text-4xl">Experiências </h1>
            <div>
                {EXPERIENCES.map((experience,index) => (
                    <div key={index} className="items-center py-8 mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <p className="mb-2 text-md font-semibold text-neutral-100">{experience.year}</p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
  );
};

export default Experience