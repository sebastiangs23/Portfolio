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
    work_ibc_description: "Desarrollé un servicio utilizando Azure Speech AI que permite al cliente entablar una conversación con el sistema. Todos los datos se transforman en métricas y estadísticas, para ser representados en gráficos en el panel de administración.",
    work_ibc_description_2: "Además, migré el proyecto de React 15 a React 18 y apliqué arquitectura hexagonal en el front.",
    see_more: "Ver más",
    work_inte_position: "Desarroollador Backend & Administrador de base de datos.",
    work_inte_date: "2023 Marzo - 2024 Junio",
    work_inte_description: "Trabajé de la mano con el equipo de QA, desarrolladores y el product owner para rediseñar la arquitectura de la base de datos, aplicando reglas de negocio, constrains, uniques y relaciones para una plataforma educativa.",
    work_inte_description_2 : "Además, desarrollé los roles y permisos administrativos, considerando el rendimiento y la optimización.",
    work_1_position: "Desarrollador Full Stack",
    work_1_date: "2023 Febrero - 2023 Marzo",
    work_1_description: "Estuve a cargo de diseñar la base de datos, configurar el servidor, crear la landing page y la página de inicio para una clínica.",
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
    skills_personal_1 : "Motivación personal",
    skills_personal_2 : "Autodidacta",
    skills_personal_3 : "Ética profesional",
    skills_personal_4 : "Empatia y solidaridad",
    skills_personal_5 : "Responsable",
    skills_personal_6 : "Resiliencia",
    skills_personal_7 : "Análisis de Problemas",
    skills_personal_8 : "Aprendizaje continuo",
    skills_team: "Equipo",
    skills_team_1: "Team Work Scrum",
    skills_team_2: "Metodologías ágiles",
    skills_team_3: "Proponer ídeas",
    skills_team_4: "Gestión de tiempo",
    skills_team_5: "Comunicación efectiva",
    skills_team_6: "Escucha Activa",
    skills_team_7: "Capacitar",
    skills_team_8: "Adaptabilidad y flexibilidad",

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
    curriculum_link: "https://drive.google.com/file/d/1lwf_E7eULprHsL3bQYPYfZdo4VmafAoX/view",
    certifications: "Certifications",
    background: "Background",
    background_subtitle: "My development",
    work_experience: "Work Experience",
    education: "Education",
    skill: "Skills",
    work_ibc_position: "Software Developer",
    work_ibc_date: "2023 November - 2024 June",
    work_ibc_description: "I Developed a service using Azure Speech AI which allows the client to enter into a conversation with the system. All the data is transformed into metrics and statistics, to be rendered in graphs on the administrator dashboard.",
    work_ibc_description_2: "In addition to migrating the project from React 15 to React 18 and applying hexagonal architecture in the front.",
    see_more: "See more",
    work_inte_position: "Backend Developer & Database Administrator",
    work_inte_date: "2023 March - 2024 June",
    work_inte_description: "I worked closely with the QA team, developers, and the product owner to redesign the database architecture, applying business rules, constraints, uniques, and relationships for an Education platform.",
    work_inte_description_2 : "Additionally, I developed the administrative roles and permissions, considering performance and optimization." ,
    work_1_position: "Full Stack Developer",
    work_1_date: "2023 February - 2023 March",
    work_1_description: "I was in charge of designing the database, setting up the server from scratch , creating the landing page and the home for a clinic.",
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
    skills_personal_1 : "Self Motivation",
    skills_personal_2 : "Self-taught",
    skills_personal_3 : "Professional Ethics",
    skills_personal_4 : "Empathy and Solidarity",
    skills_personal_5 : "Responsible",
    skills_personal_6 : "Resilience",
    skills_personal_7 : "Problem Analysis",
    skills_personal_8 : "Continuous learning",
    skills_team: "Team",
    skills_team_1: "Team Work Scrum",
    skills_team_2: "Agile Methodologies",
    skills_team_3: "Propose Ideas",
    skills_team_4: "Time Management",
    skills_team_5: "Effective Communication",
    skills_team_6: "Active Listening",
    skills_team_7: "Train",
    skills_team_8: "Adaptability and Flexibility",
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
