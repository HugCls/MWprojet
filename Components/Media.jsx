import styles from "../styles/Gigs.module.css";
import MediaProject from "./MediaProject";
import ArticleCard from "./ArticleCard";
import { project } from "../Constants/project";
import { custom_articles } from "../Constants/articles";
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
    </div>
  );
};

export default Media;
