import React from "react";
import styles from "../styles/Home.module.css";
import striptags from "striptags";

const DiscYear = ({ disc, currentTheme }) => {
  const label = striptags(disc.acf.label);
  const title = striptags(disc.acf.title);
  const year = striptags(disc.acf.year);
  const format = striptags(disc.acf.format);
  const place = striptags(disc.acf.place);
  const add_info = striptags(disc.acf.add_info);
  const band = striptags(disc.acf.band);

    return (
        
        <div data-aos="fade-up" className={styles.timeline2}>
          <h4
            style={{
              border: `2px solid ${currentTheme.accent}`,
              color: currentTheme.accent,
            }}
          >
            {year}
          </h4>
          <h3
            style={{
              color: currentTheme.accent,
            }}
          >
            {band}
          </h3>
          <h2>{title}</h2>
          <p
            style={{
              color: currentTheme.subtext,
            }}
          >
            {label}
          </p>
          <p
            style={{
              color: currentTheme.tertiary,
            }}
          >
            {place}
          </p>
          <p
            style={{
              color: currentTheme.subtext,
            }}
          >
            {format}
          </p>
          <p
            style={{
              color: currentTheme.subtext,
            }}
          >
            {add_info}
          </p>
        </div>

    )
}

export default DiscYear;
