import React, { useState } from 'react'
import "./Education.css"

function Education() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <section className='qualification__education section' id='education' >
            <h2 className='section__title' >Background</h2>
            <span className='section__subtitle' >My personal Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ?
                        "qualification__button qualification__active button--flex" :
                        "qualification__button button--flex"}
                        onClick={() => toggleTab(1)} >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Educación
                    </div>

                    <div className={toggleState === 2 ?
                        "qualification__button qualification__active button--flex" :
                        "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}>
                        <i class="uil uil-smile qualification__icon"></i>
                        Aptitudes
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ?
                        "qualification__content qualification__content-active" :
                        "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Desarrollador Full Stack</h3>
                                <span className="qualification__subtitle">
                                    Henry </span>
                                <br />
                                <span className="qualification__subtitle">
                                    Culminado </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 Julio -
                                    2022 Diciembre
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Negocios Internacionales</h3>
                                <span className="qualification__subtitle">
                                    Zegel Ipae </span>
                                <br />
                                <span className="qualification__subtitle">
                                    (1/3) años culminados. </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2021 Marzo -
                                    2022 Marzo
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Administraciòn y Negocios Int.</h3>
                                <span className="qualification__subtitle">
                                    Universidad Peruana de Ciencias (UPC)</span>
                                <br />
                                <span className="qualification__subtitle">
                                    (2/4) años culminados. </span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2019 Agosto -
                                    2021 Febrero
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                    </div>

                    <div className={toggleState === 2 ?
                        "qualification__content qualification__content-active" :
                        "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    <i class="uil uil-user"></i>
                                    Personal
                                </h3>
                                {/* <div className="qualification__calender">
                                </div> */}
                                
                                <br />
                                Organizado
                                <br />
                                Responsable
                                <br />
                                Resiliencia
                                <br />
                                Autodidacta
                                <br />
                                Creativo
                                <br />
                                Comprensivo
                                <br />
                                Analisis de Problemas
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">
                                    <i class="uil uil-users-alt"></i>
                                    Equipo
                                </h3>

                                Empatía
                                <br />
                                Cooperativo
                                <br />
                                GitFlow
                                <br />
                                Metodología Scrum
                                <br />
                                Resolución de Problemas
                                <br />
                                Escucha Activa
                                <br />
                                Flexibilidad
                                
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Education