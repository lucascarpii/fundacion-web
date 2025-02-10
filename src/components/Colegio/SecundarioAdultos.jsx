import { motion } from 'framer-motion'
import { MailIcon } from '../../icons/MailIcon'
import { Whatsapp } from '../../icons/Whatsapp'
import { Facebook } from '../../icons/Facebook'

export function SecundarioAdultos() {
  return (
    <section className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className='flex flex-col xl:flex-row justify-between items-center gap-10'>
        <div className='max-w-3xl xl:max-w-2xl'>
          <h2 className='text-4xl mb-10 text-center lg:text-left'>
            Secundario Adultos
          </h2>
          <p className='text-pretty text-lg/7 text-gray-700'>
            En el colegio secundario para adultos brindamos la posibilidad de que finalicen los estudios aquellas personas mayores de 18 años que se vieron excluidas del sistema educativo y que desean construir una interpretación positiva tanto de sí mismos como del contexto socio-económico y cultural en el que se encuentran, mejorando día a día sus tratos interpersonales, cultivando valores y siendo recibidos en un espacio donde son bienvenidos.
          </p>
          <p className='text-pretty text-lg/7 text-gray-700 mt-2'>
            El plan de estudios está pensando para ser recorrido en tres años y el título que se obtiene es "Bachiller Perito en Desarrollo de Comunidades", ofreciendo mejores herramientas y oportunidades para intervenir en la sociedad, para actuar en ella, modificarla y colaborar así en un proceso transformador mayor y coherente con sus valores.
          </p>
          <button className='mt-4 w-full sm:w-auto'>
            <a className='flex items-center justify-center sm:block bg-amber-500 hover:bg-amber-700 px-6 py-3 rounded-xl rounded-tl-none text-white' href="https://docs.google.com/forms/d/e/1FAIpQLSf-lagHqBqqJyExaxlmH8psWYbwSOKhwz3bLUe5Lok0vELhbg/viewform">
              Pre-Inscripciones 2025
            </a>
          </button>
        </div>
        <div className="bg-isei-footer rounded-xl px-6 py-6 md:py-8 lg:py-12 flex flex-col gap-4 relative overflow-hidden max-w-3xl mx-auto">
          <div className="absolute h-2/3 aspect-square rounded-full bg-isei-blue -left-5 -bottom-16 blur-[120px]"></div>
          <div className="absolute h-80 aspect-square rounded-full bg-amber-500 -right-40 top-2 blur-[100px] "></div>
          <figure className="mx-auto max-w-screen-md text-center z-10">
            <svg className="size-8 mx-auto mb-8 text-white/50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
              <p className="text-white text-center text-xl italic text-balance">
                “Nuestro proyecto tiene que ver con la vida plena. Nos interesan las relaciones humanas, la realidad social. LLevar a la práctica los valores que ayudan a construir una sociedad mejor””
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-10 space-x-3">
              <div className="flex items-center divide-x divide-zinc-500">
                <cite className="pr-3 font-medium text-white">José Manuel Navarro</cite>
                <cite className="pl-3 text-sm text-zinc-200">Director de nivel secundario para adultos</cite>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="py-20 flex flex-col gap-4 max-w-4xl xl:max-w-screen-xl mx-auto">
        <ul className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <li>
            <a className="w-full flex flex-col" href="">
              <div className='flex items-center border-l border-isei-blue text-black font-medium py-2 px-4 gap-2'>
                <Whatsapp /> Whatsapp
              </div>
              <span className='border-l border-zinc-200 text-gray-500 p-4'>
                299 5934417
              </span>
            </a>
          </li>
          <li>
            <a className="w-full flex flex-col" href="mailto:adultos@colegionqnoeste.com">
              <div className='flex items-center border-l border-isei-blue text-black font-medium py-2 px-4 gap-2'>
                <MailIcon />  Mail Adultos
              </div>
              <span className='border-l border-zinc-200 text-gray-500 p-4'>
                adultos@colegionqnoeste.com
              </span>
            </a>
          </li>
          <li className='w-full flex flex-col'>
            <div className='flex items-center border-l border-isei-blue text-black font-medium py-2 px-4 gap-2'>
              Visita nuestras redes
            </div>
            <div className='border-l border-zinc-200 text-gray-500 p-4'>
              <a className="flex items-center hover:text-isei-dark gap-1" href="https://www.facebook.com/profile.php?id=100092304284813" target="_blank" >
                <Facebook /> Facebook
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}