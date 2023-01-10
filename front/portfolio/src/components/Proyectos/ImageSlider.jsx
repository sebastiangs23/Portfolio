import React, { useState } from 'react'
import { SliderData } from '../../assets/imagenesproyectos/imagenes.js'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa"
import "./slider.css"

export const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length;
    

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className="left-arrow" onClick={previousSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {slides.map((s, index) => {
                return (
                    <div className={index === current ? "slide active" : "slide"} key={index} >
                        {index === current && (<img src={s.image} width="500px" height="350px" className='image' />) }
                        
                    </div>

                )
            })}
        </section>
    )
}
