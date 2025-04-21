import { motion } from 'framer-motion'; // Se asume que motion podría usarse en otros lugares o para animaciones futuras
import { MailIcon } from '../../icons/MailIcon';
import { Whatsapp } from '../../icons/Whatsapp';
import { Facebook } from '../../icons/Facebook';

export function NivelPrimario() {
  return (
    <section className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className='flex flex-col xl:flex-row justify-between items-start gap-10'>
        {/* Columna de Texto Principal */}
        <div className='max-w-3xl xl:max-w-2xl'>
          <h2 className='text-4xl mb-10 text-center lg:text-left'>
            Nivel Inicial y Primario
          </h2>
          <p className='text-pretty text-lg/7 text-gray-700 mb-4'>
            Cada año que comienza nos proponemos desde sala de cinco a 7 grado reivindicar los valores que sustentan nuestro trabajo a lo largo de la trayectoria escolar de la institución:
          </p>
          <ul className='list-disc  ml-4 space-y-4 text-pretty text-lg/7 text-gray-700'>
            <li>
              Trabajar para <strong>fomentar y explotar las capacidades</strong> de los/las estudiantes, en un espacio de <strong>continuo aprendizaje</strong>.
            </li>
            <li>
              Desarrollar un <strong>vínculo familia-escuela</strong> que facilite las trayectorias escolares de nuestros estudiantes.
            </li>
            <li>
              Propiciar espacios enmarcados en la <strong>educación emocional</strong>, impulsándolos para crecer y desarrollarse en un <strong>ambiente contenedor</strong>.
            </li>
            <li>
              Fomentar valores como el <strong>respeto, la solidaridad, compañerismo y empatía</strong> a través del <strong>diálogo y la escucha</strong> como facilitadores de comunicación.
            </li>
            <li>
              <strong>Resolución de conflictos</strong> a través del <strong>diálogo respetuoso</strong> enmarcado en la filosofía institucional de <strong>Prácticas Restaurativas y Mediación Escolar</strong>.
            </li>
          </ul>
          <button className='mt-6 w-full sm:w-auto' >
            <a className='bg-red-500 flex items-center justify-center sm:block hover:bg-red-700 px-6 py-3 rounded-xl rounded-tl-none text-white' href='https://docs.google.com/forms/d/e/1FAIpQLScWh6bnNlGU1Unnobjxua4_je1MYOzIkYf1D4oG3Aa4P8I6Qw/closedform'>
              Pre-Inscripciones 2025
            </a>
          </button>
        </div>

        {/* Columna de Cita (se mantiene) */}
        <div className="bg-isei-footer rounded-3xl rounded-tr-none px-6 py-6 md:py-8 lg:py-12 flex flex-col gap-4 relative overflow-hidden max-w-screen-xl mx-auto">
          <div className="absolute h-2/3 aspect-square rounded-full bg-isei-blue -left-5 -bottom-16 blur-[120px]"></div>
          <div className="absolute h-80 aspect-square rounded-full bg-colegio -right-40 top-2 blur-[100px] "></div>
          <figure className="mx-auto max-w-screen-md text-center z-10">
            <svg className="size-8 mx-auto mb-8 text-white/50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
              <p className="text-white text-center text-xl italic text-balance">
                “Enseñar no es transferir conocimientos, sino crear las posibilidades para su construcción. Quien enseña aprende al enseñar y quien enseña aprende a aprender”
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-end mt-10 space-x-3">
              <div className="flex flex-col md:flex-row items-center md:divide-x divide-zinc-500">
                <cite className="md:pr-3 font-medium text-white">Patricia, Fondevila</cite>
                <cite className="md:pl-3 text-sm text-white/60">Directora</cite>
              </div>
            </figcaption>
            <figcaption className="flex items-center justify-end mt-3 space-x-3">
              <div className="flex flex-col md:flex-row items-center md:divide-x divide-zinc-500">
                <cite className="md:pr-3 font-medium text-white">Beatriz, Godoy</cite>
                <cite className="md:pl-3 text-sm text-white/60">Asesora pedagógica</cite>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Sección de Contacto (se mantiene) */}
      <div className="py-20 flex flex-col gap-4 max-w-3xl xl:max-w-screen-xl mx-auto">
        <ul className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[200px_1fr_1fr_200px] gap-4'>
          <li>
            <a href="https://wa.me/542996090421" className="w-full flex flex-col">
              <div className='flex items-center border-l border-isei-blue text-black font-medium py-2 px-4 gap-2'>
                <Whatsapp /> Whatsapp
              </div>
              <span className='border-l border-zinc-200 text-gray-500 p-4'>
                +54 299 6090421
              </span>
            </a>
          </li>
          <li>
            <a className="w-full flex flex-col" href="mailto:nivelprimario@colegionqnoeste.com">
              <div className='flex items-center border-l border-isei-blue text-black font-medium py-2 px-4 gap-2'>
                <MailIcon /> Nivel Primario
              </div>
              <span className='border-l border-zinc-200 text-gray-500 p-4'>
                nivelprimario@colegionqnoeste.com
              </span>
            </a>
          </li>
          <li>
            <a className="w-full flex flex-col" href="mailto:nivelinicial@colegionqnoeste.com">
              <div className='flex items-center border-l border-isei-blue text-black font-medium py-2 px-4 gap-2'>
                <MailIcon /> Nivel Inicial
              </div>
              <span className='border-l border-zinc-200 text-gray-500 p-4'>
                nivelinicial@colegionqnoeste.com
              </span>
            </a>
          </li>
          <li className='w-full flex flex-col items-center justify-center'>
            <div className='bg-blue-500 rounded-md text-white font-medium py-2 px-4 gap-4 flex items-center'>
              <a className="flex items-center gap-1" href="https://www.facebook.com/Colegio-Neuqu%C3%A9n-Oeste-Nivel-Inicial-y-Primario-1940280982766772/?eid=ARCgWHYtf_2q_hIVJ_-jfgLMcCun3awHT9fbMt0HT9ZFXRt8YPdhHd5wEakN1qQUG0rNAONnqdmLjCWO" target="_blank" >
                <Facebook /> Facebook
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}