import styles from "../styles/Home.module.css";
import Link from "next/link";
import About from "./About";
import HomeGigs from "./HomeGigs";
import HomeGigs2 from "./HomeGigs2";
import Skills from "./Distinctions";
import RecentDiscography from "./RecentDiscography";
import Discography from "./Discography";
import { gigs } from "../Constants/gigs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { userinfo, ctaTexts, headings } from "../Constants/userinfo";
import Discography2 from "./Discography2";

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
            <>
              <div key={key} data-aos="fade-up">
                <HomeGigs2 currentTheme={currentTheme} gig={gigs} id={key} />
              </div>
            </>
          );
        })}
      </div>
      <div
        id="skills"
        className={styles.homeSkillSection}
        style={{ backgroundColor: currentTheme.secondary }}
      >
        <Skills currentTheme={currentTheme} />
      </div>
      {/* <RecentDiscography currentTheme={currentTheme} /> */}

      {/* <Discography currentTheme={currentTheme} /> */}

      <Discography2 currentTheme={currentTheme}/>
      <About currentTheme={currentTheme} />
    </div>
  );
};

export default HomePage;
