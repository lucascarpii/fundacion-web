import { motion } from "motion/react";
import React, { useState } from 'react';
import { Modal } from '../ui/Modal';

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
        <rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>
      </svg>
      <div className='absolute w-full h-full bg-hero-radial-gradient'></div>

      <div className='max-w-screen-xl mx-auto py-20 lg:py-28 flex flex-col justify-center lg:grid px-8 lg:grid-cols-5 min-h-dvh gap-4 xl:gap-10'>
        <div className="h-fit lg:h-full flex flex-col justify-center z-10 col-span-1 lg:col-span-3 gap-6 lg:gap-10">
          <h1 className="text-5xl sm:text-8xl lg:text-7xl xl:text-8xl flex flex-col font-light text-title-black">
            <span>
              Un <span className="font-medium text-isei-blue ">gran ideal</span>
            </span>
            <span>construye un</span>
            <motion.span
              className="text-white px-2 lg:px-4 w-fit pb-1 lg:pb-3 mt-2 lg:mt-3 font-medium"
              initial={{ background: 'linear-gradient(90deg, #84cc16 50%, transparent 50%)', backgroundSize: '200% 100%', backgroundPosition: '100% 0' }}
              animate={{ backgroundPosition: '0% 0' }}
              transition={{ duration: 1.2, ease: 'backOut' }}
            >
              mundo mejor
            </motion.span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-500 max-w-xl xl:max-w-2xl text-pretty">
            En el año 1986 creamos la Fundación para que actúe como un espacio de contención para niños y jóvenes de la Ciudad de Neuquén a través de la práctica de deporte y el refuerzo de los valores a través del mismo; valores que al día de hoy siguen vigentes en los espacios educativos y recreativos.
          </p>
        </div>
        <div className="w-full aspect-video lg:aspect-[0] lg:mt-10 lg:col-span-2 flex items-center justify-center z-20 relative bg-hero-image bg-cover bg-center rounded-3xl overflow-hidden rounded-tr-none">
          <div className="absolute inset-0 bg-black/40"></div>
          <button
            className="bg-lime-200 aspect-square text-lime-600 px-4 py-2 rounded-full z-10"
            onClick={openModal}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
            </svg>

          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <iframe
          className="w-full relative aspect-video z-10"
          src="30aniversario.mp4"
          title="Video Fundación Neuquén Oeste"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Modal>
    </section>
  );
}