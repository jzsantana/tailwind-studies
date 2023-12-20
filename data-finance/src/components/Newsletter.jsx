import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newletter and stay up to date.</p>
            </div>

            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input type="text" placeholder='Enter email' className='p-3 flex w-full rounded-md text-black' />
                    <button className='bg-[#762cde] w-[200px] rounded-md font-medium text-black my-6 mx-auto py-3 ml-4'>Notify me</button>
                </div>
                <p>We care about the protection of your data. Read oour <span className='text-[#762cde]'>Privacy Polity</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter