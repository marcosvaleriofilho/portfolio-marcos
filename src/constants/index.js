import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";


export const EXPERIENCES = [
  {
    year: "Junho/2024 - Presente",
    role: "Iniciação científica",
    company: "Embrapa Agricultura Digital",
    description: `Atuando na análise de dados e desenvolvimento de dashboards utilizando Metabase via Docker, com uma base de dados específica do projeto. Também faço uso do PostgreSQL para manipulação e visualização de dados, contribuindo diretamente para o acompanhamento e a apresentação dos resultados da pesquisa.`,
    technologies: ["Docker", "PostgreSQL", "Metabase", "Apache Superset"],
  },
  {
    year: "Agosto/2023 - Maio/2024",
    role: "Estágio em Engenharia de Software",
    company: "Embrapa Agricultura Digital",
    description: `Desenvolvimento de uma aplicação mobile híbrida em React Native com foco em Offline First, utilizando Expo, para controle do ciclo de vida do gado leiteiro. Atuei principalmente no front-end, sendo responsável pela criação de rotas, design de UI/UX, responsividade e renderizações condicionais. Também colaborei no desenvolvimento do back-end, incluindo a implementação de uma máquina de estados. Trabalhei em um time colaborativo composto por quatro membros (eu, dois estagiários e nosso supervisor), o que me proporcionou valiosa experiência em trabalho em equipe.`,
    technologies: ["React Native", "TypeScript", "Expo", "SQLite","Android","iOS"],
  },

];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "Um site de portfólio pessoal apresentando projetos, habilidades e informações de contato.",
    technologies: ["HTML", "TailwindCSS", "React", "GitHub", "Vercel", ],
  },
  {
    title: "SportIn",
    image: project2,
    description:
      "Um projeto ainda em desenvolvimento sobre uma plataforma para gerar conexões de atletas do mundo inteiro. Ideia inspirada a partir das olimpíadas de Paris.",
    technologies: ["Angular", "Java SpringBoot"],
  },
  {
    title: "ReconAI",
    image: project5,
    description:
      "Site desenvolvido para recomendação de roupas através de IA, que foi o conteúdo obrigatório para o Projeto Integrador V da faculdade, onde foi desenvolvida a IA através da similaridade de cossenos.",
    technologies: ["HTML", "CSS", "JavaScript","Flask","Python","PostgreSQL"],
  },
  {
    title: "NutriMoo",
    image: project3,
    description:
      "Projeto que consiste em geração de dieta para o gado. Desenvolvido para o Projeto Integrador IV da faculdade, onde fiquei mais focado no desenvolvimento front-end. Também, neste projeto, foi desenvolvido um servidor em Java com cliente integrado ao front-end, e uma API em SpringBoot.",
    technologies: ["React Native", "Expo", "JavaScript", "Java","Java SpringBoot","MongoDB"],
  },
  {
    title: "Roda da Reprodução - Balde Cheio - Embrapa",
    image: project4,
    description:
      "Minha primeira participação em um projeto profissional. Aplicação em React Native com foco em Offline First, utilizando Expo, para controle do ciclo de vida do gado leiteiro.",
    technologies: ["React Native", "Expo", "TypeScript","SQLite","Android","iOS"],
  },
];
