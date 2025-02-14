import { motion } from 'framer-motion'
import { MailIcon } from "../../icons/MailIcon";

export function Hero() {
  return (
    <section className="flex items-center justify-center relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg className="w-full -mt-2 absolute h-full opacity-20 text-base-400/70 [mask-image:radial-gradient(50rem_50rem_at_top,white,transparent)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern height="150" id="grid-pattern" patternUnits="userSpaceOnUse" width="150">
              <path d="M 150 0 L 0 0 0 150" stroke="currentColor" fill="none" strokeWidth="1"></path>
            </pattern>
          </defs>
          <rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>
        </svg>
      </div>
      <div className="w-full max-w-screen-xl mx-auto px-6">
        <div className='min-h-[80dvh] md:min-h-[70dvh] flex-col-reverse lg:flex-row flex items-center justify-center lg:justify-between gap-20 md:px-4  '>
          <h1 className="text-5xl sm:scale-110 sm:text-6xl md:text-7xl text-center md:text-start lg:scale-100 lg:text-8xl font-light text-black">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              Siempre juntos
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              construimos
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              un <span className="font-normal bg-gradient-to-br from-comunidad from-50% to-yellow-600 text-transparent bg-clip-text">lugar mejor</span>
            </motion.span>
          </h1>
          <motion.img
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.8, delay: 0, ease: 'easeInOut' }}
            src="/comunidad_logo_enca.png" className='h-28 lg:h-40 mx-auto' alt="" />
        </div>
        <div className="grid lg:grid-cols-2 mb-24 gap-6 lg:gap-20 place-items-center">
          <div className="max-w-2xl text-lg/7 text-gray-700">
            <p className="text-pretty">
              Desde nuestro inicio comenzamos acompañando el trabajo que se hacía a través del deporte. Así se empieza a relacionar la ayuda comunitaria con la entrega de elementos para el desarrollo de los niños y jóvenes de la zona, como la vestimenta y la alimentación.
            </p>
            <p className="mt-4 text-pretty">
              Esto permitió un acercamiento a todos ellos y a sus familias, lo que atrajo a mujeres interesadas en el apoyo comunitario, dando inicio a talleres para quienes sufrían diversos tipos de maltrato, al mismo tiempo que reafirmaban los valores entre ellas y sus vínculos más cercanos.
            </p>
          </div>

          <div className=" flex flex-col justify-between max-w-2xl text-lg/7 text-gray-700">
            <p className="text-pretty">
              Todas las personas que participan del área reafirman lo beneficioso que es tanto para la salud física como para su desarrollo integral y unidad del vínculo familiar.
            </p>
            <p className='mt-4'>Es por ello que además de los espacios educativos y deportivos, se les brinda la posibilidad de participar de charlas informativas sobre temas de su interés orientadas a la prevención y ayuda escolar.</p>
            <ul className="flex gap-6 items-center flex-col md:flex-row justify-between pt-8 md:py-4">
              <li>
                <a href="mailto:fundacionnqnoeste@gmail.com" className="flex hover:underline underline-offset-4 items-center gap-3 text-isei-nav hover:text-yellow-600 transition-colors">
                  <MailIcon className="size-7" />
                  <span className="text-lg md:text-base font-medium">fundacionnqnoeste@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}