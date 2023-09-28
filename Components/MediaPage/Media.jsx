import styles from "./Media.module.css";
import MediaProject from "./MediaProject";
import ArticleCard2 from "./ArticleCard2";
import useFetchManyData from "../../Hooks/useFetchManyData";
import BookCard from "./BookCard";
import { custom_book } from "../../Constants/book";
import { headings, userinfo } from "../../Constants/userinfo";
import Carousel, { CarouselItem } from "./Carousel";
import { useState, useEffect } from "react";

const Media = ({ currentTheme }) => {
  const [videos, setVideos] = useState(null);
  const [articles, setArticles] = useState([]);
  const [bookList] = useState(custom_book);

  const { data, error, loading } = useFetchManyData([
    process.env.NEXT_PUBLIC_API_VIDEOS_URL,
    process.env.NEXT_PUBLIC_API_PUBLICATIONS_URL
  ]);

  useEffect(() => {
    if (data) {
      setVideos(data[0]);
      setArticles(data[1]);
    }
  }, [data]);

  return (
    <div>
      <div className={styles.workHeading}>{headings.workMainPage}</div>
      <div className={styles.workmain} style={{ color: currentTheme.subtext }}>
        <MediaProject currentTheme={currentTheme} data={videos} />
      </div>

      <Carousel currentTheme={currentTheme}>
        {articles.slice(0, 6).map((article) => (
          <CarouselItem key={article.id} currentTheme={currentTheme}>
            <ArticleCard2
              cover_image={article.acf.cover_image}
              tags={article.acf.tags}
              title={article.acf.title}
              description={article.acf.description}
              link={article.acf.link}
              phraseLink={article.acf.phraseLink}
              currentTheme={currentTheme}
            />
          </CarouselItem>
        ))}
      </Carousel>

      {userinfo.book.visible && (
        <div style={{ backgroundColor: currentTheme.secondary }}>
          {bookList.map((book) => (
            <BookCard key={book.id} book={book} currentTheme={currentTheme} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Media;
