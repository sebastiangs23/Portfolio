/*_____________
|   CLIENT   */
import react from "./technologies-black/client/reactjsb.png";
import LitElement from "./technologies-black/client/lit-element.png";
import reactNative from "./technologies-black/client/reactnativebb.png";
import vue from "./technologies-black/client/vue-js.png";
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



export const technologiesArray = {
  client: [
    //TODO: Add Nuxt
    {
      name: "React",
      image: react,
      className: "reactjs",
    },
    {
      name: "React Native",
      image: reactNative,
      className: "image-big",
    },
    {
      name: "Vue.js",
      image: vue,
      className: "image-big",
    },
    {
      name: "Redux",
      image: redux,
      className: "",
    },
    {
      name: "Lit Element",
      image: LitElement,
      className: "image-big",
    },
    {
      name: "Figma",
      image: figma,
      className: "image-big",
    },
  ],
  backend:[
    {
        name: "Typescript",
        image: typeScript,
        class: "image-big"
    },
    {
        name: "Node",
        image: node,
        class: "nodeimg"
    },
    {
        name: "Express",
        image: express,
        class: "express"
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
        class: "image-big"
    },
    {
        name: "Mongo Db",
        image: mongoDb,
        class: "image-mongo"
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
        class: "image-big"
    }
  ],
  cloud: [
    {
        name: "Aws",
        image: aws,
        class: "image-big"
    },
    {
        name: "Github",
        image: github,
        class: "image-big"
    }
    //VERCEL
  ]
  //TODO: Add AI technologies
};
