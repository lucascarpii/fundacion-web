import { motion } from 'framer-motion'
import { MailIcon } from '../../icons/MailIcon'
import { Whatsapp } from '../../icons/Whatsapp'
import { Facebook } from '../../icons/Facebook'

export function NivelSecundario() {
  return (
    <section className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className='flex flex-col xl:flex-row-reverse justify-between items-center gap-10'>
        <div className='max-w-3xl xl:max-w-2xl'>
          <h2 className='text-4xl mb-10 text-center lg:text-left'>
            Nivel Secundario
          </h2>
          <p className='text-pretty text-lg/7 text-gray-700'>
            El propósito del colegio secundario es mejorar la calidad de vida desde lo físico, lo espiritual y lo cognitivo con eficacia y creatividad en los contenidos académicos, compartiendo valores e influyendo para formar personas más comprometidas con la realidad.</p>
          <p className='text-pretty text-lg/7 text-gray-700 mt-2'>
            En tanto, ofrecemos un espacio educativo abierto, dinámico y flexible para desarrollar las capacidades personales y expresivas a través de diversos métodos formativos para que, al culminar los cinco años de estudio, los alumnos reciban el título de bachiller con orientación en Ciencias Humanas y Naturales.
          </p>
          <button className='mt-4 w-full sm:w-auto'>
            <a className='flex items-center justify-center sm:block bg-teal-500 hover:bg-teal-700 px-6 py-3 rounded-xl rounded-tl-none text-white' href="https://docs.google.com/forms/d/e/1FAIpQLSeYZzEEwJwVF84RZb1hHBSRHU11-G8LjMRsUyVU_wV1frf4uw/closedform">
            Pre-Inscripciones 2025
            </a>
          </button>
        </div>
        <div className="bg-isei-footer rounded-xl px-6 py-6 md:py-8 lg:py-24 flex flex-col gap-4 relative overflow-hidden max-w-screen-xl mx-auto">
          <div className="absolute h-2/3 aspect-square rounded-full bg-isei-blue -left-5 -bottom-16 blur-[120px]"></div>
          <div className="absolute h-80 aspect-square rounded-full bg-isei-teal -right-40 top-2 blur-[100px] "></div>
          <figure className="mx-auto max-w-screen-md text-center z-10">
            <svg className="size-8 mx-auto mb-8 text-white/50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
              <p className="text-white text-center text-xl italic text-balance">
                “Nuestra tarea es estar cerca de los jóvenes y sus familias, para mejorar su calidad de vida y ayudarlos a enfrentar los desafíos del presente”
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-10 space-x-3">
              <div className="flex items-center divide-x divide-zinc-500">
                <cite className="pr-3 font-medium text-white">Cristian Servera</cite>
                <cite className="pl-3 text-sm text-zinc-200">Director Colegio Secundario</cite>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="py-20 flex flex-col gap-4 max-w-3xl xl:max-w-screen-xl mx-auto">
        <ul className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <li>
            <a className="w-full flex flex-col" href="">
              <div className='flex items-center border-l border-isei-blue text-black font-medium py-2 px-4 gap-2'>
                <Whatsapp /> Whatsapp
              </div>
              <span className='border-l border-zinc-200 text-gray-500 p-4'>
                299 5934419
              </span>
            </a>
          </li>
          <li>
            <a className="w-full flex flex-col" href="mailto:nivelmedio@colegionqnoeste.com">
              <div className='flex items-center border-l border-isei-blue text-black font-medium py-2 px-4 gap-2'>
                <MailIcon />  Colegio Nivel Medio
              </div>
              <span className='border-l border-zinc-200 text-gray-500 p-4'>
                nivelmedio@colegionqnoeste.com
              </span>
            </a>
          </li>
          <li className='w-full flex flex-col'>
            <div className='flex items-center border-l border-isei-blue text-black font-medium py-2 px-4 gap-2'>
              Visita nuestras redes
            </div>
            <div className='border-l border-zinc-200 text-gray-500 p-4'>
              <a className="flex items-center hover:text-isei-dark gap-1" href="https://www.facebook.com/CNOeste/" target="_blank" >
                <Facebook /> Facebook
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}