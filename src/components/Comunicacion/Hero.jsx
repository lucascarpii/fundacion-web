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
              Compartir y difundir
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              un mensaje de<span className="font-normal bg-gradient-to-br from-comunicacion from-50% to-sky-700 text-transparent bg-clip-text"> esperanza</span>
            </motion.span>
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-24 -mt-10 relative">
          <div className="lg:max-w-2xl text-lg/8  text-gray-700 relative z-20">
            <p className="text-pretty">
              A través de la utilización de nuestros equipos de radio, televisión y blogs se busca elaborar un mensaje de paz, amor y acompañamiento para dar sentido a la vida y transitarla con alegría. Esto nos motiva a seguir construyendo una comunidad ligada al positivismo y buenas relaciones para vivir mejor en sociedad.
            </p>
            <p className="mt-6 text-pretty">
              El área de comunicación juega un rol fundamental para contar, desde la Fundación hacia el exterior, lo que allí dentro ocurre y los principios en los que se basa, poniendo primeramente el respeto y el amor hacia el otro, con un mensaje dirigido a todas las personas.
            </p>
          </div>

          <div className="hidden lg:flex items-center justify-end  relative z-20">
            <img src="/enca_comunicacion.jpg" className='w-full aspect-video object-cover rounded-3xl rounded-br-none shadow-2xl' alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}