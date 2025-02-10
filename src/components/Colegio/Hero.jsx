import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="min-h-[60dvh] flex items-center justify-center relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg className="w-full -mt-2 absolute h-full opacity-20 text-base-400/70 [mask-image:radial-gradient(50rem_80rem_at_top,white,transparent)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern height="200" id="grid-pattern" patternUnits="userSpaceOnUse" width="200">
              <path d="M 200 0 L 0 0 0 200" stroke="currentColor" fill="none" strokeWidth="1"></path>
            </pattern>
          </defs>
          <rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>
        </svg>
      </div>
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-0">
        <h1 className="text-4xl scale-110 sm:text-6xl md:text-7xl text-center lg:scale-100 lg:text-8xl font-light text-black">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            Creciendo juntos
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            por un <span className="font-medium bg-gradient-to-br from-colegio from-50% to-red-700 text-transparent bg-clip-text">futuro mejor</span>
          </motion.span>
        </h1>
      </div>
    </section>
  )
}