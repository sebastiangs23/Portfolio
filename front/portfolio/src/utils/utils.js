export const socialMedia = [
  {
    name: "Email",
    href: "mailto:sebastiangs2309@gmail.com",
    iconClass: "uil-social-icons uil-envelope",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/sebastiangomezsalinas/",
    iconClass: "uil-social-icons uil-linkedin",
  },
  {
    name: "GitHub",
    href: "https://github.com/sebastiangs23",
    iconClass: "uil-social-icons uil-github",
  },
];

export const sentences = {
  spanish: {
    navBar: [
      {
        name: "Inicio",
        href: "#home",
      },
      {
        name: "Desarrollo",
        href: "#background",
      },
      {
        name: "Proyectos",
        href: "#projects",
      },
      {
        name: "Tecnologías",
        href: "#technologies",
      },
    ],
    start: "Inicio",
    home: {
      start: "Inicio",
      background_: "Desarrollo",
      projects: "Proyectos",
      technologies: "Tecnologías",
      position: "Desarrollador de Software",
      description_position:
        "Me gusta llevar las ideas de la mente al software y crear nuevas aplicaciones, herramientas y tecnologías con el objetivo ofrecer soluciones a traves de ellas.",
      curriculum: "Currículum Español",
      links: {
        curriculum_link:
          "https://docs.google.com/document/d/189xJH_zdEJyKH3OHbvBwqJMLCChYMZ_73_zD72AmdSU/edit?tab=t.0",
        certifications: "Certificados",
        certifications_link:
          "https://drive.google.com/file/d/155D_WDM7ZLKUH_8rlangKlkF0TFTl3un/view?usp=sharing",
      },
    },
    _background: "Formación",
    background: {
      background_subtitle: "Mi desarrollo",
      work_experience: "Experiencia Laboral",
      work_experience_items: [
        {
          id: "Freelance",
          company: "Freelance",
          position: "Full Stack Developer",
          date: "2025 Octubre - Actualidad",
          descriptions: {
            general: [
              "Desarrollé un panel de administración con módulos para gestión de usuarios, monitoreo de llamadas a la API, comunicación mediante WebSockets y gestión de tiendas, creando componentes de UI reutilizables y layouts escalables,",
              "implementando actualizaciones en tiempo real con WebSockets, integrando servicios backend con recursos en la nube de AWS, y manteniendo la calidad del código mediante documentación, refactorización y buenas prácticas de código limpio.",
            ],
            details: [
              "Construí y mantuve un dashboard escalable de Panel de Administración, incluyendo gestión de usuarios, monitoreo de llamadas a la API, comunicación en tiempo real basada en WebSockets, funcionalidades de gestión del store, componentes reutilizables de UI, integraciones con servicios backend, despliegue de recursos en la nube de AWS, documentación técnica, refactorización y buenas prácticas de código limpio.",
            ],
          },
          route: "/experience/freelance",
        },
        {
          id: "neoris",
          company: "EPAM Neoris",
          position: "Desarrollador Frontend Semi Senior",
          date: "2024 Diciembre - 2025 Septiembre",
          descriptions: {
            general: [
              "Diseñé Web Components reutilizables y totalmente responsivos para el banco BBVA, utilizando un framework interno (Cells) y principios de clean code. Cada componente fue testeado, documentado e incluía casos de uso detallados para asegurar su funcionalidad y mantenibilidad.",
              "Además, implementé funcionalidades avanzadas, refactoricé código y mantuve altos estándares de calidad aplicando buenas prácticas y la convención BEM.",
            ],
            details: [
              "Desarrollé Web Components reutilizables y accesibles, así como vistas de página completas, utilizando las librerías internas y el framework de BBVA.",
              "Escribí pruebas unitarias para la lógica, el renderizado y la accesibilidad de los componentes mediante snapshots con @open-wc/testing, y documenté cada componente con casos de uso detallados.",
              "Realicé revisiones de código semanales, refactoricé código legado e implementé nuevas funcionalidades siguiendo buenas prácticas de clean code y la metodología BEM.",
            ],
          },
          route: "/experience/epam-neoris",
        },
        {
          id: "inlearning",
          company: "Inlearning - Intercorp",
          position: "Desarrollador Frontend",
          date: "2024 Marzo - 2024 Diciembre",
          descriptions: {
            general: [
              "Diseñé y refactoricé componentes y vistas jerárquicas completamente responsivas, con hasta 5 niveles de interconexión mediante props, emits, inject, provide y refs. Migré más de 20 vistas a TypeScript aplicando buenas prácticas con interfaces, tipos, operadores ternarios, type guards y coalescencia nula.",
              "Además, desarrollé más de 50 plantillas de correo electrónico automatizadas, enviadas cronológicamente a todos los usuarios.",
            ],
            details: [
              "Creé y refactoricé componentes jerárquicos y vistas con hasta cinco niveles de interconexión utilizando props, emits, inject, provide y refs, garantizando una responsividad completa en distintos dispositivos.",
              "Migré más de 20 vistas a TypeScript mediante el uso de interfaces, tipos personalizados, operadores ternarios, type guards, nullish coalescing y otras buenas prácticas para mejorar la mantenibilidad y la seguridad de tipos.",
              "Desarrollé más de 50 plantillas de correos automatizados que se activaban cronológicamente y se enviaban a todos los usuarios.",
            ],
          },
          route: "/experience/inlearning",
        },
        {
          id: "dazlabs",
          company: "Dazlabs",
          position: "Desarrollador Backend",
          date: "2024 Agosto - 2025 Marzo",
          descriptions: {
            general: [
              "Desarrollé múltiples servicios backend para diferentes productos (viajes, belleza y automatización interna), diseñando colecciones en MongoDB y entregando endpoints RESTful probados y documentados con Swagger;",
              "además, di una capacitación técnica sobre APIs de inteligencia artificial a más de 110 personas.",
            ],
          },
          route: null,
        },
        {
          id: "ibc",
          company: "IBC Institute - Ceoline",
          position: "Desarrollador de Software",
          date: "2023 Marzo - 2024 Marzo",
          descriptions: {
            general: [
              "Desarrollé un servicio utilizando Azure Speech AI que permite al cliente entablar una conversación con el sistema. Todos los datos se transforman en métricas y estadísticas, para ser representados en gráficos en el panel de administración.",
              "Además, migré el proyecto de React 15 a React 18 y apliqué arquitectura hexagonal en el front.",
            ],
            details: [
              "Plataforma de idiomas certificada con TrackTest, enfocada en los niveles básico (A1 - A2) e intermedio (B1 - B2), con métodos dinámicos de aprendizaje como prácticas de vocabulario, gramática, pronunciación, simuladores de exámenes y conversaciones interactivas que se desbloquean a medida que el estudiante aprueba las lecciones.",
              "Cada nivel cuenta con múltiples lecciones, y dentro de cada lección el estudiante adquiere conocimientos que le permiten seguir avanzando. Además, el sistema recopila datos de las evaluaciones para generar gráficos y métricas que identifican los puntos fuertes y débiles de los estudiantes.",
              "Uno de mis roles fue rediseñar la base de datos para hacerla más escalable y capaz de soportar la enseñanza de más idiomas en el futuro. Además, migré el sistema de evaluación para utilizar una API integrada con el reconocedor de voz de inteligencia artificial de Azure Speech, que es más preciso al evaluar al estudiante en aspectos como pronunciación, prosodia, fluidez y oraciones completas, entre otros.",
            ],
          },
          route: "/experience/ibc-institute",
        },
        {
          id: "inteligenio",
          company: "Inteligenio - Ceoline",
          position: "Desarrollador Backend & Administrador de base de datos.",
          date: "2022 Diciembre - 2024 Marzo",
          descriptions: {
            general: [
              "Trabajé de la mano con el equipo de QA, desarrolladores y el product owner para rediseñar la arquitectura de la base de datos, aplicando reglas de negocio, constrains, uniques y relaciones para una plataforma educativa.",
              "Además, desarrollé los roles y permisos administrativos, considerando el rendimiento y la optimización.",
            ],
            details: [
              "Una plataforma educativa enfocada en facilitar y mejorar el aprendizaje de los estudiantes, simplificar la enseñanza para los docentes, y monitorear el desempeño de todos los estudiantes, así como el de los docentes, coordinadores y directores de la institución.",
              "El core del producto es gestionar todo el funcionamiento de una institución educativa a nivel de plataforma. Las funcionalidades varían según los perfiles. Inicialmente, la configuración del colegio la realizará el 'Webmaster', quien representa la máxima autoridad de la institución y puede crear perfiles como Director, coordinador, docentes, estudiantes, etc. Por otro lado, el docente puede crear evaluaciones y monitorear el desempeño de los estudiantes. El estudiante, a su vez, puede revisar las clases, resolver evaluaciones y visualizar su libreta de notas, entre otras cosas.",
              "Después de 1 año desarrollando la plataforma, se empezó a comercializar, lo cual para mi es una gran satisfacción , ya que es un producto al cual mis compañeros y yo le pusimos bastante cariño y esfuerzo para de cierta manera aportar con la educación del Perú.",
            ],
          },
          route: "/experience/inteligenio",
        },
      ],
      see_more: "Ver más",
      education: "Mi educación",
      educationItems: [
        {
          carrer: "Desarrollador Full Stack",
          place: "Henry",
          degree: "Título de Técnico",
          status: "✓ Culminado",
          date: "2022 Junio - 2022 Diciembre",
        },
        {
          carrer: "Negocios Internacionales",
          place: "Zegel Ipae",
          degree: "Título de Bachiller",
          status: "(1/3) años culminados.",
          date: "2021 Marzo - 2022 Marzo",
        },
        {
          carrer: "Administración y Negocios Int.",
          degree: "Título de Bachiller",
          place: "Universidad Privada de Ciencias Aplicadas (UPC)",
          status: "(2/4) años culminados.",
          date: "2019 Agosto - 2021 Febrero",
        },
      ],
      certifications: "Certificaciones",
      certificationItems: [
        {
          course: "React Frontend Developer",
          date: "Abril 2026",
          issuedBy: "HackerRank",
          url: "https://www.hackerrank.com/certificates/iframe/a71e0148cd08",
        },
        {
          course: "AWS Cloud Practitioner",
          date: "Enero 2026",
          issuedBy: "Udemy",
          url: "https://udemy-certificate.s3.amazonaws.com/image/UC-34b5837e-dcda-4358-bda6-43112b274271.jpg",
        },
        {
          course: "UX Content",
          date: "Mayo 2025",
          issuedBy: "EPAM Neoris",
          url: "https://drive.google.com/file/d/1PhuBy1zcPhE_At_DAKqJkoZ1NRZd5_j_/view?usp=sharing",
        },
        {
          course: "Técnicas y herramientas para el trabajo en equipo",
          date: "Mayo 2025",
          issuedBy: "EPAM Neoris",
          url: "https://drive.google.com/file/d/1PU5GeF_ODWXzbnuXUiUXUxL0nqD7jwlP/view?usp=sharing",
        },
        {
          course:
            "Sistema de gestión de seguridad y privacidad de la información",
          date: "Abril 2025",
          issuedBy: "EPAM Neoris",
          url: "",
        },
        {
          course: "SQL Avanzado",
          date: "November 2024",
          issuedBy: "Intercorp",
          url: "https://wallet.xertify.co/certificates/B13917DBC002",
        },
        {
          course: "Vue Components and Composition",
          date: "Abril 2023",
          issuedBy: "Platzi",
          url: "https://drive.google.com/file/d/1UJpbVlHkyMAEPCxuVAVsuW1mo5AOWkeV/view?usp=sharing",
        },
        {
          course: "Vue Básico",
          date: "Julio 2023",
          issuedBy: "Platzi",
          url: "https://drive.google.com/file/d/1amwcdsXjCr79bcxK4FNfb79vSDRpnP4m/view?usp=sharing",
        },
        {
          course: "Desarrollo de Aplicaciones Móviles",
          date: "Mayo 2020",
          issuedBy: "Google Activate",
          url: "https://drive.google.com/file/d/1PT_rsigrFHtWQ4dgqtKVZ1eKuZM6Ufyv/view?usp=sharing",
        },
      ],
      certificationLink: "Ver el certificado",
      skill: "Aptitudes",
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
      modal: {
        title: "Sigue desplazándote",
        description:
          "Hay más contenido debajo. Desplázate hacia abajo para seguir explorando.",
        button: "Entendido",
      },
    },
    _projects: "Proyectos",
    _redirect: "Ver más",
    project_items: [
      {
        id: 0,
        title: "Noon App Clone",
        description: "Desarrollé un frontend ecommerce mobile-first inspirado en Noon utilizando Next.js y React. Me enfoqué en layouts responsivos, una interfaz pixel-perfect, jerarquía visual clara y navegación amigable para el usuario. Creé componentes reutilizables y una estructura frontend escalable para facilitar el mantenimiento y futuras mejoras.",
        url: "https://noon-clone-next.vercel.app/"
      },
      {
        id: 1,
        title: "Proyecto Demo Frontend",
        description:
          "Un proyecto demo frontend que muestra funcionalidades reales como autenticación, CRUD de usuarios, permisos, componentes reutilizables, integración con API, gestión de estado, transmisión WebSocket y AWS S3.",
        url: "https://frontend-review-sgs.vercel.app/"
      },
      {
        id: 2,
        title: "Trust Exchange",
        description:
          "Una simulación de exchange de criptomonedas enfocada en préstamos, planes de staking y una introducción a las finanzas descentralizadas. Incluye listado de las 100 principales criptomonedas, búsqueda en tiempo real, noticias cripto, activos en tendencia, componentes personalizados en Figma y gráficos financieros de líneas.",
        url: "https://trust-exchange-dy7n5mzm6-sebastiangs23.vercel.app/"
      },
      {
        id: 3,
        title: "Lit Elemenet E-commerce",
        description: "Desarrollo de un e-commerce en JavaScript vanilla en 2 días como evaluación posterior a una capacitación." ,
        url: null
      },
      {
        id: 4,
        title: "Plataforma E-commerce",
        description:
          "Plataforma e-commerce desarrollada con React y Tailwind CSS, con pagos mediante Stripe, promociones, autenticación y perfiles de usuario/administrador.",
        url: "https://mymangastore.netlify.app/"
      },
      {
        id: 5,
        title: "AI Chat Tutor",
        description: "Una aplicación enfocada en la conversación en inglés a través de un chat, donde puedes elegir tu nivel deseado, el tutor que quieras y la conversación de tu elección. Las conversaciones están diseñadas para ayudarte a mejorar tu inglés en escenarios que encontrarás en tu vida cotidiana.",
        url: "https://play.google.com/store/apps/details?id=com.anonymous.EnglishApp"
      }
    ],
    database: "Base de datos",
  },
  english: {
    navBar: [
      {
        name: "Start",
        href: "#home",
      },
      {
        name: "Background",
        href: "#background",
      },
      {
        name: "Projects",
        href: "#projects",
      },
      {
        name: "Technologies",
        href: "#technologies",
      },
    ],
    start: "Start",
    home: {
      background_: "Background",
      projects: "Projects",
      technologies: "Technologies",
      position: "Software Developer",
      description_position:
        "I enjoy taking ideas from the mind to software and creating new applications, tools, and technologies with the aim of providing solutions through them.",
      curriculum: "Curriculum English",
      links: {
        curriculum_link:
          "https://docs.google.com/document/d/1I0UgdRaRptBlzsb_EVH55I9azX-1m4Bo/edit?usp=sharing&ouid=115427612197801979579&rtpof=true&sd=true",
        certifications: "Certifications",
        certifications_link:
          "https://drive.google.com/file/d/155D_WDM7ZLKUH_8rlangKlkF0TFTl3un/view?usp=sharing",
      },
    },
    _background: "Background",
    background: {
      background_subtitle: "My development",
      work_experience: "Work Experience",
      work_experience_items: [
        {
          id: "freelance",
          company: "Freelance",
          position: "Full Stack Developer",
          date: "2025 October - Present",
          descriptions: {
            general: [
              "Built an admin panel with modules for user management, API call monitoring, WebSocket communication, and store management, while developing reusable UI components and scalable layouts, implementing real-time updates via WebSockets,",
              "integrating backend services with AWS cloud resources, and maintaining code quality through documentation, refactoring, and clean code practices.",
            ],
            details: [
              "Built and maintained a scalable Admin Panel dashboard, including user management, API call monitoring, WebSocket-based real-time communication, store management features, reusable UI components, backend service integrations, AWS cloud resource deployment, technical documentation, refactoring, and clean code practices.",
            ],
          },
          route: "/experience/freelance",
        },
        {
          id: "neoris",
          company: "EPAM Neoris",
          position: "Frontend Developer Semi Senior",
          date: "2024 December - 2025 September",
          descriptions: {
            general: [
              "Designed reusable and fully responsive Web Components for BBVA Bank using an internal framework (Cells) and clean code principles. Each component was thoroughly tested, documented, and included detailed use cases to ensure functionality and maintainability.",
              "Additionally, I implemented advanced features, refactored code, and maintained high-quality standards by applying best practices and the BEM convention.",
            ],
            details: [
              "Developed reusable, accessible Web Components and full-page views using BBVA’s internal libraries and framework.",
              "Wrote unit tests for component logic, rendering, and accessibility using snapshots with @open-wc/testing, and documented each component with detailed use cases.",
              "Conducted weekly code reviews, refactored legacy code, and implemented new features following clean code practices and BEM methodology.",
            ],
          },
          route: "/experience/epam-neoris",
        },
        {
          id: "inlearning",
          company: "Inlearning - Intercorp",
          position: "Frontend Developer",
          date: "2024 March - 2024 December",
          descriptions: {
            general: [
              "Created and refactored hierarchical, fully responsive components and views with up to 5 levels of interconnection using props, emits, inject, provide, and refs. Migrated 20+ views to TypeScript using interfaces, types, ternary operators, type guards, and nullish coalescing.",
              "Developed 50+ automated email templates triggered chronologically for all users.",
            ],
            details: [
              "Created and refactored hierarchical components and views with up to five levels of interconnection using props, emits, inject, provide, and refs, ensuring full responsiveness across devices.",
              "Migrated more than 20 views to TypeScript using interfaces, custom types, ternary operators, type guards, nullish coalescing, and other best practices to improve maintainability and type safety.",
              "Developed over 50 automated email templates that were triggered chronologically and sent to all users.",
            ],
          },
          route: "/experience/inlearning",
        },
        {
          id: "dazlabs",
          company: "Dazlabs",
          position: "Backend Developer",
          date: "2024 August - 2025 March",
          descriptions: {
            general: [
              "Developed multiple backend services for different products (travel, beauty, and internal automation), designing MongoDB collections and delivering tested and documented RESTful endpoints using Swagger.",
              "Also led a technical training session about AI APIs for 110+ people.",
            ],
          },
          route: null,
        },
        {
          id: "ibc",
          company: "IBC Institute - Ceoline",
          position: "Software Developer",
          date: "2023 March - 2024 March",
          descriptions: {
            general: [
              "Developed a service using Azure Speech AI that allows users to have a conversation with the system. All data is transformed into metrics and statistics, then rendered in charts in the admin dashboard.",
              "Also migrated the project from React 15 to React 18 and applied hexagonal architecture in the frontend.",
            ],
            details: [
              "Certified language platform with TrackTest, focused on basic (A1 - A2) and intermediate (B1 - B2) levels, with dynamic learning methods such as vocabulary practice, grammar, pronunciation, exam simulators, and interactive conversations that unlock as the student passes the lessons.",
              "Each level has multiple lessons, and within each lesson, the student acquires knowledge that allows them to keep advancing. Additionally, the system collects data from the assessments to generate graphs and metrics that identify the students' strengths and weaknesses.",
              "One of my roles was to redesign the database to make it more scalable and capable of supporting the teaching of more languages in the future. Additionally, I migrated the assessment system to use an API integrated with Azure Speech's AI speech recognizer, which is more accurate in evaluating the student on aspects such as pronunciation, prosody, fluency, and complete sentences, among others.",
            ],
          },
          route: "/experience/ibc-institute",
        },
        {
          id: "inteligenio",
          company: "Inteligenio - Ceoline",
          position: "Backend Developer & Database Administrator",
          date: "2022 December - 2024 March",
          descriptions: {
            general: [
              "Worked closely with QA, developers, and the Product Owner to redesign the database architecture, applying business rules, constraints, unique keys, and relationships for an educational platform.",
              "Also developed administrative roles and permissions, focusing on performance and optimization.",
            ],
            details: [
              "An educational platform focused on facilitating and enhancing student learning, simplifying teaching for educators, and monitoring the performance of all students, as well as that of teachers, coordinators, and institution directors.",
              "The core of the product is to manage the entire operation of an educational institution at the platform level. The functionalities vary according to the profiles. Initially, the configuration of the school will be carried out by the 'Webmaster,' who represents the highest authority of the institution and can create profiles such as Director, Coordinator, Teachers, Students, etc. On the other hand, the Teacher can create assessments and monitor student performance. The Student, in turn, can review classes, complete assessments, and view their grade book, among other things.",
              "After 1 year of developing the platform, it started being commercialized, which is a great satisfaction for me, as it is a product to which my colleagues and I put a lot of love and effort to contribute to the education of Peru in some way.",
            ],
          },
          route: "/experience/inteligenio",
        },
      ],
      see_more: "See more",
      education: "Education",
      educationItems: [
        {
          carrer: "Full Stack Developer",
          place: "Henry",
          degree: "Associate's Degree",
          status: "✓ Culminated",
          date: "2022 June - 2022 December",
        },
        {
          carrer: "International Business",
          place: "Zegel Ipae",
          degree: "Bachelor's Degree",
          status: "(1/3) years completed",
          date: "2021 March - 2022 March",
        },
        {
          carrer: "Administration & Int. Business",
          degree: "Bachelor's Degree",
          place: "Universidad Privada de Ciencias Aplicadas (UPC)",
          status: "(2/4) years completed.",
          date: "2019 August - 2021 February",
        },
      ],
      certifications: "Certifications",
      certificationItems: [
        {
          course: "React Frontend Developer",
          date: "January 2026",
          issuedBy: "HackerRank",
          url: "https://www.hackerrank.com/certificates/iframe/a71e0148cd08",
        },
        {
          course: "AWS Cloud Practitioner",
          date: "February 2026",
          issuedBy: "Udemy",
          url: "https://udemy-certificate.s3.amazonaws.com/image/UC-34b5837e-dcda-4358-bda6-43112b274271.jpg",
        },
        {
          course: "UX Content",
          date: "May 2025",
          issuedBy: "EPAM Neoris",
          url: "https://drive.google.com/file/d/1PhuBy1zcPhE_At_DAKqJkoZ1NRZd5_j_/view?usp=sharing",
        },
        {
          course: "Information Security and Privacy Management System",
          date: "Abril 2025",
          issuedBy: "EPAM Neoris",
          url: "https://drive.google.com/file/d/1PU5GeF_ODWXzbnuXUiUXUxL0nqD7jwlP/view?usp=sharing",
        },
        {
          course: "Teamwork techniques and tools",
          date: "May 2025",
          issuedBy: "EPAM Neoris",
          url: "https://drive.google.com/file/d/1-EijFJo0wD0_2c1lnM0HMy9Id03Q3FBi/view?usp=sharing",
        },
        {
          course: "SQL Advanced",
          date: "November 2024",
          issuedBy: "Intercorp",
          url: "https://wallet.xertify.co/certificates/B13917DBC002",
        },
        {
          course: "Vue Components and Composition",
          date: "April 2023",
          issuedBy: "Platzi",
          url: "https://drive.google.com/file/d/1UJpbVlHkyMAEPCxuVAVsuW1mo5AOWkeV/view?usp=sharing",
        },
        {
          course: "Vue Basic",
          date: "July 2023",
          issuedBy: "Platzi",
          url: "https://drive.google.com/file/d/1amwcdsXjCr79bcxK4FNfb79vSDRpnP4m/view?usp=sharing",
        },
        {
          course: "Mobile App Development",
          date: "May 2020",
          issuedBy: "Google Activate",
          url: "https://drive.google.com/file/d/1PT_rsigrFHtWQ4dgqtKVZ1eKuZM6Ufyv/view?usp=sharing",
        },
      ],
      certificationLink: "View the certificate",
      skill: "Skills",
      skills_personal: "Personal",
      skills_personal_all: [
        "Self Motivation",
        "Self-taught",
        "Professional Ethics",
        "Empathy and Solidarity",
        "Responsible",
        "Resilience",
        "Problem Analysis",
        "Continuous learning",
      ],
      skills_team: "Team",
      skills_team_all: [
        "Team Work Scrum",
        "Agile Methodologies",
        "Propose Ideas",
        "Time Management",
        "Effective Communication",
        "Active Listening",
        "Train",
        "Adaptability and Flexibility",
      ],
      modal: {
        title: "Keep scrolling",
        description:
          "There is more content below. Scroll down to continue exploring.",
        button: "Got it",
      },
    },
    _projects: "Projects",
    _redirect: "See more",
    project_items: [
        {
        id: 1,
        title: "Noon Clone",
        description: "Built a mobile-first ecommerce frontend inspired by Noon using Next.js and React. Focused on responsive layouts, pixel-perfect UI, clear visual hierarchy, and user-friendly navigation. Created reusable components and a scalable frontend structure to support maintainability and future improvements.",
        url: "https://noon-clone-next.vercel.app/"
      },
      {
        id: 2,
        title: "Frontend Demo Project",
        description:
          "A frontend demo project showcasing real-world features like authentication, user CRUD, permissions, reusable components, API integration, state management, WebSocket streaming, and AWS S3.",
        url: "https://frontend-review-sgs.vercel.app/"
      },
      {
        id: 3,
        title: "Trust Exchange",
        description:
          "A cryptocurrency exchange simulation focused on loans, staking plans, and an introduction to decentralized finance. It includes top 100 crypto listings, real-time search, crypto news, trending assets, custom Figma components, and financial line charts.",
        url: "https://trust-exchange-dy7n5mzm6-sebastiangs23.vercel.app/"
      },
      {
        id: 4,
        title: "Lit Element E-commerce",
        description:
          "Development of a vanilla JavaScript e-commerce project in 2 days as a post-training assessment.",
        url: null
      },
      {
        id: 5,
        title: "E-commerce Platform",
        description:
          "E-commerce platform built with React and Tailwind CSS, featuring Stripe payments, promotions, authentication, and user/admin profiles.",
        url: "https://mymangastore.netlify.app/"
      },
      {
        id: 6,
        title: "AI Chat Tutor",
        description: "An application focused on conversational English through a chat, where you can choose your desired level, the tutor you want, and the conversation of your choice. The conversations are designed to help you improve your English in scenarios you will encounter in your everyday life.",
        url: "https://play.google.com/store/apps/details?id=com.anonymous.EnglishApp"
      }
    ],
    database: "Database",
  },
};
