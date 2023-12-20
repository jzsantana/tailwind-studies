import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold '>DATA ANALYTIC DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-boldpy-2'>Manage Data Analytic Centrally</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente quia iure 
                        unde maiores illo tempore, perspiciatis temporibus animi. Minima hic, repudiandae 
                        recusandae nostrum dolores eaque dolorem voluptate magnam esse doloribus.
                    </p>
                    <button className='text-[#00df9a] w-[200px] rounded-md font-medium bg-black my-6 md:mx-0 mx-auto py-3'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics