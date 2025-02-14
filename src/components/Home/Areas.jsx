import React from 'react';
import { AreaItem } from './AreaItem';

const areas = [
  { src: "colegio", image: "/index_logo_colegio.png", alt: "Colegio", gradient: "from-red-400 to-red-500" },
  { src: "isei", image: "/index_logo_isei.png", alt: "ISEI", gradient: "from-isei-teal to-isei-teal" },
  { src: "deporte", image: "/index_logo_deporte.png", alt: "Deporte", gradient: "from-orange-400 to-orange-500" },
  { src: "comunicacion", image: "/index_logo_comunicacion.png", alt: "Comunicación", gradient: "from-sky-400 to-sky-500" },
  { src: "comunidad", image: "/index_logo_comunidad.png", alt: "Comunidad", gradient: "from-yellow-400 to-yellow-500" },
  { src: "mediacion", image: "/index_logo_mediacion.png", alt: "Mediación", gradient: "from-purple-400 to-purple-500" },
];

export function Areas() {
  return (
    <section className="relative overflow-hidden">
      <svg className="w-full absolute h-full opacity-20 text-base-400/70" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            height="95"
            id="grid-pattern"
            patternUnits="userSpaceOnUse"
            width="95">
            <path d="M 95 0 L 0 0 0 95" stroke="currentColor" fill="none" strokeWidth="1">
            </path>
          </pattern>
        </defs>
        <rect fill="url(#grid-pattern)" height="100%" width="100%">
        </rect>
      </svg>
      <div className='absolute w-full h-full bg-gradient-to-b from-white via-transparent to-white'></div>
      <div className='max-w-screen-2xl mx-auto py-28 flex flex-col justify-between gap-28 px-6'>
        <h2 className='text-center relative text-4xl md:text-5xl font-light tracking-wide flex flex-col md:block items-center'>
          Explora nuestros <span className='bg-[#84cc16] text-white ms-1 px-3 max-w-fit mt-2 scale-110'> áreas de trabajo </span>
        </h2>
        <div className='hidden md:flex flex-col gap-20 px-8'>
          <ul className="grid grid-cols-3 place-items-center">
            {areas.slice(0, 3).map((area, index) => (
              <AreaItem key={index} src={area.src} image={area.image} alt={area.alt} gradient={area.gradient} />
            ))}
          </ul>
          <ul className="grid grid-cols-3 place-items-center max-w-screen-xl mx-auto w-full">
            {areas.slice(3).map((area, index) => (
              <AreaItem key={index + 4} src={area.src} image={area.image} alt={area.alt} gradient={area.gradient} />
            ))}
          </ul>
        </div>
        <ul className='md:hidden px-8 grid grid-cols-2 gap-16 place-items-center'>
          {areas.map((area, index) => (
            <AreaItem key={index} src={area.src} image={area.image} alt={area.alt} gradient={area.gradient} />
          ))}
        </ul>
      </div>
    </section>
  );
}