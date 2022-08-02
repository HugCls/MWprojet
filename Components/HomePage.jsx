import styles from "../styles/Home.module.css";
import Link from "next/link";
import HomeGigs from "./HomeGigs";
import Skills from "./Distinctions";
import RecentDiscography from "./RecentDiscography";
import Discography from "./Discography";
import { gigs } from "../Constants/gigs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { userinfo, ctaTexts, headings } from "../Constants/userinfo";

const HomePage = ({ currentTheme }) => {
  return (
    <div>
      <div
        className={styles.homeheading}
        style={{ backgroundColor: currentTheme.secondary }}
      >
        <h1 className={styles.heading}>{userinfo.greeting.title}</h1>
        <h2
          className={styles.subheading}
          style={{ color: currentTheme.subtext }}
        >
          {userinfo.greeting.subtitle}
        </h2>
        <Link href="/media">
          <a
            className={styles.cta1}
            style={{
              backgroundColor: currentTheme.accent,
              color: currentTheme.contrastText,
              boxShadow: currentTheme.boxShadow,
            }}
          >
            {ctaTexts.landingCTA}
          </a>
        </Link>
      </div>
      <div className={styles.homeGigsSection} id="gigs">
        <h1 className={styles.workheading} data-aos="fade-up">
          {headings.gigsHomePage}
        </h1>
        {gigs.slice(0, 3).map((gigs, key) => {
          return (
            <div key={key} data-aos="fade-up">
              <HomeGigs
                currentTheme={currentTheme}
                gig={gigs}
                id={key}
              />
            </div>
          );
        })}
        <div style={{ textAlign: "center", paddingBottom: "2rem" }}>
          <Link href="/gigs">
            <a
              className={styles.cta3}
              style={{
                backgroundColor: currentTheme.accent,
                color: currentTheme.contrastText,
              }}
            >
              {ctaTexts.gigsCTA} <span>&gt;</span>
            </a>
          </Link>
        </div>
      </div>
      <div
        id="skills"
        className={styles.homeSkillSection}
        style={{ backgroundColor: currentTheme.secondary }}
      >
        <Skills currentTheme={currentTheme} />
      </div>
      <RecentDiscography currentTheme={currentTheme} />
        <Discography currentTheme={currentTheme} />
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
    </div>
  );
};

export default HomePage;
