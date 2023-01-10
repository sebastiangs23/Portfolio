import React from 'react'
import "../Home/Home.css"

function Social() {
    return (
        <div className='home__social' >
            <a href="mailto:sebastiangs2309@gmail.com" className='home__social-icon' target="_blank" >
                <i class="uil uil-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/sebastiangomezsalinas/" className='home__social-icon' target="_blank" >
                <i class="uil uil-linkedin"></i>
            </a>

            <a href="https://github.com/sebastiangs23" className='home__social-icon' target="_blank" >
                <i class="uil uil-github"></i>
            </a>
        </div>
    )
}

export default Social;
