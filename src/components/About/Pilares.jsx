export const Pilares = () => {
  return (
    <section className="relative min-h-dvh text-white pt-32 pb-20">
      <div className="w-2/12 aspect-square rounded-full bg-[#d0f502]/40 absolute top-44 right-32 blur-[150px]"></div>
      <div className="w-4/12 aspect-square rounded-full bg-indigo-600 absolute top-[30rem] right-[20rem] blur-[300px]"></div>
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 xl:px-0 grid grid-cols-1 md:grid-cols-2 gap-8">
        <h2 className="text-4xl md:text-6xl/tight max-w-lg mt-6 bg-gradient-to-br from-white from-40% h-fit to-white/40 inline-block text-transparent bg-clip-text">
          Los <span className="text-[#d0f500]">Principios</span> que nos definen
        </h2>

        <div className="flex flex-col gap-10 w-full relative z-20">
          <article className="max-w-xl">
            <h3 className="text-white/50 uppercase text-lg font-medium mb-2">Visión</h3>
            <div className="text-white text-2xl md:text-3xl font-medium tracking-wide">
              <p className="mb-6 text-pretty">
                La convicción de que un mundo mejor es posible, nos impulsa a ser pacificadores y sembradores de vida, esperanza y amor.
              </p>
              <p className="mb-6 text-pretty">
                Si cada persona, en lo individual, es transformada, puede generar un cambio en su familia, en su localidad, en su país y hasta en el mundo entero.
              </p>
            </div>
          </article>
          <article className="max-w-xl">
            <h3 className="text-white/50 uppercase text-lg font-medium mb-2">Misión</h3>
            <div className="text-white text-2xl md:text-3xl font-medium tracking-wide">
              <p className="mb-6 text-pretty">
                Brindar educación de todos los niveles, impulsando desde la niñez los valores humanos como el respeto por la vida, el compañerismo y la solidaridad.
              </p>
              <p className="mb-6 text-pretty">
                Solucionar conflictos, mediante el dialogo y la escucha activa necesaria.
              </p>
            </div>
          </article>
        </div>

      </div>

    </section>
  );
};
