import React from 'react'
import "./tecnologies.css"
import imagenprueba from "../../assets/tecnologies-black/js.png"
import imagenprueba1 from "../../assets/tecnologies-black/node.png"
import imagenprueba2 from "../../assets/tecnologies-black/css.png"
import imagenprueba3 from "../../assets/tecnologies-black/react.png"
import imagenprueba4 from "../../assets/tecnologies-black/blendeer.png"
import imagenprueba5 from "../../assets/tecnologies-black/firebase.png"
import imagenprueba6 from "../../assets/tecnologies-black/postgres.png"
import imagenprueba7 from "../../assets/tecnologies-black/github.png"

import imagenprueba9 from "../../assets/tecnologies-black/bootsrap.png"
import imagenprueba10 from "../../assets/tecnologies-black/html.png"
import imagenprueba11 from "../../assets/tecnologies-black/figmablack.png"
import imagenprueba12 from "../../assets/tecnologies-black/tailwind.jpg"




function Tecnologies() {
    return (
        <div className='container-tecnologies' id='tecnologias' >

            <h2 className='section__title'> Tecnologías </h2>

            <div className='imagenes' >

                <div className='solo'>
                    <img src={imagenprueba} alt="" className='imagen' />
                </div>
                <div className='solo'>
                    <img src={imagenprueba10} alt="" className='imagen' />
                </div>

                <div className='solo'>
                    <img src={imagenprueba1} alt="" className='imagen' />
                </div>

                <div className='solo'>
                    <img src={imagenprueba2} alt="" className='imagen' />
                </div>

                <div className="solo">
                    <img src={imagenprueba3} alt="" className='imagen' />
                </div>


                <div className="solo">
                    <img src={imagenprueba4} alt="" className='imagen' />
                </div>

                <div className="solo">
                    <img src={imagenprueba5} alt="" className='imagen' />
                </div>

                <div className="solo">
                    <img src={imagenprueba6} alt="" className='imagen' />
                </div>

                <div className="solo">
                    <img src={imagenprueba7} alt="" className='imagen' />
                </div>

                <div className="solo">
                    <img src={imagenprueba9} alt="" className='imagen' />
                </div>

                <div className="solo">
                    <img src={imagenprueba11} alt="" className='imagen' />
                </div>

                <div className="solo">
                    <img src={imagenprueba12} alt="" className='imagen' />
                </div>
            </div>

            <div className='imagenes-responsive' >
                    <img src={imagenprueba} alt="" className='imagen' />
                    <img src={imagenprueba10} alt="" className='imagen' />
                    <img src={imagenprueba1} alt="" className='imagen' />
                    <img src={imagenprueba2} alt="" className='imagen' />
                    <img src={imagenprueba3} alt="" className='imagen' />
                    <img src={imagenprueba4} alt="" className='imagen' />
                    <img src={imagenprueba5} alt="" className='imagen' />
                    <img src={imagenprueba6} alt="" className='imagen' />
                    <img src={imagenprueba7} alt="" className='imagen' />
                    <img src={imagenprueba9} alt="" className='imagen' />
                    <img src={imagenprueba11} alt="" className='imagen' />
                    <img src={imagenprueba12} alt="" className='imagen' />
                
            </div>



        </div>
    )
}

export default Tecnologies