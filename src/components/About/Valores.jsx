export function Valores() {
  const valores = [
    {
      nombre: "Acompañamiento",
      descripcion: "Brindamos apoyo constante en cada etapa del camino, asegurando que nadie se sienta solo en su crecimiento.",
      color: "bg-accompany bg-cover",
    },
    {
      nombre: "Respeto",
      descripcion: "Valoramos la diversidad y fomentamos un ambiente donde todas las opiniones y perspectivas son apreciadas.",
      color: "bg-gradient-to-b from-zinc-800/50 to-black/80",
    },
    {
      nombre: "Compasión",
      descripcion: "Nos preocupamos genuinamente por el bienestar de los demás, actuando siempre con sensibilidad y humanidad.",
      color: "bg-compasion bg-cover",
    },
    {
      nombre: "Empatía",
      descripcion: "Buscamos comprender y compartir los sentimientos de los demás, fortaleciendo lazos de confianza.",
      color: "bg-gradient-to-b from-zinc-800/50 to-black/80",
    },
    {
      nombre: "Igualdad",
      descripcion: "Promovemos un entorno en el que todos tengan las mismas oportunidades de desarrollo y éxito.",
      color: "bg-igualdad bg-cover",
    },
    {
      nombre: "Solidaridad",
      descripcion: "Fomentamos la colaboración y el apoyo mutuo para construir una comunidad fuerte y unida.",
      color: "bg-gradient-to-b from-zinc-800/50 to-black/80",
    }
  ]
  return (
    <section className="relative pb-32 px-6 xl:px-0">
      <div className="w-4/12 aspect-square rounded-full bg-[#3753b0] absolute top-[44rem] left-[12rem] blur-[250px]"></div>
      <div className="flex flex-col items-center text-white relative z-20">
        <h2 className="text-4xl md:text-6xl mb-8">Nuestros <span className="text-[#d0f500]">valores</span></h2>
        <p className="max-w-lg text-center text-xl">
          Nos interesamos especialmente en el bienestar de cada persona, impulsándola para que pueda crecer, desarrollarse y encontrar su potencial en aquello que la haga feliz y plena.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-20 max-w-screen-xl mx-auto w-full">
          {valores.map((valor, index) => (
            <div key={index} className={`${valor.color} relative p-10 rounded-3xl overflow-hidden`}>
              {valor.color === "bg-gradient-to-b from-zinc-800/50 to-black/80" ?
                <>
                  <div className="absolute -top-24 -right-24 w-40 aspect-square rounded-full bg-sky-200 blur-[100px]"></div>
                </>
                :
                <div className="absolute inset-0 w-full bg-gradient-to-t from-black/80 to-black/10"></div>
              }
              <div className="relative z-10 flex flex-col justify-between h-full gap-10">
                <div className="flex flex-col justify-end gap-10">
                  <h3 className="text-2xl md:text-4xl font-medium bg-gradient-to-br from-white from-40% h-fit to-white/40 inline-block text-transparent bg-clip-text">{valor.nombre}</h3>
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