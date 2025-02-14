import { motion } from "motion/react"

export function Logos() {
  return (
    <div className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }} className="text-center text-4xl text-gray-900">
          Contamos con el  <motion.span
            className="w-fit pb-2 px-2"
            initial={{
              background: 'linear-gradient(90deg, #7f3894 50%, transparent 50%)',
              backgroundSize: '200% 100%',
              backgroundPosition: '100% 0',
              color: '#ffffff00',
            }}
            animate={{ backgroundPosition: '0% 0', color: '#ffffffff' }}
            transition={{ duration: 1.2, delay: 0.4, ease: 'backOut' }}
          >
            apoyo
          </motion.span> de
        </motion.h2>
        <div className="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none ">
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            alt="Transistor"
            src="https://fundacionnqnoeste.com/imagenes/mediacion_apoyo_logo1.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            alt="Reform"
            src="https://fundacionnqnoeste.com/imagenes/mediacion_apoyo_logo2.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            alt="Tuple"
            src="https://fundacionnqnoeste.com/imagenes/mediacion_apoyo_logo3.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            alt="SavvyCal"
            src="https://fundacionnqnoeste.com/imagenes/mediacion_apoyo_logo4.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            alt="Statamic"
            src="https://fundacionnqnoeste.com/imagenes/mediacion_apoyo_logo5.png"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            alt="Statamic"
            src="https://fundacionnqnoeste.com/imagenes/mediacion_apoyo_logo6.png"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>
  )
}
