import { useEffect, useState } from "react";
import newsIcon from "../../assets/images/miscellaneous/news.svg";
import "../../styles/News.css";

const apikey = import.meta.env.VITE_NEWS_API_KEY;

type Article = {
  title: string;
  description: string;
  image: string;
  publishedAt: string;
  url: string;
};

const NewsApp = () => {
  const [newsData, setNewsData] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(
          `https://gnews.io/api/v4/top-headlines?country=in&max=10&apikey=${apikey}&lang=en`
        );
        const data = await res.json();
        setNewsData(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

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
                <img src={article.image || newsIcon} alt="news" />
              </div>
              <div className="news-date">
                {new Date(article.publishedAt).toLocaleString()}
              </div>
              <div className="newsButton">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  more info
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NewsApp;
