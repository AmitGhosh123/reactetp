

// create four cards on the webpage and fetch the latest news from the news api in react?
import React, { useState, useEffect } from "react";
import axios from "axios";
 import './News.css';


export default function NewsCards() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
           " https://newsapi.org/v2/everything?q=tesla&from=2023-04-04&sortBy=publishedAt&apiKey=API_KEY"
        );
        setNews(res.data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <>
      <h1>Latest News</h1>
      <div className="card-container">
        {news.map((article) => (
          <div className="card" key={article.title}>
            <img
              src={article.urlToImage}
              alt={article.title}
              className="card-image"
            />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}