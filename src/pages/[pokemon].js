


// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react'
// import Pokedex from 'pokedex-promise-v2';
// import Image from 'next/image';

// const Pokemon = () => {
//   const router = useRouter();
//   const pokedex = new Pokedex();

//   const [pokemon, setPokemon] = useState({});
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const getPokemonData = async () => {
//       const name = router.query.pokemon;

//       setIsLoading(true); // Set loading state

//       try {
//         const res = await pokedex.getPokemonByName(name);
//         setPokemon(res);
//         console.log(res);
//       } catch (err) {
//         console.log(err);
//       } finally {
//         setIsLoading(false); // Clear loading state
//       }
//     };

//     getPokemonData();
//   }, [router.query.pokemon]); // Add router.query.pokemon as a dependency

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="">
//       <div className="container min-h-screen  grid place-items-center  bg-gradient-to-r from-violet-500 to-fuchsia-500">
//         <div className="w-[500px] mx-auto bg-lime-400 p-10 rounded-xl border-4">
//           <Image
//             className="mx-auto"
//             src={pokemon.sprites?.front_default}
//             width={200}
//             height={200}
//             alt={pokemon.name}
//           />
//           <h1 className="text-center font-bold capitalize text-3xl pt-2 pb-4 underline">
//             {pokemon.name}
//           </h1>

//           <div className="flex flex-col gap-6 mt-8 font-bold">
//             <div className="flex  items-center gap-4 ">
//               <h2 className="text-lg">Type:</h2>
//               {pokemon.types?.map((t) => (
//                 <span key={t.type.name} className="type">
//                   {t.type.name}
//                 </span>
//               ))}
//             </div>

//             <div className="flex items-center gap-4">
//               <h2 className="text-lg">Abilities:</h2>
//               {pokemon.abilities?.map((a) => (
//                 <span key={a.ability.name} className="ability">
//                   {a.ability.name}
//                 </span>
//               ))}
//             </div>

//             <div>Weight: {pokemon.weight} pounds</div>
//             <div>Height: {pokemon.height} feet</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Pokemon;


















































import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Pokedex from 'pokedex-promise-v2';
import Image from 'next/image';

const Pokemon = () => {
  const router = useRouter();
  const pokedex = new Pokedex();

  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getPokemonData = async () => {
      const name = router.query.pokemon;

      setIsLoading(true); // Set loading state

      try {
        const res = await pokedex.getPokemonByName(name);
        setPokemon(res);
        console.log(res);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false); // Clear loading state
      }
    };

    getPokemonData();
  }, [router.query.pokemon]); // Add router.query.pokemon as a dependency

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="container mx-auto h-full grid place-items-center">
        <div className="w-full max-w-md bg-lime-400 p-10 rounded-xl border-4">
          <div className="mx-auto w-[200px]">
            <Image
              src={pokemon.sprites?.front_default}
              width={200}
              height={200}
              alt={pokemon.name}
            />
          </div>
          <h1 className="text-center font-bold capitalize text-3xl pt-2 pb-4 underline">
            {pokemon.name}
          </h1>

          <div className="flex flex-col gap-6 mt-8 font-bold">
            <div className="flex items-center gap-4">
              <h2 className="text-lg">Type:</h2>
              {pokemon.types?.map((t) => (
                <span key={t.type.name} className="type">
                  {t.type.name}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <h2 className="text-lg">Abilities:</h2>
              {pokemon.abilities?.map((a) => (
                <span key={a.ability.name} className="ability">
                  {a.ability.name}
                </span>
              ))}
            </div>

            <div>Weight: {pokemon.weight} pounds</div>
            <div>Height: {pokemon.height} feet</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;

