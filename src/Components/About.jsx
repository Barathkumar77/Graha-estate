import React from 'react'
// import build from '/public/architectural-building.jpg'

const About = () => {
  return (
    <section className='relative h-screen flex justify-center items-center border'>
        <div className='flex items-center justify-center max-md:flex-col'>
            <div className='w-1/2 max-sm:w-full px-10 '>
            <h4 className='text-red-400 text-[20px] font-light'>ABOUT US</h4>
            <h1 className='text-[50px] font-bold text-wrap max-sm:text-xl'> Professional <br/>Architect and<br/>   Property Agent. </h1>
            <p>Lorem ipsum dolor sit amet consectetur,Accusantium esse ab illum praesentium rem accusamus. Voluptatum  eveniet magnam amet!</p>
            <button className="h-11  px-7 my-10 font-semibold  bg-black text-white hover:bg-red-500">Discover More</button>
            </div>
            
            <div className='w-1/2 flex justify-center items-center'>
            <img src='\architectural-building.jpg' alt='build' className='max-sm:max-w-[350px]' />
            </div>
    
        </div>

    </section>
    
    
  )
}

export default About
