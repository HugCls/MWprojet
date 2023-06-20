import styles from "./Media.module.css";

import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { useSwipeable } from "react-swipeable";
import { headings } from "../../Constants/userinfo";

export const BookCarouselItem = ({ children, width, currentTheme }) => {
  return (
    <div
      className={styles.bookCarouselItem}
      style={{ width: width, backgroundColor: currentTheme.secondary }}
    >
      {children}
    </div>
  );
};

const BookCarousel = ({ children, currentTheme }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isSmall] = useMediaQuery("(max-width: 1200px)");
  const [isVerySmall] = useMediaQuery("(max-width: 800px)");
  const dividingFactor = isSmall ? (isVerySmall ? 1 : 2) : 3;
  const arrayLength = Math.ceil(
    React.Children.count(children) / dividingFactor
  );
  const repeat = Array.from(Array(arrayLength).keys());

  useEffect(() => {
    setActiveIndex(0);
  }, [dividingFactor]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 8_000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = arrayLength - 1;
    } else if (newIndex >= arrayLength) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <><div className={styles.articleHeading}>{headings.book}</div><div
          {...handlers}
          className={styles.bookCarousel}
          id="book"
          style={{ backgroundColor: currentTheme.secondary }}
          data-aos="fade-up"
      >
          {/* <div
      className={styles.inner} */}


          {React.Children.map(children, (child, index) => {
              return React.cloneElement(child, {
                  width: isSmall ? (isVerySmall ? "100%" : "50%") : "33.33%",
              });
          })}
          {/* </div> */}

      </div></>
  );
};

export default BookCarousel;
