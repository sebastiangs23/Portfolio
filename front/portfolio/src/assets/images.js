/*_____________
|   CLIENT   */
import react from "./technologies-black/client/reactjsb.png";
import litElement from "./technologies-black/client/lit-element.png";
import reactNative from "./technologies-black/client/reactnativebb.png";
import vue from "./technologies-black/client/vue-js.png";
import nuxt from "./technologies-black/client/nuxt.webp";
import figma from "./technologies-black/client/figmablack.png";
import redux from "./technologies-black/client/reduxb.png";


/*_____________
|   SERVER   */
import typeScript from "./technologies-black/server/typescript.png";
import node from "./technologies-black/server/node.png";
import express from "./technologies-black/server/express.png";

/*_________
|   DB   */
import mySql from "./technologies-black/database/mysql.png";
import postgres from "./technologies-black/database/postgres.png";
import mongoDb from "./technologies-black/database/mongodb.png";

/*__________
|   ORM   */
import mongoose from "./technologies-black/orm/mongoose.png";
import sequelize from "./technologies-black/orm/sequelize.png";

/*_______________________________________
|   CLOUD, HOSTING & VERSION CONTROL   */
import aws from "./technologies-black/cloud/aws.webp";
import github from "./technologies-black/cloud/github.png";

/*_____________________________
|  ARTIFICIAL INTELLIGENCE   */
import chatGpt from "./technologies-black/artificial-intelligence/chat-gpt.webp";
import googleAiStudio from "./technologies-black/artificial-intelligence/google-ai-studio.png";

export const technologiesArray = {
  client: [
    {
      name: "React",
      image: react,
      className: "reactjs",
    },
    {
      name: "React Native",
      image: reactNative,
      className: "md:w-[3.75rem] h-auto inline-block max-w-[5rem] max-h-[5rem]",
    },
    {
      name: "Vue.js",
      image: vue,
      className: "md:w-[3.75rem] h-auto inline-block max-w-[5rem] max-h-[5rem]",
    },
    {
      name: "Nuxt",
      image: nuxt,
      className: "md:w-[3.75rem] h-auto inline-block max-w-[5rem] max-h-[5rem]",
    },
    {
      name: "Redux",
      image: redux,
      className: "",
    },
    {
      name: "Lit Element",
      image: litElement,
      className: "md:w-[3.75rem] h-auto inline-block max-w-[5rem] max-h-[5rem]",
    },
    {
      name: "Figma",
      image: figma,
      className: "md:w-[3.75rem] h-auto inline-block max-w-[5rem] max-h-[5rem]",
    },
  ],
  backend:[
    {
        name: "Typescript",
        image: typeScript,
        class: "md:w-[3.75rem] h-auto inline-block max-w-[5rem] max-h-[5rem]"
    },
    {
        name: "Node",
        image: node,
        class: "w-[6.25rem]"
    },
    {
        name: "Express",
        image: express,
        class: "w-[6.25rem] pt-[0.5rem]"
    }
  ],
  dataBase: [
    {
        name: "My Sql",
        image: mySql,
        class: ""
    },
    {
        name: "Postgres",
        image: postgres,
        class: "md:w-[3.75rem] h-auto inline-block max-w-[5rem] max-h-[5rem]"
    },
    {
        name: "Mongo Db",
        image: mongoDb,
        class: "md:h-auto max-h-[5rem] md:w-[7.5rem] max-w-[5rem] inline-block "
    }
  ],
  orm: [
    {
        name: "Mongoose",
        image: mongoose,
        class: ""
    },
    {
        name: "Sequelize",
        image: sequelize,
        class: "md:w-[3.75rem] h-auto inline-block max-w-[5rem] max-h-[5rem]"
    }
  ],
  cloud: [
    {
        name: "Aws",
        image: aws,
        class: "md:w-[3.75rem] h-auto inline-block max-w-[5rem] max-h-[5rem]"
    },
    {
        name: "Github",
        image: github,
        class: "md:w-[3.75rem] h-auto inline-block max-w-[5rem] max-h-[5rem]"
    }
    //VERCEL
  ],
  artificialIntelligence: [
    {
      name: "ChatGPT",
      image: chatGpt,
      class: "md:w-[3.75rem] h-auto inline-block max-w-[5rem] max-h-[5rem]"
    },
    {
      name: "Google AI Studio",
      image: googleAiStudio,
      class: "md:w-[3.75rem] h-auto inline-block max-w-[5rem] max-h-[5rem]"
    }
  ]
};
