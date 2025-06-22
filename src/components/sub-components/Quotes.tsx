import { useEffect, useState } from "react";
import "../../styles/Quotes.css";

// Define the type for a single quote
interface Quote {
  id: number;
  quote: string;
  author: string;
}

const Quotes = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://quotes-api-6e7o.vercel.app/api/quotes/multiple")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch quotes");
        }
        return res.json();
      })
      .then((data: Quote[]) => {
        setQuotes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching quotes:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="quotes-container">
      <div className="title">Wise Words (from People Smarter Than Me)</div>
      <div className="content">
        {loading ? (
          <p className="loading">Loading quotes...</p>
        ) : (
          quotes.map((quote, index) => (
            <div key={quote.id ?? index} className="quote-card">
              <p className="quote-text">"{quote.quote}"</p>
              <p className="quote-author">- {quote.author}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Quotes;
