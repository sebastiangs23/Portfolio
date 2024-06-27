import React from "react";
import SliderJob from "./sliderJob";
import { sliderIbc } from "../../../assets/imagenes-trabajo/imagenes";

export default function JobDetailsIbc() {
  return (
    <div className="container-job-details">
      <h2 className="section__title">IBC - Institute</h2>
      <div className="container-title-slider">
        <SliderJob slides={sliderIbc} type="web" />
      </div>

      <div className="content_conteiner">
        <div className="content">
          <p>
            - Plataforma de idiomas certificada con{" "}
            <a
              href="https://tracktest.eu/"
              target="_blank"
              className="redirect-link"
            >
              TrackTest
            </a>
            , enfocada en los niveles básico (A1 - A2) e intermedio (B1 - B2),
            con métodos dinámicos de aprendizaje como prácticas de vocabulario,
            gramática, pronunciación, simuladores de exámenes y conversaciones
            interactivas que se desbloquean a medida que el estudiante aprueba
            las lecciones.
          </p>

          <p>
            - Cada nivel cuenta con múltiples lecciones, y dentro de cada
            lección el estudiante adquiere conocimientos que le permiten seguir
            avanzando. Además, el sistema recopila datos de las evaluaciones
            para generar gráficos y métricas que identifican los puntos fuertes
            y débiles de los estudiantes.
          </p>
          <p>
            - Uno de mis roles fue rediseñar la base de datos para hacerla más
            escalable y capaz de soportar la enseñanza de más idiomas en el
            futuro. Además, migré el sistema de evaluación para utilizar una API
            integrada con el reconocedor de voz de inteligencia artificial de
            Azure Speech, que es más preciso al evaluar al estudiante en
            aspectos como pronunciación, prosodia, fluidez y oraciones
            completas, entre otros.
          </p>
        </div>
      </div>
    </div>
  );
}
