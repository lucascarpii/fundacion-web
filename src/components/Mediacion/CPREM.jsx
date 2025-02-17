import { MailIcon } from "../../icons/MailIcon";

export function CPREM() {
  return (
    <div className="max-w-screen-xl mx-auto my-24 px-4 sm:px-6 lg:px-8">
      <div className="lg:col-start-1 lg:grid lg:w-full lg:grid-cols-2 lg:gap-x-8">

        <h1 className="mt-2 col-span-2 mb-12 text-3xl text-center font-semibold tracking-tight text-gray-900">
          Centro de Prácticas Restaurativas y Mediación Neuquén Oeste (CPREM)
        </h1>
        <div className="lg:max-w-xl text-lg text-gray-700 text-balance">
          <p className="mt-6">
            En el <strong>CPREM</strong> trabajamos para fortalecer los lazos comunitarios a través de la capacitación y la resolución pacífica de conflictos.
          </p>
          <p className="mt-6">
            Nuestro centro ofrece espacios de capacitación en <strong>Prácticas Restaurativas</strong> para entidades y organismos públicos y privados, en articulación con el <strong>Instituto Superior ISEI</strong>, promoviendo un clima de aprendizaje abierto y colaborativo.
          </p>
        </div>

        <div className="lg:max-w-xl text-lg text-gray-700 text-balance">
          <p className="mt-6">
            Además, brindamos a la comunidad <strong>facilitación de círculos restaurativos y mediación comunitaria</strong> de manera gratuita, generando oportunidades para el diálogo, el compromiso con la reparación del daño y el fortalecimiento del tejido social.
          </p>
          <p className="mt-6">
            Si estás interesado en nuestras <strong>capacitaciones</strong> o necesitas nuestra intervención en un conflicto, no dudes en <strong>contactarnos</strong>.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-4 sm:flex-row-reverse items-center justify-between max-w-screen-md mx-auto mt-16 py-4 px-4">
        <a href="mailto:fundacionnqnoeste@gmail.com" className="flex hover:underline underline-offset-4 items-center gap-3 text-isei-nav hover:text-[#b15dd6] transition-colors">
          <MailIcon className="size-7" />
          <span className="text-lg md:text-base font-medium">fundacionnqnoeste@gmail.com</span>
        </a>
        <div className="text-center font-medium text-lg text-gray-700 mt-4 sm:mt-0">
          Lunes a viernes de <span className="bg-[#b15dd6] text-white px-2 py-1">9 a 13 hs</span>
        </div>
      </div>
      <div className="max-w-screen-md h-1 bg-[#b15dd6] mx-auto mt-0"></div>
    </div>
  )
}