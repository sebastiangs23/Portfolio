import React from "react";
import { useLanguage } from "../Language/Language";
import "./tecnologies.css";

/*_____________
|   CLIENT   */
import react from "../../assets/tecnologies-black/client/reactjsb.png";
import reactNative from "../../assets/tecnologies-black/client/reactnativebb.png";
import vue from "../../assets/tecnologies-black/client/vue-js.png";
import figma from "../../assets/tecnologies-black/client/figmablack.png";
import redux from "../../assets/tecnologies-black/client/reduxb.png";

/*_____________
|   SERVER   */
import typescript from "../../assets/tecnologies-black/server/typescript.png";
import node from "../../assets/tecnologies-black/server/node.png";
import express from "../../assets/tecnologies-black/server/expressssb.png";

/*_________
|   DB   */
import mysql from "../../assets/tecnologies-black/database/mysql.png";
import postgres from "../../assets/tecnologies-black/database/postgres.png";
import mongodb from "../../assets/tecnologies-black/database/mongodb.png";

/*__________
|   ORM   */
import mongoose from "../../assets/tecnologies-black/orm/mongoose.png";
import sequelize from "../../assets/tecnologies-black/orm/sequelize.png";

/*_______________________________________
|   CLOUD, HOSTING & VERSION CONTROL   */
import aws from "../../assets/tecnologies-black/cloud/aws.webp";
import github from "../../assets/tecnologies-black/cloud/github.png";

function Tecnologies() {
  const {sentences} = useLanguage();

  return (
    <div className="container-tecnologies" id="tecnologias">
      <h2 className="section__title">{sentences.technologies} </h2>
      <div className="flex-container">
        {/* FRONT */}
        <div className="seccion">
          <h3 className="subtitulo">Front-end</h3>
          <div className="solo">
            <img src={vue} loading="lazy" className="image-big"  />
          </div>
          <div className="solo">
            <img src={react} loading="lazy" className="imagen reactjs" />
          </div>
          <div className="solo">
            <img src={redux} loading="lazy" className="imagen" />
          </div>
          <div className="solo">
            <img src={reactNative} loading="lazy" className="image-big" />
          </div>
          <div className="solo">
            <img src={figma} loading="lazy" className="image-big" />
          </div>
          
        </div>

        {/* SERVER */}
        <div className="seccion">
          <h3 className="subtitulo">Back-end</h3>
          <div className="solo">
            <img src={typescript} loading="lazy" className="image-big" />
          </div>
          <div className="solo">
            <img src={node} loading="lazy" className="imagen nodeimg" />
          </div>
          <div className="solo">
            <img src={express} loading="lazy" className="imagen express" />
          </div>
        </div>

        {/* DATABASE */}
        <div className="seccion">
          <h3 className="subtitulo">{sentences.database} </h3>
          <div className="solo">
            <img src={mysql} loading="lazy" className="imagen" />
          </div>
          <div className="solo">
            <img src={postgres} loading="lazy" className="image-big" />
          </div>
          <div className="solo">
            <img src={mongodb} loading="lazy" className="image-mongo" />
          </div>
        </div>

        {/* ORM */}
        <div className="seccion">
          <h3 className="subtitulo">ORM</h3>
          <div className="solo">
            <img src={sequelize} loading="lazy" className="image-big" />
          </div>
          <div className="solo">
            <img src={mongoose} loading="lazy" className="imagen" />
          </div>
        </div>

        {/* CLOUD, HOSTING & VERSION CONTROL */}
        <div className="seccion">
          <h3 className="subtitulo">Cloud, hosting & Version Control</h3>
          <div className="solo">
            <img src={aws} loading="lazy" className="image-big" />
          </div>
          <div className="solo">
            <img src={github} loading="lazy" className="image-big" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Tecnologies;
