import { Facebook } from "../../icons/Facebook";
import { MailIcon } from "../../icons/MailIcon";
import { Whatsapp } from "../../icons/Whatsapp";

export function Blockquote() {
  return (
    <section className="pb-20 flex flex-col-reverse md:flex-col max-w-screen-xl mx-auto gap-2 px-4">
      {/* <div className="mb-4 mt-8 md:mt-0">
        <ul className="flex gap-6 items-center flex-col md:flex-row justify-between px-4">
          <li>
            <a href="https://www.facebook.com/ISEINQN/" target="_blank" rel="noopener noreferrer" className="flex hover:underline underline-offset-4 items-center gap-3 text-isei-nav hover:text-isei-blue transition-colors">
              <Facebook className="size-7" />
              <span className="text-lg md:text-base font-medium">Visítanos en Facebook</span>
            </a>
          </li>
          <li>
            <a href="mailto:institutosuperiorisei@gmail.com" className="flex hover:underline underline-offset-4 items-center gap-3 text-isei-nav hover:text-teal-600 transition-colors">
              <MailIcon className="size-7" />
              <span className="text-lg md:text-base font-medium">institutosuperiorisei@gmail.com</span>
            </a>
          </li>
        </ul>
      </div> */}
      <div className=" py-10 sm:pb-10 flex flex-col gap-4 px-4">
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
          <li>
            <a className="w-full flex flex-col" href="https://wa.me/542996156202">
              <div className='flex items-center border-l border-isei-blue text-black font-medium py-2 px-4 gap-2'>
                <Whatsapp /> Whatsapp ISEI
              </div>
              <span className='border-l border-zinc-200 text-gray-500 p-4'>
                +54 299 6156202
              </span>
            </a>
          </li>
          <li>
            <a className="w-full flex flex-col" href="https://wa.me/542996348740">
              <div className='flex items-center border-l border-isei-blue text-black font-medium py-2 px-4 gap-2'>
                <Whatsapp /> Tec. Sup. en Deporte Social
              </div>
              <span className='border-l border-zinc-200 text-gray-500 p-4'>
                +54 299 6348740
              </span>
            </a>
          </li>
          <li>
            <a className="w-full flex flex-col" href="mailto:institutosuperiorisei@gmail.com">
              <div className='flex items-center border-l border-isei-blue text-black font-medium py-2 px-4 gap-2'>
                <MailIcon />  Correo electrónico
              </div>
              <span className='border-l border-zinc-200 text-gray-500 p-4'>
                institutosuperiorisei@gmail.com
              </span>
            </a>
          </li>
          <li className='w-full flex flex-col items-center justify-center'>
            <div className='bg-blue-500 rounded-md text-white font-medium py-2 px-4 gap-4 flex items-center'>
              <a className="flex items-center gap-1" href="https://www.facebook.com/ISEINQN/" target="_blank" >
                <Facebook /> Visitanos en Facebook
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="bg-isei-footer rounded-xl px-4 py-6 md:py-8 lg:py-8 flex flex-col gap-4 relative overflow-hidden">
        <div className="absolute h-2/3 aspect-square rounded-full bg-isei-blue -left-5 -bottom-16 blur-[120px]"></div>
        <div className="absolute h-80 aspect-square rounded-full bg-isei-teal -right-40 top-2 blur-[100px]"></div>
        <figure className="mx-auto max-w-screen-md text-center z-10">
          <svg className="size-8 mx-auto mb-8 text-white/50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-white text-center text-lg md:text-xl italic text-pretty">
              “En el ISEI, educar es mucho más que transmitir y construir conocimientos: es estimular y potenciar personas comprometidas con el diálogo, el respeto y la construcción de una comunidad restaurativa.”
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-10 space-x-3">
            <img className="size-8 rounded-full" src="https://www.fundacionkonex.org/custom/web/data/imagenes/repositorio/2010/6/1/979/20160316110438d736bb10d83a904aefc1d6ce93dc54b8.jpg" alt="Jose Luis Lozano" />
            <div className="flex flex-col md:flex-row items-center md:divide-x divide-zinc-500">
              <cite className="md:pr-3 font-medium text-zinc-200">José Luis Lozano.</cite>
              <cite className="md:pl-3 text-sm text-white/60">Rector</cite>
            </div>
          </figcaption>
        </figure>
      </div>

    </section>
  );
}
