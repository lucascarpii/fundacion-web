import { LinkIcon } from "../../icons/LinkIcon";

export function Banner() {
  return (
    <section className="w-full bg-gradient-to-r from-gray-800 via-red-600 to-red-900 text-white py-[1px]">
      <div className=" py-2 bg-black/50">
        <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto items-center gap-4 md:gap-10">
          <div className="text-lg font-light items-center text-center md:text-left flex flex-col md:flex-row">
            <h3 className="me-2 font-medium">Estamos en vivo! </h3>
            <p className="text-sm">
              Transmitiendo una clase de mentes de servicio.
            </p>
          </div>
          <a href="/" className="flex text-sm items-center gap-3 px-6 py-1.5 bg-black/50 rounded-lg">
            Ir a Ver
            <LinkIcon className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}