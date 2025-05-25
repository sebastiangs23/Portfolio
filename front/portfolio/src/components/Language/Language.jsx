import React, { createContext, useContext, useState } from "react";

const sentences = {
  spanish: {
    navBar: [
      {
        name: 'Inicio',
        href: '#home'
      },
      {
        name: 'Desarrollo',
        href: '#desarrollo'
      },
      {
        name: 'Proyectos',
        href: '#projectos'
      },
      {
        name: 'Tecnologías',
        href: '#tecnologias'
      }
    ],
    start: "Inicio",
    background_: "Desarrollo",
    projects: "Proyectos",
    technologies: "Tecnologías",
    position: "Desarrollador de Software",
    description_position:
      "Me gusta llevar las ideas de la mente al software y crear nuevas aplicaciones, herramientas y tecnologías con el objetivo ofrecer soluciones a traves de ellas.",
    curriculum: "Currículum Español",
    curriculum_link: "https://docs.google.com/document/d/189xJH_zdEJyKH3OHbvBwqJMLCChYMZ_73_zD72AmdSU/edit?tab=t.0",
    certifications: "Certificados",
    certifications_link: "https://drive.google.com/file/d/155D_WDM7ZLKUH_8rlangKlkF0TFTl3un/view?usp=sharing",
    background: "Formación",
    background_subtitle: "Mi desarrollo",
    work_experience: "Experiencia laboral",
    education: "Mi educación",
    skill: "Aptitudes",
    work_neoris_position: "Desarrollador Frontend Semi Senior",
    work_neoris_date: "2025 Marzo - Actualidad",
    work_neoris_description: "Diseñé Web Components reutilizables y totalmente responsivos para BBVA, utilizando un framework interno (Cells) y principios de clean code. Cada componente fue testeado, documentado e incluía casos de uso detallados para asegurar su funcionalidad y mantenibilidad.",
    work_neoris_description_2: " Además, implementé funcionalidades avanzadas, refactoricé código y mantuve altos estándares de calidad aplicando buenas prácticas y la convención BEM.",

    work_inlearning_position: "Desarrollador Frontend",
    work_inlearning_date: "2024 Octubre - 2025 Marzo",
    work_inlearing_description: "Diseñé y refactoricé componentes y vistas jerárquicas completamente responsivas, con hasta 5 niveles de interconexión mediante props, emits, inject, provide y refs. Migré más de 20 vistas a TypeScript aplicando buenas prácticas con interfaces, tipos, operadores ternarios, type guards y coalescencia nula.",
    work_inlearning_description_2: "Además, desarrollé más de 50 plantillas de correo electrónico automatizadas, enviadas cronológicamente a todos los usuarios.",

    work_dazlabs_position: "Desarrollador Backend",
    work_dazlabs_date: "2024 Agosto - 2025 Marzo",
    work_dazlabs_description: "Desarrollé múltiples servicios backend para diferentes productos (viajes, belleza y automatización interna), diseñando colecciones en MongoDB y entregando endpoints RESTful probados y documentados con Swagger;",
    work_dazlabs_description_2: " además, di una capacitación técnica sobre APIs de inteligencia artificial a más de 110 personas.",
    
    work_ibc_position: "Desarrollador de Software",
    work_ibc_date: "2023 Noviembre - 2024 Junio",
    work_ibc_description:
      "Desarrollé un servicio utilizando Azure Speech AI que permite al cliente entablar una conversación con el sistema. Todos los datos se transforman en métricas y estadísticas, para ser representados en gráficos en el panel de administración.",
    work_ibc_description_2:
      "Además, migré el proyecto de React 15 a React 18 y apliqué arquitectura hexagonal en el front.",
    see_more: "Ver más",
    work_inte_position:
      "Desarrollador Backend & Administrador de base de datos.",
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
    carrer_status_upc: "(2/4) años culminados.",
    carrer_date_upc: "2019 Agosto - 2021 Febrero",
    skills_personal: "Personal",
    skills_personal_all: [
      "Motivación personal",
      "Autodidacta",
      "Ética profesional",
      "Empatia y solidaridad",
      "Responsable",
      "Resiliencia",  
      "Análisis de Problemas",  
      "Aprendizaje continuo",
    ],
    skills_team: "Equipo",
    skills_team_all: [
      "Trabajo en equipo Scrum",
      "Metodologías ágiles",
      "Proponer ídeas",
      "Gestión de tiempo",
      "Comunicación efectiva",
      "Escucha Activa",
      "Capacitar",
      "Adaptabilidad y flexibilidad",
    ],
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
    navBar: [
      {
        name: 'Start',
        href: '#home'
      },
      {
        name: 'Background',
        href: '#desarrollo'
      },
      {
        name: 'Projects',
        href: '#projectos'
      },
      {
        name: 'Technologies',
        href: '#tecnologias'
      }
    ],
    start: "Start",
    background_: "Background",
    projects: "Projects",
    technologies: "Technologies",
    position: "Software Developer",
    description_position:
      "I enjoy taking ideas from the mind to software and creating new applications, tools, and technologies with the aim of providing solutions through them.",
    curriculum: "Curriculum English",
    curriculum_link:
      "https://docs.google.com/document/d/1I0UgdRaRptBlzsb_EVH55I9azX-1m4Bo/edit?usp=sharing&ouid=115427612197801979579&rtpof=true&sd=true",
    certifications: "Certifications",
    certifications_link: "https://drive.google.com/file/d/155D_WDM7ZLKUH_8rlangKlkF0TFTl3un/view?usp=sharing",
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
    work_neoris_position: "Frontend Developer Semi Senior",
    work_neoris_date: "2025 March - Present",
    work_neoris_description: "Designed reusable and fully responsive Web Components for BBVA using an internal framework (Cells) and clean code principles. Each component was thoroughly tested, documented, and included detailed use cases to ensure functionality and maintainability.",
    work_neoris_description_2: " Additionally, implemented advanced features, refactored code, and upheld high-quality standards by applying best practices and the BEM convention.",
    work_inlearning_position: "Frontend Developer",
    work_inlearning_date: "2024 October - 2025 March",
    work_inlearing_description: "Created and refactored hierarchical, fully responsive components and views with up to 5 levels of interconnection using props, emits, inject, provide, and refs. Migrated over 20 views to TypeScript, implementing interfaces, types, ternary operators, type guards, and nullish coalescing.",
    work_inlearning_description_2: "Developed 50+ automated email templates triggered chronologically for all users.",

    work_dazlabs_position: "Backend Developer",
    work_dazlabs_date: "2024 August - 2025 March",
    work_dazlabs_description: "Developed multiple backend services for various products (travel, beauty, and internal automation), designing MongoDB collections and delivering fully tested and documented RESTful endpoints via Swagger; additionally,",
    work_dazlabs_description_2: " led a technical training session on AI APIs for over 110 people.",

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
