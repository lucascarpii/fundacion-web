import React, { useState } from "react";
import { ArrowRightIcon } from "../../icons/ArrowRight";

export const LatestArticles = () => {
  const articles = [
    {
      id: 1,
      title: "Exploring Potential and Challenges in Global Agriculture.",
      date: "October 23, 2023",
      description:
        "Uncovering the Vast Potential and Complex Challenges in the World of Global Agriculture.",
    },
    {
      id: 2,
      title: "Bringing Change in the Livestock Industry.",
      date: "October 23, 2023",
      description:
        "Revealing Innovations, Challenges and Transformation Potential that Bring Positive.",
    },
    {
      id: 3,
      title: "Potential and Constraints Faced in Production Quality.",
      date: "October 23, 2023",
      description:
        "Discusses Challenges and Opportunities in Achieving High Production Standards.",
    },
    {
      id: 4,
      title: "Achieving High Productivity from Your Own Home Garden.",
      date: "October 23, 2023",
      description:
        "A Practical Guide to Achieving Satisfactory Results from Plants Grown In Your Home.",
    },
    {
      id: 5,
      title: "The Best Guide to Planting Seeds with Optimal Results.",
      date: "October 23, 2023",
      description:
        "Effective Strategies and Techniques to Achieve Healthy and Productive Plant Growth.",
    },
    {
      id: 6,
      title: "Strategies for Caring for Your Garden More Efficiently and Productively.",
      date: "October 23, 2023",
      description:
        "An approach that improves plant performance and makes garden management easier.",
    },
  ];

  const articlesPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const paginatedArticles = articles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const getVisiblePages = () => {
    const visiblePages = 5;
    const pages = [];

    // Lógica para centrar las páginas alrededor de la actual
    let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let endPage = Math.min(totalPages, startPage + visiblePages - 1);

    // Ajustar si hay menos páginas al principio o al final
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
      <h2 className="text-4xl mb-6">Latest Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedArticles.map((article) => (
          <div key={article.id} className="flex flex-col">
            <div className="bg-gray-300 w-full aspect-[4/3] mb-4"></div>
            <p className="text-sm text-gray-500">{article.date}</p>
            <h3 className="text-xl font-semibold mt-2">{article.title}</h3>
            <p className="text-gray-700 mt-2">{article.description}</p>
          </div>
        ))}
      </div>

      {/* Paginación */}
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
              className={`size-8 text-sm font-medium rounded-full ${
                currentPage === page
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
    </div>
  );
  
};
