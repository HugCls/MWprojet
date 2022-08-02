import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { gigs } from "../Constants/gigs";

const HomeGigs = ({ currentTheme, id, gig }) => {
  return (
    <div
      className={styles.projectmain}
      style={{
        borderColor: currentTheme.accent,
        borderRadius: id % 2 === 0 ? "50px 0 0 0" : "0 0 50px 0",
      }}
    >
      <div className={styles.projectContent}>
        <div
          className={styles.projectIcon}
          style={{
            color: currentTheme.accent,
            backgroundColor: currentTheme.footerColor,
            borderColor: currentTheme.accent,
          }}
        >
          <Link href={gig.ticketLink}>
            <a target="_blank">
              <FontAwesomeIcon icon={faTelegramPlane} />
            </a>
          </Link>
        </div>
        <h1 className={styles.projectTitle}>{gig.nameOfEvent}</h1>
        <h2
          className={styles.projectSubTitle}
          style={{ color: currentTheme.subtext }}
        >
          {gig.location}
        </h2>
        <h3 className={styles.projectSubTitle}
          style={{ color: currentTheme.subtext}}>
          {gig.date}
          </h3>
        <Link href={gig.ticketLink}>
          <a
            className={styles.cta2}
            style={{ color: currentTheme.tertiary }}
            target="_blank"
          >
            Buy tickets
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HomeGigs;