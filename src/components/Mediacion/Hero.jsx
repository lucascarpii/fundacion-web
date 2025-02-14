import { motion } from 'framer-motion'
import { MailIcon } from "../../icons/MailIcon";
import { DownloadIcon } from '../../icons/DownloadIcon';

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
      <div className='w-full max-w-2xl lg:max-w-screen-lg py-32 mx-auto px-6 min-h-[80vh] md:min-h-[75vh] flex flex-col-reverse lg:grid lg:grid-cols-3 gap-10 lg:gap-6'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0, ease: 'easeInOut' }}
          className='p-1.5 bg-gradient-to-br from-mediacion to-mediacion/30 h-fit lg:my-auto'>
          <img src="/enca_mediacion.jpg" className='lg:aspect-[4/3] w-full object-cover shadow-xl' alt="" />
        </motion.div>
        <div className='flex flex-col items-center md:items-start gap-6 lg:col-span-2 justify-center'>
          <h1 className="text-5xl md:text-6xl text-center md:text-start lg:text-[70px] xl:text-[80px] font-light text-black">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Un <span className="font-normal bg-gradient-to-br from-mediacion from-50% to-[#7f3894] text-transparent bg-clip-text">mejor acuerdo</span>
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              para todos
            </motion.span>
          </h1>
          <motion.a
            href='https://fundacionnqnoeste.com/appmediadores/mu.apk'
            target='_blank'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className='w-fit justify-center select-none cursor-pointer flex items-center gap-4 border-2 text-black border-black transition-colors duration:200 px-6 py-2 rounded-lg hover:bg-black hover:text-white'>
            App para mediadores urbanos<DownloadIcon />
          </motion.a>
        </div>
      </div>
    </section>
  )
}