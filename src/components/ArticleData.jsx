import { useEffect, useState } from "react";
import { runCode } from "./hooks/useRunCode";
import { formatDate } from "../lib/tmn";

export function ArticleData({ id }) {
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    const fetchArticleData = async () => {
      const response = await runCode(`-st news -wr id[1]`);
      const fetchedArticleData = response.map((article) => ({
        id: article.id,
        title: article.title,
        date: formatDate(article.publish_date).fechaCarta,
        description: article.short_description,
        imageUrl: article.featured_image_url,
      }));
      setArticleData(fetchedArticleData);
    };

    fetchArticleData();
    console.log(articleData);
  }, []);
  return (
    <div> </div>
  )
}