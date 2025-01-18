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
      <section className="max-w-screen-xl flex justify-center items-center lg:items-start mx-auto flex-col text-center lg:text-start w-full z-40">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light text-white">
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
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center bg-white rounded-full p-1 mt-10">
          <SearchIcon className="size-5 ms-3 me-2 text-gray-400" />
          <input
            type="text"
            className="h-full w-[300px] px-3 py-2 text-gray-700 focus:outline-none"
            placeholder="Buscar..."
          />
          <button className="bg-[#d0f249] text-black flex text-sm font-medium gap-2 ps-3 items-center rounded-full p-1.5">
            Search <span className="bg-black text-white rounded-full p-0.5"> <ArrowRightIcon /></span>
          </button>
        </motion.div> */}
      </section>
    </main>
  )
}