import React from 'react'
import styles from './style'

import {  Navbar, Billing, CardDeal, Business, Clients, CTA,
          Stats, Footer, Testimonials, Hero } from './components'

const App = () => {
  return (
    // <div className='w-full bg-primary'>
    //   <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    //     <div className={`${styles.boxWidth}`}>
    //       <Navbar/>
    //     </div>
    //   </div>

    //   <div className={`bg-primary ${styles.flexStart}`}>
    //     <div className={`${styles.boxWidth}`}>
    //       <Hero/>
    //     </div>
    //   </div>

    //   <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
    //     <div className={`${styles.boxWidth}`}>
    //       <Stats/> 
    //       <Business/>
    //       <Billing/> 
    //       <CardDeal/>
    //       <Testimonials/>
    //       <Clients/>
    //       <CTA/>
    //       <Footer/>
    //     </div>
    //   </div>
    // </div>

    <div className='w-full bg-[#573573] h-screen overflow-hidden flex flex-1 justify-center items-center'>
      <div className='w-[410px] bg-white h-[556px] p-8 flex flex-col items-center shadow-sm shadow-white'>
        <h1 className='bg-gradient-to-r from-[#573573] via-[#6E368C] to-[#B07BDA] inline-block text-transparent bg-clip-text font-extrabold text-5xl'>REVIEWER</h1>
        <div className='flex justify-center flex-col my-4 gap-4'>
          <input type="text" className='p-1 w-80 border-b border-t-0 border-l-0 border-r-0 border-grey-dark focus:outline-none' placeholder='E-mail adresss'/>
          <input type="password" className='p-1 w-80 border-b border-t-0 border-l-0 border-r-0 border-grey-dark focus:outline-none' placeholder='Password'/>
        </div>

        <button className='px-12 py-3 flex items-center bg-[#B07BDA] text-white text-sm font-semibold font-poppins my-8'>LOGIN</button>
      </div>
    </div>
  )
}

export default App