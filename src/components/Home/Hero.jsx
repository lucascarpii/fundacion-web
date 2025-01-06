import { motion } from "motion/react";
import { ArrowRightIcon } from "../../icons/ArrowRight";
import { SearchIcon } from "../../icons/SearchIcon";
// import { ArrowDownIcon } from "@heroicons/react/24/outline";

export function Hero() {
  return (
    <main className="w-full min-h-dvh bg-hero-image bg-no-repeat bg-cover bg-center flex items-center relative px-5 lg:px-20 lg:pt-10">
      <div id="overlay" className="bg-black/20 absolute inset-0"></div>
      <section className="max-w-screen-xl flex justify-center items-center lg:items-start mx-auto flex-col text-center lg:text-start w-full z-40">
        <h1 className="font-brico text-6xl sm:text-7xl lg:text-8xl font-normal text-white">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0 }}
          >
            Utilization of technology to
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Support Enviromentally
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Friendly Agriculture
          </motion.span>
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center bg-white rounded-full ps-3.5 p-1 mt-10">
          <SearchIcon className="size-5 text-gray-400" />
          <input type="text" className="h-full w-[300px]" />
          <button className="bg-[#d0f249] text-black flex text-sm font-medium gap-2 ps-3 items-center rounded-full p-1.5">
            Search <span className="bg-black text-white rounded-full p-0.5"> <ArrowRightIcon /></span>
          </button>
        </motion.div>
      </section>
    </main>
  )
}