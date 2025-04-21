import { MailIcon } from "../../icons/MailIcon";
import { Whatsapp } from "../../icons/Whatsapp";

export function Mentes() {
  return (
    <div className="max-w-screen-xl mx-auto my-24 px-4 sm:px-6 lg:px-8">
      <div className="lg:col-start-1 lg:grid lg:w-full lg:grid-cols-2 lg:gap-x-8">
        <div className="col-span-2 flex flex-col mb-8">
          <h1 className="text-3xl text-start font-semibold tracking-tight text-gray-900">
            Mentes de servicio
          </h1>
          <p className="text-gray-700 mt-2 text-lg">
            ¿Qué significa tener una mentalidad de servicio? ¿Cómo impacta en nuestra comunidad?
          </p>
        </div>

        <div className="lg:max-w-xl text-lg text-gray-700 text-balance">
          <p className="mt-6">
            En <strong>Mentes de Servicio</strong> exploramos estas preguntas junto a personas y organizaciones que trabajan cada día por un cambio positivo.
          </p>
          <p className="mt-6">
            A través de conversaciones abiertas y enriquecedoras, damos voz a quienes impulsan proyectos sociales, construyen puentes y generan impacto en su entorno.
          </p>
        </div>

        <div className="lg:max-w-xl text-lg text-gray-700 text-balance">
          <p className="mt-6">
            <strong>Sumate a la conversación</strong>
            <br />
            Si tenés un proyecto o iniciativa ligada a la transformación social y querés compartirlo, escribinos a:
          </p>
          <div className="flex space-x-4 mt-6">
            <a
              href="mailto:fundacionnqnoeste@gmail.com"
              className="flex text-sm items-center gap-2 px-2 py-1 bg-isei-blue text-white font-medium rounded-md hover:bg-isei-dark"
            >
              <MailIcon className="size-6" /> Correo electrónico
            </a>
            <a
              href="https://wa.me/542995228627"
              target="_blank"
              rel="noopener noreferrer"
              className="flex text-sm items-center gap-2 px-2 py-1 bg-green-500 text-white font-medium rounded-md hover:bg-green-600"
            >
              <Whatsapp className="size-6" /> Whatsapp
            </a>
          </div>
          <p className="mt-4 italic text-base">
            ¡Te esperamos para seguir construyendo juntos una comunidad más comprometida y solidaria!
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center text-center justify-center max-w-screen-md mx-auto mt-16 py-3 px-4">
        <h3 className="text-2xl">Mirá el streaming en vivo</h3>
        <p className="text-lg text-gray-700 mt-4">
          Todos los miércoles de <span className="bg-sky-500 text-white px-2 py-1">10 a 12 hs</span> en el
          canal de{" "}
          <a
            className="hover:underline underline-offset-4 hover:text-black font-medium cursor-pointer"
            target="_blank"
            href="https://www.youtube.com/@institutosuperiorisei6086"
          >
            YouTube de ISEI
          </a>
        </p>
      </div>
      <div className="max-w-screen-md h-1 bg-sky-500 mx-auto mt-0"></div>
    </div>
  );
}