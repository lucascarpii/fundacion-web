export function Info() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center mb-24 gap-6 lg:gap-20 max-w-screen-lg mx-auto px-6">
      <div className="flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-10 lg:gap-4 items-center w-full justify-center">
        <img src="/mediacion_logo_enca.png" alt="" className="h-28 object-cover" />
        <div className="text-center sm:text-lg bg-[#b25cd6] text-white px-6 py-2">
          Lunes a viernes
          <br />
          de 9 a 13 hs
        </div>
      </div>
      <div className="max-w-3xl text-lg/7 text-gray-700 mt-6 lg:mt-0">
        <p className="text-pretty">
          Creamos el <strong>Centro de Mediación Comunitaria</strong> en la Fundación Neuquén Oeste a partir de la necesidad de solucionar las diferencias vecinales, escolares y familiares en el oeste de la ciudad con métodos participativos de resolución de conflictos.
        </p>
        <p className="mt-4 text-pretty">
          Se pretende que, a partir del diálogo, toda situación de conflicto entre dos personas o familias pueda ser resuelta y que se encuentre una solución en pos del bienestar de todos.
        </p>
      </div>
    </div>
  )
}