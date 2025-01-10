import React from "react";

export const PopularArticles = () => {
  const articles = [
    {
      id: 1,
      title: "Mejor Estrategia para Lograr una Cosecha Rentable.",
      date: "23 de octubre de 2023",
      description:
        "Las estrategias óptimas para lograr cosechas rentables implican un enfoque integral en la gestión agrícola, la selección de variedades de cultivos adecuadas y la implementación de prácticas eficientes.",
      isMain: true,
    },
    {
      id: 2,
      title:
        "Cosecha Abundante en Tierra Agrícola Muestra Éxito.",
      date: "23 de octubre de 2023",
      isMain: false,
    },
    {
      id: 3,
      title:
        "Últimas Innovaciones que Aumentan la Producción y Calidad de la Leche.",
      date: "23 de octubre de 2023",
      isMain: false,
    },
    {
      id: 4,
      title:
        "Mejores Prácticas para Cosechar Verduras en Plantaciones.",
      date: "23 de octubre de 2023",
      isMain: false,
    },
  ];
  

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-20">
      <h2 className="text-4xl mb-6">Novedades</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Artículo principal */}
        {articles
          .filter((article) => article.isMain)
          .map((article) => (
            <div key={article.id} className="flex flex-col h-full">
              <div className="bg-gray-300 aspect-[7/6] w-full mb-5"></div>
              <p className="text-sm text-gray-500">{article.date}</p>
              <div className="mt-auto">
                <h3 className="text-3xl mt-2">{article.title}</h3>
                <p className="text-gray-700 text-lg mt-2">{article.description}</p>
              </div>
            </div>
          ))}

        {/* Artículos secundarios */}
        <div className="flex flex-col space-y-6">
          {articles
            .filter((article) => !article.isMain)
            .map((article) => (
              <div key={article.id} className="grid gap-5 grid-cols-2">
                <div className="bg-gray-300 w-full aspect-[4/3] mr-4"></div>
                <div className="flex relative flex-col justify-center">
                  <p className="text-sm absolute top-0 text-gray-500">{article.date}</p>
                  <h4 className="text-2xl font-medium">{article.title}</h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
