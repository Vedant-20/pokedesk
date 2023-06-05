import React, { useEffect, useState } from 'react'
import Card from './Card'
import Pokedex from 'pokedex-promise-v2';

const PopularSection = () => {

    const [popularPokemon, setPopularPokemon]=useState([]);
    const pokedex = new Pokedex()

    useEffect(()=>{
        pokedex.getPokemonByName(['pikachu','bulbasaur','charizard'])
        .then(res=>setPopularPokemon(res))
        .catch(err=>console.log(err));
    },[])
  return (
    <div className='py-8 pb-16 px-4 bg-red-400'>
        <div className="container">
            <h1 className='py-4 text-2xl '>
                Popular Pokemons
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-[400px] md:w-[100%] mx-auto'>
                    {popularPokemon.map((p)=> <Card key={p.name} img={p.sprites.front_default} name={p.name} types={p.types}/>)}
                    
            </div>
        </div>
    </div>
  )
}

export default PopularSection