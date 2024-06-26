import React from "react";
import SliderJob from "./sliderJob";
import { sliderInteligenio } from "../../../assets/imagenes-trabajo/imagenes";

export default function JobDetailsinte() {
  return (
    <div>
      <h2 className="section__title">Inteligenio</h2>
      <div className="container-title-slider">
        <SliderJob slides={sliderInteligenio} type="web" />
      </div>

      <div className="content_conteiner">
        <div className="content">
          <p>
            - Una plataforma educativa enfocada en facilitar y mejorar el
            aprendizaje de los estudiantes, simplificar la enseñanza para los
            docentes, y monitorear el desempeño de todos los estudiantes, así
            como el de los docentes, coordinadores y directores de la
            institución.
          </p>

          <p>
            - El core del producto es gestionar todo el funcionamiento de una
            institución educativa a nivel de plataforma. Las funcionalidades
            varían según los perfiles. Inicialmente, la configuración del
            colegio la realizará el 'Webmaster', quien representa la máxima
            autoridad de la institución y puede crear perfiles como Director,
            coordinador, docentes, estudiantes, etc. Por otro lado, el docente
            puede crear evaluaciones y monitorear el desempeño de los
            estudiantes. El estudiante, a su vez, puede revisar las clases,
            resolver evaluaciones y visualizar su libreta de notas, entre otras
            cosas.
          </p>

          <p>
            - Después de 1 año desarrollando la plataforma, se empezó a
            comercializar, lo cual para mi es una gran satisfacción , ya que es
            un producto al cual mis compañeros y yo le pusimos bastante cariño y
            esfuerzo para de cierta manera aportar con la educación del Perú.
          </p>
        </div>
      </div>
    </div>
  );
}
