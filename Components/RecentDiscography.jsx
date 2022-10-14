import React from "react";
import styles from "../styles/Home.module.css";
import { userinfo, headings, ctaTexts } from "../Constants/userinfo";
import Link from "next/link";

const RecentDiscography = ({ currentTheme }) => {
  return (
    <div className={styles.discographyWrapper}>
      <div className={styles.workheading} data-aos="fade-up">
        {headings.discography}
      </div>

      <div className={styles.timeline}>
        <ul>
          {userinfo.recentDiscography.recentDiscographyList
            ? userinfo.recentDiscography.recentDiscographyList.map((value, key) => {
                return (
                  <li data-aos="fade-up" key={key}>
                    <div className={styles.content}>
                      <h3 style={{ color: currentTheme.accent }}>
                        {value.artist}
                      </h3>
                      <h2 style={{ color: currentTheme.subtext }}>
                        {value.title}
                      </h2>
                      <p style={{ color: currentTheme.subtext }}>
                        {value.label}
                      </p>
                      <p style={{ color: currentTheme.tertiary }}>
                        {value.role}
                      </p>
                      <p style={{ color: currentTheme.subtext }}>
                        {value.format}
                      </p>
                    </div>
                    <div
                      className={styles.time}
                      style={{
                        border: `2px solid ${currentTheme.accent}`,
                        color: currentTheme.accent,
                      }}
                    >
                      <h4>{value.year}</h4>
                    </div>
                  </li>
                );
              })
            : null}
            <div style={{ clear: 'both' }} />
        </ul>
      </div>
    </div>
  );
};

export default RecentDiscography;
