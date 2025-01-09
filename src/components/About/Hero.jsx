import { motion } from "motion/react"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <svg className="w-full absolute h-full opacity-20 text-base-400/70" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            height="200"
            id="grid-pattern"
            patternUnits="userSpaceOnUse"
            width="200">
            <path d="M 200 0 L 0 0 0 200" stroke="currentColor" fill="none" strokeWidth="1">
            </path>
          </pattern>
        </defs>
        <rect fill="url(#grid-pattern)" height="100%" width="100%">
        </rect>
      </svg>
      <div className='absolute w-full h-full bg-hero-radial-gradient'></div>

      <div className='max-w-screen-xl mx-auto py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-5 min-h-dvh'>
        <div className="h-full flex flex-col justify-center z-10 col-span-1 lg:col-span-3 gap-6 lg:gap-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl flex flex-col font-light text-title-black">
            <span>
              Un <span className="font-medium text-isei-blue ">
                gran ideal
              </span>
            </span>
            <span>
              construye un
            </span>
            <motion.span
              className="text-white px-2 lg:px-4 w-fit pb-1 lg:pb-3 mt-2 lg:mt-3 font-medium"
              initial={{ background: 'linear-gradient(90deg, #84cc16 50%, transparent 50%)', backgroundSize: '200% 100%', backgroundPosition: '100% 0' }}
              animate={{ backgroundPosition: '0% 0' }}
              transition={{ duration: 1.2, ease: 'backOut' }}
            >
              mundo mejor
            </motion.span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-500">
            En el año 1986 creamos la Fundación para que actúe como un espacio de contención para niños y jóvenes de la Ciudad de Neuquén a través de la práctica de deporte y el refuerzo de los valores a través del mismo; valores que al día de hoy siguen vigentes en los espacios educativos y recreativos.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-[175px_175px_175px] col-span-1 lg:col-span-2 gap-4 lg:gap-8 w-full z-20">
          <div className="flex flex-col justify-center">
            <img className="shadow-2xl bg-gray-200 w-full aspect-[9/15] rounded-xl object-cover" src="https://picsum.photos/800/600" alt="Stock Image 1" />
          </div>
          <div className="flex flex-col justify-end gap-4 lg:gap-8">
            <img className="shadow-2xl bg-gray-200 w-full aspect-[9/15] rounded-xl object-cover" src="https://picsum.photos/900/600" alt="Stock Image 2" />
            <img className="shadow-2xl bg-gray-200 w-full aspect-[9/15] rounded-xl object-cover" src="https://picsum.photos/800/700" alt="Stock Image 3" />
          </div>
          <div className="flex flex-col gap-4 lg:gap-8">
            <img className="shadow-2xl bg-gray-200 w-full aspect-[9/15] rounded-xl object-cover" src="https://picsum.photos/850/600" alt="Stock Image 4" />
            <img className="shadow-2xl bg-gray-200 w-full aspect-[9/15] rounded-xl object-cover" src="https://picsum.photos/800/650" alt="Stock Image 5" />
          </div>
        </div>
      </div>
    </section>
  )
}