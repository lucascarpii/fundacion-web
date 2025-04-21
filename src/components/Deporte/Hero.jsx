import { motion } from 'framer-motion'

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
        <div className='min-h-[60dvh] flex items-center justify-center'>
        <h1 className="text-5xl sm:scale-110 sm:text-6xl md:text-7xl text-center lg:scale-100 lg:text-8xl font-light text-black">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <span className="font-normal bg-gradient-to-br from-deporte from-50% to-orange-700 text-transparent bg-clip-text">Transformando comunidades</span>
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            a través del deporte
          </motion.span>
        </h1>
        </div>
        <div className="grid lg:grid-cols-3 mb-24">
          <div className="lg:max-w-3xl text-lg lg:col-span-2 text-gray-700">
            <p className="mt-4 text-pretty">
              Diariamente se desarrollan diversas <strong>actividades deportivas</strong> con el objetivo de favorecer el crecimiento y fortalecer habilidades para la vida, como también el ejercicio del <strong>compañerismo y la vida sana</strong> en los niños y jóvenes.
            </p>
            <p className="mt-4 text-pretty">
              A través de un <strong>desarrollo integral y participativo</strong>, la práctica del deporte tiene un fuerte arraigo en las familias que concurren regularmente a la institución y motiva a las personas a ser más compañeros, trabajar en equipo y fortalecer los vínculos por medio de una competencia sana.
            </p>
            <p className="mt-4 text-pretty">
              El sueño de <strong>brindar contención</strong> a través del deporte, es hoy una realidad y podemos ver que la práctica del mismo asegura una vida plena de <strong>felicidad y amor</strong>.
            </p>
          </div>

          <div className="hidden lg:flex items-center justify-end">
            <img src="/deportes_logo_enca.png" className='h-28 md:h-40' alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}