export function History() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg className="w-full -mt-10 lg:-mt-40 absolute h-full opacity-20 text-base-400/70 [mask-image:radial-gradient(50rem_80rem_at_top,white,transparent)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern height="200" id="grid-pattern" patternUnits="userSpaceOnUse" width="200">
              <path d="M 200 0 L 0 0 0 200" stroke="currentColor" fill="none" strokeWidth="1"></path>
            </pattern>
          </defs>
          <rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>
        </svg>
      </div>

      <div className=" max-w-screen-xl mx-auto">
        <div className=" lg:col-start-1 lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 ">

          <h1 className="mt-2 col-span-2 mb-6 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Compromiso y Trayectoria
          </h1>
          <div className="lg:max-w-lg text-lg/7 text-gray-700">
            <p className="mt-6">
              Fomentar el compañerismo, la solidaridad y el amor en el desarrollo de todas sus actividades es la misión de nuestra institución.
            </p>
            <p className="mt-6">
              Hacia el 2005 se abrieron las puertas del Nivel Medio para adultos, destinado a aquellas personas mayores de 18 años que fueron dejados afuera del sistema educativo y que pretendían contar con dicho título académico, siendo la primera área educativa de la Fundación.
            </p>
          </div>

          <div className="max-w-xl text-lg/7 text-gray-700">
            <p className="mt-6">
              Finalmente, y por la gran demanda de las propias familias de la comunidad, se incorporaron otras propuestas educativas propiamente avaladas por el Consejo Provincial de Educación e inscriptas como escuelas públicas de gestión social y privada.
            </p>
            <p className="mt-6">
              Es así como hoy la Fundación Neuquén Oeste cuenta con nivel inicial, nivel medio, medio para adultos, Instituto Superior de Estudios Interdisciplinarios, gimnasio, radio, área comunitaria y el Centro de Mediación Comunitaria.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
