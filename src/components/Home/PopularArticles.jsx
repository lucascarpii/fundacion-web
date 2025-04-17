import React, { useState, useEffect } from "react";
import { runCode } from "../hooks/useRunCode";

export const PopularArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await runCode('-st news -wr is_popular[1] -lt 4;');
      const fetchedArticles = response.map((article) => ({
        id: article.id,
        title: article.title,
        date: new Date(article.publish_date).toLocaleDateString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        description: article.short_description,
        imageUrl: article.featured_image_url,
        isMain: article.is_popular === "1",
      }));
      setArticles(fetchedArticles);
    };

    fetchArticles();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-20">
      <h2 className="text-4xl mb-6">Novedades</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Artículo principal */}
        {articles
          .filter((article) => article.isMain)
          .map((article) => (
            <div key={article.id} className="flex flex-col h-full">
              <div
                className="bg-gray-300 aspect-[7/6] w-full mb-5"
                style={{ backgroundImage: `url(${article.imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
              ></div>
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
                <div
                  className="bg-gray-300 w-full aspect-[4/3] mr-4"
                  style={{ backgroundImage: `url(${article.imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
                ></div>
                <div className="flex relative flex-col justify-center">
                  <p className="text-sm absolute top-0 text-gray-500">{article.date}</p>
                  <h4 className="text-sm lg:text-2xl font-medium">{article.title}</h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
