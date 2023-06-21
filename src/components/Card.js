
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({ img, name, types, onClick }) => {
  return (
    <Link href={`/${name}`} onClick={onClick} className="bg-violet-400 shadow-2xl cursor-pointer border-2 rounded-xl">
      <div className="flex justify-center py-4">
        {img && <Image src={img} width={200} height={200} alt={name} />}
      </div>
      <div className="p-8">
        <h2 className="text-4xl font-bold underline capitalize">{name}</h2>
        <div className="flex items-center gap-4 mt-8 font-bold">
          <h2 className="text-lg">Type:</h2>
          {types.map((t) => (
            <span key={t.type.name} className="bg-lime-400 px-2 py-[2px]">
              {t.type.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Card;






