import styles from "./Media.module.css";

import MediaProject from "./MediaProject";
import useFetchData from "../../Hooks/useFetchData";
import ArticleCard from "./ArticleCard";
import ArticleCard2 from "./ArticleCard2";
import BookCard from "./BookCard";
import { custom_book } from "../../Constants/book";
import { custom_articles } from "../../Constants/articles";
import { useState, useEffect } from "react";
import { headings, userinfo } from "../../Constants/userinfo";
import Carousel, { CarouselItem } from "./Carousel";

const Media = ({ currentTheme }) => {
  const [videos, setVideos] = useState(null);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [articleList, setArticleList] = useState([]);
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    // Utilisation de Promise.all pour effectuer plusieurs appels API simultanément
    Promise.all([
      fetch(process.env.NEXT_PUBLIC_API_VIDEOS_URL),
      fetch(process.env.NEXT_PUBLIC_API_PUBLICATIONS_URL),
    ])
      .then(async ([videosRes, articlesRes]) => {
        const videosData = await videosRes.json();
        const articlesData = await articlesRes.json();



        setVideos(videosData);
        setArticles(articlesData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setArticleList(custom_articles);
  }, []);
  useEffect(() => {
    setBookList(custom_book);
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur lors du chargement des données.</p>;

  return (
    <div>
      <div className={styles.workHeading}>{headings.workMainPage}</div>
      <div className={styles.workmain} style={{ color: currentTheme.subtext }}>
        <div data-aos="fade-up">
          <MediaProject currentTheme={currentTheme} data={videos} />
        </div>
      </div>

      {userinfo.articles.visible ? (
        <div style={{ backgroundColor: currentTheme.secondary }}>
          {articleList ? (
            <Carousel currentTheme={currentTheme}>
              {articleList.slice(0, 6).map((article, key) => {
                return (
                  <CarouselItem key={key} currentTheme={currentTheme}>
                    <ArticleCard
                      article={article}
                      currentTheme={currentTheme}
                    />
                  </CarouselItem>
                );
              })}
            </Carousel>
          ) : null}
        </div>
      ) : null}
      {articles.map(article =>
        <ArticleCard2 articles={article.acf} currentTheme={currentTheme} />)}
      {userinfo.book.visible ? (
        <div style={{ backgroundColor: currentTheme.secondary }}>
          {bookList
            ? bookList.map((book, key) => {
              return <BookCard book={book} currentTheme={currentTheme} />;
            })
            : null}
        </div>
      ) : null}
    </div>
  );
};

export default Media;
