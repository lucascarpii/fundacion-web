import { motion } from 'framer-motion'
import { FileTypePDF } from '../../icons/FileTypePDF'
import { LinkIcon } from '../../icons/LinkIcon'

export function Hero() {
  return (
    <section className="relative">
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
      <div className="w-full max-w-screen-xl min-h-[80dvh] flex flex-col-reverse xl:flex-row gap-10 justify-center xl:justify-between items-center mx-auto px-4 sm:px-6 ">
        <div className='flex flex-col items-center lg:items-start'>
          <h1 className="text-4xl sm:scale-110 sm:text-5xl md:text-6xl lg:scale-100 lg:text-[80px] text-center lg:text-left font-light text-black">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              Formamos agentes de
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="font-medium bg-gradient-to-br from-isei-blue from-50% to-isei-nav text-transparent bg-clip-text">Transformación Social</span>
            </motion.span>
          </h1>
          <div className='flex flex-col sm:flex-row gap-4 items-center mt-10'>
            <motion.a
              href='https://campusvirtualisei.com/'
              target='_blank'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='w-full sm:w-auto justify-center select-none cursor-pointer flex items-center gap-4 bg-isei-blue border-2 border-isei-blue transition-colors duration-200 hover:border-isei-dark text-white hover:bg-isei-dark px-6 py-3 rounded-lg'>
              Ir al campus virtual <LinkIcon />
            </motion.a>
            <motion.a
              href='https://campusvirtualisei.com/pdf/invernadero_calf_fundacion.pdf'
              target='_blank'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className='w-full sm:w-auto justify-center select-none cursor-pointer flex items-center gap-4 border-2 text-isei-nav border-isei-nav transition-colors duration-200 px-6 py-3 rounded-lg hover:bg-isei-nav hover:text-white'>
              Invernadero con Energía Solar <FileTypePDF />
            </motion.a>
          </div>
        </div>
        <img src="/isei_logo_enca.png" className='h-28 md:h-40' alt="" />
      </div>
    </section>
  )
}