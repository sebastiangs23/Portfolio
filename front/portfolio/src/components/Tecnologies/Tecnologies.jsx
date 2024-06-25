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
        <div className="seccion">
          <h3 className="subtitulo">Front-end</h3>
          <div className="solo">
            <img src={react} alt="" className="imagen" id="reactjs" />
          </div>
          <div className="solo">
            <img src={redux} alt="" className="imagen" />
          </div>
          <div className="solo">
            <img src={reactNative} alt="" className="imagen" />
          </div>
          <div className="solo">
            <img src={figma} alt="" />
          </div>
          <div className="solo">
            <img src={vue} alt="" />
          </div>
        </div>
        <div className="seccion">
          <h3 className="subtitulo">Server</h3>
          <div className="solo">
            <img src={node} alt="" className="imagen" id="nodeimg" />
          </div>
          <div className="solo">
            <img src={express} alt="" className="imagen" id="express" />
          </div>
        </div>
        <div className="seccion">
          <h3 className="subtitulo">Database</h3>
          <div className="solo">
            <img src={mysql} alt="" className="imagen" />
          </div>
          <div className="solo">
            <img src={postgres} alt="" className="imagen" />
          </div>
          <div className="solo">
            <img src={mongodb} alt="" className="imagen" />
          </div>
        </div>
        <div className="seccion">
          <h3 className="subtitulo">ORM</h3>
          <div className="solo">
            <img src={sequelize} alt="" className="imagen" />
          </div>
          <div className="solo">
            <img src={mongoose} alt="" className="imagen" />
          </div>
        </div>

        <div className="seccion">
          <h3 className="subtitulo">Cloud, hosting & Version Control</h3>
          <div className="solo">
            <img src={aws} alt="" className="imagen" />
          </div>
          <div className="solo">
            <img src={github} alt="" className="imagen" />
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Tecnologies;
