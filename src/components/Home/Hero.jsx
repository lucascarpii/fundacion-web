import { motion } from "motion/react";
import { ArrowRightIcon } from "../../icons/ArrowRight";
import { SearchIcon } from "../../icons/SearchIcon";

export function Hero() {
  return (
    <main className="w-full min-h-dvh bg-hero-image bg-no-repeat bg-cover bg-center flex items-center relative px-5 lg:px-20 lg:pt-10">
      <div className="absolute w-full left-0 bottom-8 flex justify-center z-10">
        <div className="max-w-screen-xl mx-auto w-full flex justify-end">
          <button id="explore" className="flex items-center gap-2 tracking-wide font-light text-white">
            Explorar más <span className="bg-white text-black rounded-full p-1 rotate-90"> <ArrowRightIcon /></span>
          </button>
        </div>
      </div>

      <div id="overlay" className="bg-isei-footer/60 absolute inset-0"></div>
      <section className="max-w-screen-xl flex justify-center items-center lg:items-start mx-auto text-center flex-col lg:text-start w-full z-40">
        <h1 className="text-4xl scale-110 sm:text-6xl md:text-7xl lg:scale-100 lg:text-8xl font-light text-white">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            La <span className="font-medium text-sky-400">educación</span>
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            como factor principal
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Para la <span className="font-medium text-sky-400">pacificación</span>
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            y el <span className="font-medium text-sky-400">progreso</span>
          </motion.span>
        </h1>
      </section>
    </main>
  )
}