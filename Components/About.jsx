import styles from "../styles/Home.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import { userinfo, ctaTexts, headings } from "../Constants/userinfo";

const About = ({ currentTheme }) => {
  return (
    <div
      id="about"
      className={styles.homeAboutSection}
      style={{ backgroundColor: currentTheme.secondary }}
    >
      <h1 className={styles.workheading} data-aos="fade-up">
        {headings.about}
      </h1>
      <p
        className={styles.aboutText}
        style={{ color: currentTheme.subtext }}
        data-aos="fade-up"
      >
        {userinfo.about.content}
      </p>
      <div
        data-aos="fade-up"
        style={{
          textAlign: "center",
          padding: "1rem 0",
          margin: "1rem 0",
          position: "relative",
          display: "flex",
          color: currentTheme.subtext,
        }}
      >
        <Link href={userinfo.about.resume} target="_blank">
          <a
            className={styles.cta4}
            style={{
              background: "transparent",
              border: `2px solid ${currentTheme.subtext}`,
              display: "flex",
              alignItems: "center",
            }}
          >
            {ctaTexts.resumeCTA}&nbsp;&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon
              width="15px"
              height="15px"
              icon={faExternalLinkAlt}
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default About;
