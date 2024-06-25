import React from "react";
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
  return (
    <div className="container-tecnologies" id="tecnologias">
      <h2 className="section__title">Tecnologías</h2>
      <div className="flex-container">
        {/* FRONT */}
        <div className="seccion">
          <h3 className="subtitulo">Front-end</h3>
          <div className="solo">
            <img src={react} className="imagen" id="reactjs" />
          </div>
          <div className="solo">
            <img src={redux} className="imagen" />
          </div>
          <div className="solo">
            <img src={reactNative} className="image-big" />
          </div>
          <div className="solo">
            <img src={figma} className="image-big" />
          </div>
          <div className="solo">
            <img src={vue} className="image-big" />
          </div>
        </div>

        {/* SERVER */}
        <div className="seccion">
          <h3 className="subtitulo">Back-end</h3>
          <div className="solo">
            <img src={typescript} className="image-big" />
          </div>
          <div className="solo">
            <img src={node} className="imagen" id="nodeimg" />
          </div>
          <div className="solo">
            <img src={express} className="imagen" id="express" />
          </div>
        </div>

        {/* DATABASE */}
        <div className="seccion">
          <h3 className="subtitulo">Base de datos</h3>
          <div className="solo">
            <img src={mysql} className="imagen" />
          </div>
          <div className="solo">
            <img src={postgres} className="image-big" />
          </div>
          <div className="solo">
            <img src={mongodb} className="image-mongo" />
          </div>
        </div>

        {/* ORM */}
        <div className="seccion">
          <h3 className="subtitulo">ORM</h3>
          <div className="solo">
            <img src={sequelize} className="image-big" />
          </div>
          <div className="solo">
            <img src={mongoose} className="imagen" />
          </div>
        </div>

        {/* CLOUD, HOSTING & VERSION CONTROL */}
        <div className="seccion">
          <h3 className="subtitulo">Cloud, hosting & Version Control</h3>
          <div className="solo">
            <img src={aws} className="image-big" />
          </div>
          <div className="solo">
            <img src={github} className="image-big" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Tecnologies;
