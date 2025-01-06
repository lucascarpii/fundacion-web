import React from "react";

export const PopularArticles = () => {
  const articles = [
    {
      id: 1,
      title: "Best Strategy to Achieve Profitable Harvest.",
      date: "October 23, 2023",
      description:
        "Optimal strategies for achieving profitable harvests involve a comprehensive approach to farm management, selection of appropriate crop varieties, implementation of efficient practices.",
      isMain: true,
    },
    {
      id: 2,
      title:
        "Abundant Harvest from Agricultural Farm Land Shows Success.",
      date: "October 23, 2023",
      isMain: false,
    },
    {
      id: 3,
      title:
        "Latest Innovations Increasing Milk Production and Quality.",
      date: "October 23, 2023",
      isMain: false,
    },
    {
      id: 4,
      title:
        "Best Practices in Harvesting Vegetables from Plantations.",
      date: "October 23, 2023",
      isMain: false,
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-20">
      <h2 className="text-4xl mb-6">Popular Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Artículo principal */}
        {articles
          .filter((article) => article.isMain)
          .map((article) => (
            <div key={article.id} className="flex flex-col">
              <div className="bg-gray-300 h-2/3 w-full mb-4"></div>
              <p className="text-sm text-gray-500">{article.date}</p>
              <h3 className="text-3xl mt-2">{article.title}</h3>
              <p className="text-gray-700 text-lg mt-2">{article.description}</p>
            </div>
          ))}

        {/* Artículos secundarios */}
        <div className="flex flex-col space-y-6">
          {articles
            .filter((article) => !article.isMain)
            .map((article) => (
              <div key={article.id} className="grid gap-5 grid-cols-2">
                <div className="bg-gray-300 w-full aspect-video mr-4"></div>
                <div className="flex relative flex-col justify-center">
                  <p className="text-sm absolute top-0 text-gray-500">{article.date}</p>
                  <h4 className="text-xl font-medium">{article.title}</h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
