import styles from "../styles/Gigs.module.css";
import MediaProject from "./MediaProject";
import BookCard from "./BookCard";
import ArticleCard from "./ArticleCard";
import { project } from "../Constants/project";
import { custom_articles } from "../Constants/articles";
import { bookList } from "../Constants/book";
import { useState, useEffect } from "react";
import { headings, userinfo } from "../Constants/userinfo";
import Carousel, { CarouselItem } from "./Carousel";
import Experiences from "./Experiences";

const Media = ({ currentTheme }) => {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    setArticleList(custom_articles);
  }, []);


  return (
    <div>
      <div className={styles.workHeading}>{headings.workMainPage}</div>
      <div className={styles.workmain} style={{ color: currentTheme.subtext }}>
        {project.map((project, key) => {
          return (
            <div key={key} data-aos="fade-up">
              <MediaProject
                currentTheme={currentTheme}
                project={project}
                id={key}
              />
            </div>
          );
        })}
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
      
      {userinfo.book ? (
        
        <div style={{ backgroundColor: currentTheme.secondary }}>
          <div className={styles.articleHeading}>{headings.book}</div>
          {bookList ? (
            <div currentTheme={currentTheme}>
              {bookList.map((book, key) => {
                return (
                  <div key={key} data-aos="fade-up" style={{marginTop: '30px', display: 'flex', justifyContent: "center"}}>
                    <BookCard book={book} currentTheme={currentTheme} />
                    </div>
                );
              })}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default Media;
