import React from 'react'
import "./Header.css"

import { AiFillHome, AiFillMessage } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaRocket, FaGraduationCap } from 'react-icons/fa';
import { navLinks } from "../constants"
import { useState } from 'react';
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";

function Header() {

    const [toggle, setToggle] = useState(false)

    return (
        <nav className='w-full flex py-6 justify-between items-center navbar' >

            <h1 className='flex-1 font-poppins font-semibold ss:text-[50px]
                       text-[42px]  ss:leading-[100px] ml-5 ' >
                <span className='text-gradient'>
                    Sebastian <br className='sm:block hidden' />
                </span>
            </h1>

            <ul className='list-none sm:flex hidden justify-end items-center flex-1 mr-10'>
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] 
            ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} `}
                    >
                        <a href={`#${nav.id}`} className="secciones"  >
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center mr-3" >
                <img src={toggle ? close : menu} alt="menu" className='w-[40px] h-[38px] object-contain'
                    onClick={() => setToggle((prev) => !prev)} />

                <div className={`${toggle ? "flex mt-5" : "hidden"}
             p-6 bg-gradient-to-r from-black to-white-500 absolute top-20 right-0
             mx-4 my-2 min-w-[140px] rounded-xl sidebar `} >

                    <ul className='list-none flex flex-col text-white justify-end items-center flex-1'>
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-normal cursor-pointer text-[16px] 
            ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} `}
                            >
                                <a href={`#${nav.id}`} >
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>

                </div>

            </div>



        </nav>
    )
}

export default Header