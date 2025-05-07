import React, { useState, useEffect } from "react";
import { runCode } from "../hooks/useRunCode";
import { formatDate } from "../../lib/tmn";
import { color } from "motion/react";


export const PopularArticles = () => {
  const [articles, setArticles] = useState([]);
  const categoryColors =
  {
    1: "bg-colegio",
    2: "bg-isei-blue",
    3: "bg-deporte",
    4: "bg-comunicacion",
    5: "bg-yellow-500",
    6: "bg-mediacion",
    7: "bg-lime-400",
  }



  useEffect(() => {
    const fetchArticles = async () => {
      const response = await runCode('-sl news.id, title, publish_date, short_description, featured_image_url, category_id, categories.id, categories.name -fr news -ij categories -o categories.id -ig news.category_id -wr is_popular[1] -ob news.id -ds -lt 4;');
      const fetchedArticles = response.map((article) => ({
        id: article.id,
        title: article.title,
        date: formatDate(article.publish_date).fechaCarta,
        description: article.short_description,
        imageUrl: article.featured_image_url,
        categoryId: article.category_id,
        category: article.name,
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
          .filter((article, index) => index === 0)
          .map((article) => (
            <a href={`/noticias/${article.id}`} key={article.id} className="flex flex-col h-full">
              <div
                className="bg-gray-300 aspect-[7/6] w-full mb-5 relative"
                style={{ backgroundImage: `url(${article.imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
                <span className={`absolute text-white ${categoryColors[article.categoryId]} text-sm px-2 py-[1px] rounded-full top-4 right-4`}>{article.category}</span>
              </div>
              <p className="text-sm text-gray-500">{article.date}</p>
              <div className="mt-auto">
                <h3 className="text-3xl mt-2">{article.title}</h3>
                <p className="text-gray-700 text-lg mt-2 line-clamp-2">{article.description}</p>
              </div>
            </a>
          ))}

        {/* Artículos secundarios */}
        <div className="flex flex-col space-y-6">
          {articles
            .filter((article, index) => index !== 0)
            .map((article) => (
              <a href={`/noticias/${article.id}`} key={article.id} className="grid gap-5 grid-cols-2">
                <div
                  className="bg-gray-300 w-full aspect-[4/3] mr-4 relative"
                  style={{ backgroundImage: `url(${article.imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
                >
                  <span className={`absolute text-white ${categoryColors[article.categoryId]} text-sm px-2 py-[1px] rounded-full top-4 right-4`}>{article.category}</span>

                </div>
                <div className="flex relative flex-col justify-center">
                  <p className="text-sm absolute top-0 text-gray-500">{article.date}</p>
                  <h4 className="text-sm lg:text-2xl font-medium">{article.title}</h4>
                  <p className="text-gray-700 text-base mt-2 line-clamp-2">{article.description}</p>
                </div>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};
