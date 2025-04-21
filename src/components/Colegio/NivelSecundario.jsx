import { motion } from 'framer-motion';
import { MailIcon } from '../../icons/MailIcon';
import { Whatsapp } from '../../icons/Whatsapp';
import { Facebook } from '../../icons/Facebook';

export function NivelSecundario() {
  return (
    <section className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className='flex flex-col xl:flex-row-reverse justify-between items-center gap-10'>
        {/* Columna de Texto Principal */}
        <div className='max-w-3xl xl:max-w-2xl'>
          <h2 className='text-4xl mb-10 text-center lg:text-left'>
            Nivel Secundario
          </h2>

          {/* --- Inicio del Nuevo Contenido con Negritas --- */}
          <p className='text-pretty text-lg/7 text-gray-700'>
            La consolidación de una <strong>"nueva escuela posible"</strong> se ha convertido en uno de los pilares fundamentales de nuestra gesta educativa. Al reflexionar sobre la escuela actual, nos enfrentamos a nuevos desafíos. En este sentido, entendemos que la <strong>formación integral</strong> de nuestros estudiantes es uno de los objetivos primordiales de nuestro Colegio.
          </p>
          <p className='text-pretty text-lg/7 text-gray-700 mt-4'>
            El <strong>pensamiento científico-crítico</strong>, la <strong>tecnología</strong>, la <strong>educación en valores</strong> y la promoción de una <strong>vida saludable</strong>, con el <strong>deporte</strong> como un elemento fundamental, fortalecen nuestros fundamentos institucionales y nos convierten en promotores de los protagonistas del presente y el futuro: nuestros estudiantes.
          </p>
          {/* --- Fin del Nuevo Contenido --- */}

          {/* Botón de Pre-Inscripciones (se mantiene) */}
          <button className='mt-6 w-full sm:w-auto'> {/* Margen superior ajustado */}
            <a className='flex items-center justify-center sm:block bg-teal-500 hover:bg-teal-700 px-6 py-3 rounded-xl rounded-tl-none text-white' href="https://docs.google.com/forms/d/e/1FAIpQLSeYZzEEwJwVF84RZb1hHBSRHU11-G8LjMRsUyVU_wV1frf4uw/closedform">
              Pre-Inscripciones 2025
            </a>
          </button>
        </div>

        {/* Columna de Cita (Directora actualizada) */}
        <div className="bg-isei-footer rounded-xl px-6 py-6 md:py-8 lg:py-24 flex flex-col gap-4 relative overflow-hidden max-w-screen-xl mx-auto">
          <div className="absolute h-2/3 aspect-square rounded-full bg-isei-blue -left-5 -bottom-16 blur-[120px]"></div>
          <div className="absolute h-80 aspect-square rounded-full bg-isei-teal -right-40 top-2 blur-[100px] "></div>
          <figure className="mx-auto max-w-screen-md text-center z-10">
            <svg className="size-8 mx-auto mb-8 text-white/50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
              {/* Se mantiene la cita original, ya que no se proporcionó una nueva */}
              <p className="text-white text-center text-xl italic text-balance">
                “Nuestra tarea es estar cerca de los jóvenes y sus familias, para mejorar su calidad de vida y ayudarlos a enfrentar los desafíos del presente”
              </p>
            </blockquote>
            {/* Figcaption actualizado con la nueva directora */}
            <figcaption className="flex items-center justify-center mt-10 space-x-3">
              <div className="flex flex-col md:flex-row items-center md:divide-x divide-zinc-500">
                <cite className="md:pr-3 font-medium text-white">Stella Maris Villegas</cite> {/* Nombre actualizado */}
                <cite className="md:pl-3 text-sm text-white/60">Directora</cite> {/* Cargo actualizado */}
              </div>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Sección de Contacto (se mantiene) */}
      <div className="py-20 flex flex-col gap-4 max-w-3xl xl:max-w-screen-xl mx-auto">
        <ul className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          <li>
            <a className="w-full flex flex-col" href="https://wa.me/542995934419">
              <div className='flex items-center border-l border-isei-blue text-black font-medium py-2 px-4 gap-2'>
                <Whatsapp /> Whatsapp
              </div>
              <span className='border-l border-zinc-200 text-gray-500 p-4'>
                +54 299 5934419
              </span>
            </a>
          </li>
          <li>
            {/* Se asume que la falta de href en Tel. Fijo es intencional */}
            <a className="w-full flex flex-col">
              <div className='flex items-center border-l border-isei-blue text-black font-medium py-2 px-4 gap-2'>
                <Whatsapp /> Tel. Fijo
              </div>
              <span className='border-l border-zinc-200 text-gray-500 p-4'>
                299 446 2353
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
          <li className='w-full flex flex-col items-center justify-center'>
            <div className='bg-blue-500 rounded-md text-white font-medium py-2 px-4 gap-4 flex items-center'>
              <a className="flex items-center gap-1" href="https://www.facebook.com/CNOeste/" target="_blank" >
                <Facebook /> Visitanos en Facebook
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}