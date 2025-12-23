import { useCallback, useEffect, useState } from "react";
import newsIcon from "../../assets/images/miscellaneous/news.svg";
import "../../styles/News.css";
import { Article } from "../../types/type";
const apikey = import.meta.env.VITE_NEWS_API_KEY;

const NewsApp = () => {
  const [newsData, setNewsData] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  const handleFetchNews = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api-news/api/v4/top-headlines?country=in&max=10&apikey=${apikey}&lang=en`
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setNewsData(data.articles || []);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    handleFetchNews();
  }, [handleFetchNews]);

  return (
    <div className="news-container">
      <div className="title">Meanwhile, on Earth…</div>
      <div className="content">
        {loading ? (
          <div className="loading">Loading news...</div>
        ) : (
          newsData.map((article, index) => (
            <div className="news-article" key={index}>
              <div className="news-title">{article.title}</div>
              <div className="news-content">{article.description}</div>
              <div className="news-image">
                <img
                  src={
                    article?.image && article.image !== "null"
                      ? article.image
                      : newsIcon
                  }
                  alt="news"
                />
              </div>
              <div className="news-bottom-section">
                <div className="news-date">
                  published on:{" "}
                  {new Date(article.publishedAt).toLocaleDateString()}
                </div>
                <div className="newsButton">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    click for more info
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NewsApp;
