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
      <div className="w-full max-w-screen-xl mx-auto px-6 md:mt-[45px]">
        <div className='min-h-[80dvh] md:min-h-[70dvh] flex-col-reverse lg:flex-row flex items-center justify-center lg:justify-between gap-16 md:px-4  '>
          <h1 className="text-5xl sm:scale-110 sm:text-6xl md:text-7xl text-center md:text-start lg:scale-100 lg:text-8xl font-light text-black">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <span className="font-normal bg-gradient-to-tr from-[#709121] from-50% to-lime-200 text-transparent bg-clip-text">Hidroponía</span>
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Neuquén Oeste
            </motion.span>
          </h1>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0, ease: 'easeInOut' }}
            src="/hidroponia.png" className='w-44 md:w-80 mx-auto' alt="" />
        </div>
        <div className="grid lg:grid-cols-2 mb-24 gap-6 lg:gap-20 place-items-center">
          <div className="text-balance max-w-2xl text-lg/7 text-gray-700">
            <p className="">
              En la Fundación Neuquén Oeste, el <strong>invernadero hidropónico</strong> es mucho más que un espacio de producción sustentable: es un reflejo de nuestra filosofía institucional. Un lugar con un clima nutritivo donde cultivamos <strong>conciencia, valores y futuro</strong>.
            </p>
            <p className="mt-6 ">
              Impulsado por <strong>energía solar</strong> y llevado a cabo en conjunto con la Cooperativa de Agua, Luz y Fuerza (CALF).
            </p>
          </div>

          <div className="text-pretty flex flex-col justify-between max-w-2xl text-lg/7 text-gray-700">
            <p className="">
              Este invernadero se convierte en un <strong>laboratorio vivo</strong>, donde los estudiantes del Colegio Neuquén Oeste y la comunidad pueden experimentar de manera directa el ciclo de crecimiento, desde la siembra hasta la cosecha.
            </p>
            <p className='mt-2'>
              En este espacio, el aprendizaje florece de manera colaborativa, en armonía con el entorno y con un profundo respeto por la sustentabilidad.</p>
          </div>
        </div>
      </div>
    </section>
  )
}