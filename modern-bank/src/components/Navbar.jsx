import React, { useState } from 'react'
import { navLinks } from '../constants/index'

const Navbar = () => {

  // const [first, setToggle] =  useState(false)

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src="" alt="" className='w-[124px] h-[32px]'/>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index)=>(
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
          ))
        }
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src="" alt="" />
      </div>
    </nav>
  )
}

export default Navbar