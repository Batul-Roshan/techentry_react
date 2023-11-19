
import React, { useState, useEffect } from "react";

const TechNews = () => {
    const [news, setNews] = useState([]);
    const apiKey = "fd89ed9969d14a298258ae11b9d39ece";
    useEffect(() => {
        // Function to fetch tech news
        const fetchTechNews = async () => {
            try {
                const response = await fetch(
                    `https://newsapi.org/v2/everything?q=apple&from=2023-10-29&to=2023-10-29&sortBy=popularity&apiKey=${apiKey}`
                );

                if (response.ok) {
                    const data = await response.json();
                    setNews(data.articles);
                } else {
                    console.error("Failed to fetch tech news.");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchTechNews();
    }, []);

    return (
        <div className="tech-news">
            <h2>Technology News</h2>
            <ul>
                {news.map((article, index) => (
                    <li key={index}>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            {article.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TechNews;
