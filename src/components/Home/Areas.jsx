import React from 'react';
import { AreaItem } from './AreaItem';

const areas = [
  { src: "/index_logo_colegio.png", alt: "Colegio", gradient: "from-red-400 to-red-500" },
  { src: "/index_logo_kinesiologia.png", alt: "Kinesiología", gradient: "from-[#57c23c] to-[#57c23c]" },
  { src: "/index_logo_isei.png", alt: "ISEI", gradient: "from-isei-teal to-isei-teal" },
  { src: "/index_logo_deporte.png", alt: "Deporte", gradient: "from-orange-400 to-orange-500" },
  { src: "/index_logo_comunicacion.png", alt: "Comunicación", gradient: "from-sky-400 to-sky-500" },
  { src: "/index_logo_comunidad.png", alt: "Comunidad", gradient: "from-yellow-400 to-yellow-500" },
  { src: "/index_logo_mediacion.png", alt: "Mediación", gradient: "from-purple-400 to-purple-500" },
];

export function Areas() {
  return (
    <section className="relative overflow-hidden">
      <svg className="w-full absolute h-full opacity-20 text-base-400/70" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            height="78"
            id="grid-pattern"
            patternUnits="userSpaceOnUse"
            width="78">
            <path d="M 78 0 L 0 0 0 78" stroke="currentColor" fill="none" strokeWidth="1">
            </path>
          </pattern>
        </defs>
        <rect fill="url(#grid-pattern)" height="100%" width="100%">
        </rect>
      </svg>
      <div className='absolute w-full h-full bg-gradient-to-b from-white via-transparent to-white'></div>
      <div className='max-w-screen-2xl mx-auto py-28 flex flex-col justify-between gap-28'>
        <h2 className='text-center relative text-5xl font-light tracking-wide'>Explora nuestros <span className='bg-lime-500 text-white ms-1 px-3'> áreas de trabajo </span></h2>
        <div className='flex flex-col gap-20 px-8'>
          <ul className="grid grid-cols-4 place-items-center">
            {areas.slice(0, 4).map((area, index) => (
              <AreaItem key={index} src={area.src} alt={area.alt} gradient={area.gradient} />
            ))}
          </ul>
          <ul className="grid grid-cols-3 place-items-center max-w-screen-xl mx-auto w-full">
            {areas.slice(4).map((area, index) => (
              <AreaItem key={index + 4} src={area.src} alt={area.alt} gradient={area.gradient} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}