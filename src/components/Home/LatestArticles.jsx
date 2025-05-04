import React, { useState, useEffect } from "react";
import { ArrowRightIcon } from "../../icons/ArrowRight";
import { runCode } from "../hooks/useRunCode";
import { formatDate } from "../../lib/tmn";

export const LatestArticles = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await runCode('-st news -wr is_popular[0];');
      const fetchedArticles = response.map((article) => ({
        id: article.id,
        title: article.title,
        date: formatDate(article.publish_date).fechaCarta,
        description: article.short_description,
        imageUrl: article.featured_image_url,
      }));
      setArticles(fetchedArticles);
    };

    fetchArticles();
  }, []);

  const articlesPerPage = 3;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const paginatedArticles = articles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const getVisiblePages = () => {
    const visiblePages = 5;
    const pages = [];

    let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let endPage = Math.min(totalPages, startPage + visiblePages - 1);

    if (endPage - startPage < visiblePages - 1) {
      startPage = Math.max(1, endPage - visiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 pt-8 pb-20">
      <h2 className="text-4xl mb-6">Últimas noticias</h2>
      {articles.length === 0 ? (
        <p className="text-gray-500 text-center">No hay noticias disponibles en este momento.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedArticles.map((article) => (
              <div key={article.id} className="flex flex-col">
                <div
                  className="bg-gray-300 w-full aspect-[4/3] mb-4"
                  style={{ backgroundImage: `url(${article.imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
                ></div>
                <p className="text-sm text-gray-500">{article.date}</p>
                <h3 className="text-xl font-semibold mt-2">{article.title}</h3>
                <p className="text-gray-700 mt-2">{article.description}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-12">
            <button
              className="rounded-full border px-4 py-2.5 font-medium flex items-center justify-center gap-2 w-32 text-sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ArrowRightIcon className="rotate-180 size-5" />
              Previous
            </button>

            <div className="flex items-center justify-center space-x-2">
              {getVisiblePages().map((page, index) => (
                <button
                  key={index}
                  className={`size-8 text-sm font-medium rounded-full ${currentPage === page
                    ? "bg-lime-300"
                    : "hover:bg-gray-200"
                    }`}
                  onClick={() => handlePageClick(page)}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              className="rounded-full border px-4 py-2.5 font-medium flex items-center justify-center gap-2 w-32 text-sm"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
              <ArrowRightIcon className="size-5" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};
