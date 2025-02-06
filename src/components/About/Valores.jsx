import { MailIcon } from "../../icons/MailIcon";

export function Valores() {
  const valores = [
    {
      nombre: "Acompañamiento",
      descripcion: "Brindamos apoyo constante en cada etapa del camino, asegurando que nadie se sienta solo en su crecimiento.",
      icon: <MailIcon className="size-20" />,
      color: "bg-[#242e8a]",
    },
    {
      nombre: "Respeto",
      descripcion: "Valoramos la diversidad y fomentamos un ambiente donde todas las opiniones y perspectivas son apreciadas.",
      icon: <MailIcon className="size-20" />,
      color: "bg-[#242e8a]",
    },
    {
      nombre: "Compasión",
      descripcion: "Nos preocupamos genuinamente por el bienestar de los demás, actuando siempre con sensibilidad y humanidad.",
      icon: <MailIcon className="size-20" />,
      color: "bg-[#242e8a]",
    },
    {
      nombre: "Empatía",
      descripcion: "Buscamos comprender y compartir los sentimientos de los demás, fortaleciendo lazos de confianza.",
      icon: <MailIcon className="size-20" />,
      color: "bg-[#242e8a]",
    },
    {
      nombre: "Igualdad",
      descripcion: "Promovemos un entorno en el que todos tengan las mismas oportunidades de desarrollo y éxito.",
      icon: <MailIcon className="size-20" />,
      color: "bg-[#242e8a]",
    },
    {
      nombre: "Solidaridad",
      descripcion: "Fomentamos la colaboración y el apoyo mutuo para construir una comunidad fuerte y unida.",
      icon: <MailIcon className="size-20" />,
      color: "bg-[#242e8a]",
    }
  ]
  return (
    <section className="relative pb-32">
      <div className="w-4/12 aspect-square rounded-full bg-[#3753b0] absolute top-[44rem] left-[12rem] blur-[250px]"></div>
      <div className="flex flex-col items-center text-white relative z-20">
        <h2 className="text-6xl mb-8">Nuestros <span className="text-[#d0f500]">valores</span></h2>
        <p className="max-w-lg text-center text-xl">
          Nos interesamos especialmente en el bienestar de cada persona, impulsándola para que pueda crecer, desarrollarse y encontrar su potencial en aquello que la haga feliz y plena.
        </p>
        <div className="grid grid-cols-3 grid-rows-2 gap-2 mt-20 max-w-screen-xl mx-auto w-full">
          {valores.map((valor, index) => (
            <div className="bg-zinc-800/50 relative p-10 rounded-3xl overflow-hidden">
              <div className="absolute -top-24 -right-24 w-40 aspect-square rounded-full bg-sky-200 blur-[100px]"></div>
              <div className={`absolute -bottom-32 -right-0 w-56 aspect-square rounded-full ${valor.color} blur-[60px]`}></div>
              <div className="relative z-10 flex flex-col justify-between h-full gap-10">
                {/* {valor.icon} */}
                <div className="flex flex-col justify-end gap-10">
                  <h3 className="text-3xl font-medium">{valor.nombre}</h3>
                  <p className="text-lg">
                    {valor.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}