import { Facebook } from "../../icons/Facebook";
import { MailIcon } from "../../icons/MailIcon";

export function Blockquote() {
  return (
    <section className="pb-20 flex flex-col-reverse md:flex-col max-w-screen-xl mx-auto gap-2 px-4">
      <div className="mb-4 mt-8 md:mt-0">
        <ul className="flex gap-6 items-center flex-col md:flex-row justify-between px-4">
          <li>
            <a href="https://www.facebook.com/profile.php?id=100063630023391&eid=ARBJSzYAwm33gN1sidIoiD--_Zea6MwuMBUdwo2sl2XQG-EuOMsnqmo_LGSeNWjwnupgDLqjBKcvMUDN#" target="_blank" rel="noopener noreferrer" className="flex hover:underline underline-offset-4 items-center gap-3 text-isei-nav hover:text-isei-blue transition-colors">
              <Facebook className="size-7" />
              <span className="text-lg md:text-base font-medium">Visítanos en Facebook</span>
            </a>
          </li>
          <li>
            <a href="mailto:fundacionnqnoeste@gmail.com" className="flex hover:underline underline-offset-4 items-center gap-3 text-isei-nav hover:text-deporte transition-colors">
              <MailIcon className="size-7" />
              <span className="text-lg md:text-base font-medium">fundacionnqnoeste@gmail.com</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-isei-footer rounded-xl px-4 py-6 md:py-8 lg:py-10 flex flex-col gap-4 relative overflow-hidden">
        <div className="absolute h-2/3 aspect-square rounded-full bg-isei-blue -left-5 -bottom-16 blur-[120px]"></div>
        <div className="absolute h-80 aspect-square rounded-full bg-deporte -right-40 top-2 blur-[100px]"></div>
        <figure className="mx-auto max-w-screen-md text-center z-10">
          <svg className="size-8 mx-auto mb-8 text-white/50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-white text-center text-lg md:text-xl italic text-pretty">
              “Entendemos al deporte como una herramienta indispensable para ayudar a los chicos, a los jóvenes y a las familias a fortalecer los vínculos sociales.”
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-10 space-x-3">
            <div className="flex items-center divide-x divide-zinc-500">
              <cite className="pr-3 font-medium text-zinc-200">Marcelo Paladino.</cite>
              <cite className="pl-3 text-sm text-zinc-400">Director área Deporte</cite>
            </div>
          </figcaption>
        </figure>
      </div>

    </section>
  );
}
