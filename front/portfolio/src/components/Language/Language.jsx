import React, { createContext, useContext, useState } from "react";

const sentences = {
  spanish: {
    start: "Inicio",
    background_: "Desarrollo",
    projects: "Proyectos",
    technologies: "Tecnologías",
    position: "Desarrollador de Software",
    description_position:
      "Me gusta llevar las ideas de la mente al software y crear nuevas aplicaciones, herramientas y tecnologías con el objetivo ofrecer soluciones a traves de ellas.",
    curriculum: "Currículum",
    curriculum_link: "",
    certifications: "Certificados",
    background: "Formación",
    background_subtitle: "Mi desarrollo",
    work_experience: "Experiencia laboral",
    education: "Mi educación",
    skill: "Aptitudes",
    work_ibc_position: "Desarrollador de Software",
    work_ibc_date: "2023 Noviembre - 2024 Junio",
    work_ibc_description:
      "Desarrollé un servicio utilizando Azure Speech AI que permite al cliente entablar una conversación con el sistema. Todos los datos se transforman en métricas y estadísticas, para ser representados en gráficos en el panel de administración.",
    work_ibc_description_2:
      "Además, migré el proyecto de React 15 a React 18 y apliqué arquitectura hexagonal en el front.",
    see_more: "Ver más",
    work_inte_position:
      "Desarroollador Backend & Administrador de base de datos.",
    work_inte_date: "2023 Marzo - 2024 Junio",
    work_inte_description:
      "Trabajé de la mano con el equipo de QA, desarrolladores y el product owner para rediseñar la arquitectura de la base de datos, aplicando reglas de negocio, constrains, uniques y relaciones para una plataforma educativa.",
    work_inte_description_2:
      "Además, desarrollé los roles y permisos administrativos, considerando el rendimiento y la optimización.",
    work_1_position: "Desarrollador Full Stack",
    work_1_date: "2023 Febrero - 2023 Marzo",
    work_1_description:
      "Estuve a cargo de diseñar la base de datos, configurar el servidor, crear la landing page y la página de inicio para una clínica.",
    carrer_henry: "Desarrollador Full Stack",
    carrer_place_henry: "Henry",
    carrer_status_henry: "Culminado",
    carrer_date_henry: "2022 Junio - 2022 Diciembre",
    carrer_zegel: "Negocios Internacionales",
    carrer_place_zegel: "Zegel Ipae",
    carrer_status_zegel: "(1/3) años culminados.",
    carrer_date_zegel: "2021 Marzo - 2022 Marzo",
    carrer_upc: "Administración y Negocios Int.",
    carrer_place_upc: "Universidad Privada de Ciencias Aplicadas (UPC)",
    carrrr_status_upc: "(2/4) años culminados.",
    carrer_date_upc: "2019 Agosto - 2021 Febrero",
    skills_personal: "Personal",
    skills_personal_1: "Motivación personal",
    skills_personal_2: "Autodidacta",
    skills_personal_3: "Ética profesional",
    skills_personal_4: "Empatia y solidaridad",
    skills_personal_5: "Responsable",
    skills_personal_6: "Resiliencia",
    skills_personal_7: "Análisis de Problemas",
    skills_personal_8: "Aprendizaje continuo",
    skills_team: "Equipo",
    skills_team_1: "Team Work Scrum",
    skills_team_2: "Metodologías ágiles",
    skills_team_3: "Proponer ídeas",
    skills_team_4: "Gestión de tiempo",
    skills_team_5: "Comunicación efectiva",
    skills_team_6: "Escucha Activa",
    skills_team_7: "Capacitar",
    skills_team_8: "Adaptabilidad y flexibilidad",
    ibc_see_more_1: "Plataforma de idiomas certificada con ",
    ibc_see_more_2:
      ", enfocada en los niveles básico (A1 - A2) e intermedio (B1 - B2), con métodos dinámicos de aprendizaje como prácticas de vocabulario, gramática, pronunciación, simuladores de exámenes y conversaciones interactivas que se desbloquean a medida que el estudiante aprueba las lecciones.",
    ibc_see_more_3:
      "Cada nivel cuenta con múltiples lecciones, y dentro de cada lección el estudiante adquiere conocimientos que le permiten seguir avanzando. Además, el sistema recopila datos de las evaluaciones para generar gráficos y métricas que identifican los puntos fuertes y débiles de los estudiantes.",
    ibc_see_more_4:
      "Uno de mis roles fue rediseñar la base de datos para hacerla más escalable y capaz de soportar la enseñanza de más idiomas en el futuro. Además, migré el sistema de evaluación para utilizar una API integrada con el reconocedor de voz de inteligencia artificial de Azure Speech, que es más preciso al evaluar al estudiante en aspectos como pronunciación, prosodia, fluidez y oraciones completas, entre otros.",
    inte_see_more_1: "Una plataforma educativa enfocada en facilitar y mejorar el aprendizaje de los estudiantes, simplificar la enseñanza para los docentes, y monitorear el desempeño de todos los estudiantes, así como el de los docentes, coordinadores y directores de la institución.",  
    inte_see_more_2: "El core del producto es gestionar todo el funcionamiento de una institución educativa a nivel de plataforma. Las funcionalidades varían según los perfiles. Inicialmente, la configuración del colegio la realizará el 'Webmaster', quien representa la máxima autoridad de la institución y puede crear perfiles como Director, coordinador, docentes, estudiantes, etc. Por otro lado, el docente puede crear evaluaciones y monitorear el desempeño de los estudiantes. El estudiante, a su vez, puede revisar las clases, resolver evaluaciones y visualizar su libreta de notas, entre otras cosas.",  
    inte_see_more_3: "Después de 1 año desarrollando la plataforma, se empezó a comercializar, lo cual para mi es una gran satisfacción , ya que es un producto al cual mis compañeros y yo le pusimos bastante cariño y esfuerzo para de cierta manera aportar con la educación del Perú.",  
    _projects: "Proyectos",
    database: "Base de datos"
  },
  english: {
    start: "Start",
    background_: "Background",
    projects: "Projects",
    technologies: "Technologies",
    position: "Software Developer",
    description_position:
      "I enjoy taking ideas from the mind to software and creating new applications, tools, and technologies with the aim of providing solutions through them.",
    curriculum: "Curriculum",
    curriculum_link:
      "https://drive.google.com/file/d/1lwf_E7eULprHsL3bQYPYfZdo4VmafAoX/view",
    certifications: "Certifications",
    background: "Background",
    background_subtitle: "My development",
    work_experience: "Work Experience",
    education: "Education",
    skill: "Skills",
    work_ibc_position: "Software Developer",
    work_ibc_date: "2023 November - 2024 June",
    work_ibc_description:
      "I Developed a service using Azure Speech AI which allows the client to enter into a conversation with the system. All the data is transformed into metrics and statistics, to be rendered in graphs on the administrator dashboard.",
    work_ibc_description_2:
      "In addition to migrating the project from React 15 to React 18 and applying hexagonal architecture in the front.",
    see_more: "See more",
    work_inte_position: "Backend Developer & Database Administrator",
    work_inte_date: "2023 March - 2024 June",
    work_inte_description:
      "I worked closely with the QA team, developers, and the product owner to redesign the database architecture, applying business rules, constraints, uniques, and relationships for an Education platform.",
    work_inte_description_2:
      "Additionally, I developed the administrative roles and permissions, considering performance and optimization.",
    work_1_position: "Full Stack Developer",
    work_1_date: "2023 February - 2023 March",
    work_1_description:
      "I was in charge of designing the database, setting up the server from scratch , creating the landing page and the home for a clinic.",
    carrer_henry: "Full Stack Developer",
    carrer_place_henry: "Henry",
    carrer_status_henry: "Culminated",
    carrer_date_henry: "2022 June - 2022 December",
    carrer_zegel: "International Business",
    carrer_place_zegel: "Zegel Ipae",
    carrer_status_zegel: "(1/3) years completed",
    carrer_date_zegel: "2021 March - 2022 March",
    carrer_upc: "Administration & Int. Business",
    carrer_place_upc: "Universidad Privada de Ciencias Aplicadas (UPC)",
    carrer_status_upc: "(2/4) years completed.",
    carrer_date_upc: "2019 August - 2021 February",
    skills_personal: "Personal",
    skills_personal_1: "Self Motivation",
    skills_personal_2: "Self-taught",
    skills_personal_3: "Professional Ethics",
    skills_personal_4: "Empathy and Solidarity",
    skills_personal_5: "Responsible",
    skills_personal_6: "Resilience",
    skills_personal_7: "Problem Analysis",
    skills_personal_8: "Continuous learning",
    skills_team: "Team",
    skills_team_1: "Team Work Scrum",
    skills_team_2: "Agile Methodologies",
    skills_team_3: "Propose Ideas",
    skills_team_4: "Time Management",
    skills_team_5: "Effective Communication",
    skills_team_6: "Active Listening",
    skills_team_7: "Train",
    skills_team_8: "Adaptability and Flexibility",
    ibc_see_more_1: "Certified language platform with ",
    ibc_see_more_2:
      ", focused on basic (A1 - A2) and intermediate (B1 - B2) levels, with dynamic learning methods such as vocabulary practice, grammar, pronunciation, exam simulators, and interactive conversations that unlock as the student passes the lessons.",
    ibc_see_more_3: "Each level has multiple lessons, and within each lesson, the student acquires knowledge that allows them to keep advancing. Additionally, the system collects data from the assessments to generate graphs and metrics that identify the students' strengths and weaknesses.",
    ibc_see_more_4: "One of my roles was to redesign the database to make it more scalable and capable of supporting the teaching of more languages in the future. Additionally, I migrated the assessment system to use an API integrated with Azure Speech's AI speech recognizer, which is more accurate in evaluating the student on aspects such as pronunciation, prosody, fluency, and complete sentences, among others.",
    inte_see_more_1: "An educational platform focused on facilitating and enhancing student learning, simplifying teaching for educators, and monitoring the performance of all students, as well as that of teachers, coordinators, and institution directors.",
    inte_see_more_2: "The core of the product is to manage the entire operation of an educational institution at the platform level. The functionalities vary according to the profiles. Initially, the configuration of the school will be carried out by the 'Webmaster,' who represents the highest authority of the institution and can create profiles such as Director, Coordinator, Teachers, Students, etc. On the other hand, the Teacher can create assessments and monitor student performance. The Student, in turn, can review classes, complete assessments, and view their grade book, among other things.",
    inte_see_more_3: "After 1 year of developing the platform, it started being commercialized, which is a great satisfaction for me, as it is a product to which my colleagues and I put a lot of love and effort to contribute to the education of Peru in some way.",
    _projects: "Projects",
    database: "Database",
    
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("spanish");

  function switchLanguage(lang) {
    setLanguage(lang);
  }

  return (
    <LanguageContext.Provider
      value={{ language, switchLanguage, sentences: sentences[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
