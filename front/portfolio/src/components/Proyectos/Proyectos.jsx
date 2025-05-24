import React, { useState } from "react";
import { ImageSlider } from "./ImageSlider";
import {
  SliderData,
  SliderManga,
  SliderChatTutor,
} from "../../assets/imagenesproyectos/imagenes";
import "./slider.css";

/*____________
|   PHONE   */
import phone from "../../assets/projects/phone.svg";

/*____________
|   WEB   */
import web from "../../assets/projects/web.svg";
import { useLanguage } from "../Language/Language";

function Proyectos() {
  const { sentences } = useLanguage();
  const [type, setType] = useState("web");

  const toggleTypeButton = () => {
    setType((prevType) => (prevType === "web" ? "phone" : "web"));
  };

  return (
    <section className="section__projects" id="projectos">
      <h2 className="section__title">{sentences._projects}</h2>

      {/* RADIO BUTTOM */}
      <div className="flex justify-center items-center mt-5 ">
        <span
          className={`transition-opacity duration-200 ease-in-out opacity-100 mr-2`}
        >
          WEB
        </span>

        <div
          className="flex items-center cursor-pointer"
          onClick={toggleTypeButton}
        >
          <div
            className={`relative w-24 h-12 flex items-center bg-gray-300 rounded-full p-1 transition-all duration-300 ease-in-out ${
              type === "phone" ? "justify-end" : "justify-start"
            }`}
          >
            <img
              src={type === "web" ? web : phone}
              className="w-[30px] h-[30px] rounded-full bg-white shadow-md"
              alt={type}
            />
          </div>
        </div>

        <span
          className={`transition-opacity duration-200 ease-in-out opacity-100 ml-2`}
        >
          MOBILE
        </span>
      </div>

      {type == "web" ? (
        <div className="contenedor-proyectos">
          <div className="contenedor-individual">
            <div className="subtitle__project">
              <h3>Trust Exchange</h3>
            </div>
            <div className="contenedor-cadauno">
              <ImageSlider slides={SliderData} type="web" />
            </div>
          </div>

          <div className="contenedor-individual">
            <div className="subtitle__project">
              {" "}
              <h3>E-commerce</h3>
            </div>
            <div className="contenedor-cadauno">
              <ImageSlider slides={SliderManga} type="web" />
            </div>
          </div>
        </div>
      ) : (
        <div className="contenedor-proyectos">
          <div className="contenedor-individual">
            <div className="subtitle__project">
              <h3>Chat Tutor Ingles AI - Mammoth</h3>
            </div>
            <div className="contenedor-cadauno">
              <div>
                <ImageSlider slides={SliderChatTutor} type="phone" />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Proyectos;
