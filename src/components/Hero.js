import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[url(/hero__bg.jpg)] bg-cover bg-fixed h-[calc(100vh-64px)] grid place-items-center'>
        <div className='text-cyan-400 text-2xl text-center bg-[#00000070] rounded-xl p-10'> 
            <h1 className='font-medium text-[30px] md:text-[50px] mb-4'>Welcome to pokedex</h1>
            <p className='text-[20px] md:text-[24px]'>Here you can search for your favourite Pokemons</p>
        </div>
        
    </div>
  )
}

export default Hero