import React from 'react'
import { ImageSlider } from './ImageSlider';
import { SliderData, SliderManga, SliderPi, SliderBlender } from '../../assets/imagenesproyectos/imagenes';
import "./slider.css";

function Proyectos() {
    return (
        <section className='section__projects' id='projectos'>
            <h2 className='section__title' >Proyectos</h2>

            <div className='contenedor-proyectos'>
                <div className='contenedor-individual'>
                    <div className='subtitle__project'> <h3>Trust Exchange</h3> </div>
                    <div className='contenedor-cadauno'>
                        <ImageSlider slides={SliderData} />
                    </div>
                </div>

                <div className='contenedor-individual'>
                    <div className='subtitle__project'> <h3>Manga E-commerce</h3> </div>
                    <div className='contenedor-cadauno'>
                        <ImageSlider slides={SliderManga} />
                    </div>
                </div>

                <div className='contenedor-individual'>
                    <div className='subtitle__project'> <h3>Proyecto Individual (Henry)</h3> </div>
                    <div className='contenedor-cadauno'>
                        <ImageSlider slides={SliderPi} />
                    </div>
                </div>


                <div className='contenedor-individual'>
                    <div className='subtitle__project'> <h3>Blender Desktop</h3> </div>
                    <div className='contenedor-cadauno'>
                        <ImageSlider slides={SliderBlender} />
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Proyectos