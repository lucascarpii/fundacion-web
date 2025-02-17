import { motion } from "motion/react"
import { DownloadIcon } from "../../icons/DownloadIcon"

export function Hero2() {
  return (
    <div className="bg-isei-footer pt-[90px] pb-10 overflow-hidden sm:px-6  lg:px-8">
      <div
        className="mx-auto max-w-7xl"
      >
        <motion.div
          className="relative isolate px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 justify-between lg:pt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </motion.svg>
          <div
            className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left"
          >
            <h1 className="text-5xl md:text-6xl text-nowrap text-center md:text-start lg:text-[65px] text-white">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Un <span className="font-normal bg-gradient-to-br from-mediacion from-50% to-mediacion/20 text-transparent bg-clip-text">mejor acuerdo</span>
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                para todos
              </motion.span>
            </h1>
            <motion.div
              className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.a
                href='https://fundacionnqnoeste.com/appmediadores/mu.apk'
                target='_blank'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className='w-fit justify-center select-none cursor-pointer flex items-center gap-4 border-2 text-white border-white transition-colors duration:200 px-6 py-2 rounded-lg hover:bg-white hover:text-black'>
                App para mediadores urbanos <DownloadIcon />
              </motion.a>
            </motion.div>
          </div>
          <motion.div
            className="flex items-center justify-center lg:justify-end w-full -mr-24 mt-10 lg:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <img
              alt="App screenshot"
              src="/enca_mediacion.jpg"
              width={1824}
              height={1080}
              className="w-full aspect-video lg:aspect-[5/3.5] object-cover max-w-lg rounded-2xl bg-white/5 ring-4 ring-white/10"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
