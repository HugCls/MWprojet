import styles from "../styles/Layout.module.css";
import { userinfo } from "../Constants/userinfo";
import Link from "next/link";

const Footer = ({ currentTheme }) => {
  return (
    <div
      className={styles.footermain}
      style={{
        backgroundColor: currentTheme.footerColor,
        color: currentTheme.subtext,
      }}
    >
      <div className={styles.footertable}>
        <Link href="/">
          <a>
            <h2 className={styles.footerlogo}>{userinfo.logoText}</h2>
          </a>
        </Link>
        <ul>
          <li className={styles.listHeading}>Socials</li>
          {userinfo.socials
            ? userinfo.socials.map((social, key) => {
                return (
                  <Link href={social.link} key={key}>
                    <a target="_blank">
                      <li>{social.type}</li>
                    </a>
                  </Link>
                );
              })
            : null}
          <Link
            href={`mailto:${
              userinfo.contact.email ? userinfo.contact.email : ""
            }`}
          >
            <a>
              <li>Mail</li>
            </a>
          </Link>
        </ul>
        <ul>
          <li className={styles.listHeading}>Pages</li>
          <Link href="/">
            <a>
              <li>Home</li>
            </a>
          </Link>
          <Link href="/#about">
            <a>
              <li>About</li>
            </a>
          </Link>
          <Link href="/media">
            <a>
              <li>Media</li>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <li>Contact</li>
            </a>
          </Link>
        </ul>
      </div>

      <hr
        style={{
          height: "1px",
          backgroundColor: currentTheme.subtext,
          border: "none",
          opacity: "0.5",
        }}
      />
      <div >
      <div className={styles.footerbottom} style={{marginTop: '30px'}}>
        Mudcat Ward recommends the bass players’ website for strings and other
        supplies, Gollihur Music, <br></br>LLC Phone: 856-292-3194 Email:
        queries@gollihurmusic.com{" "}
        <a
          href="https://www.gollihurmusic.com"
          target={"_blank"}
          style={{ fontSize: "16px", color: "#3182ce" }}
        >
          Visit their website
        </a>
      </div>
      <div className={styles.footerbottom}>
        Travel easily with your bass with{" "}
        <a
          href="https://www.travelbass.it/"
          target={"_blank"}
          style={{ fontSize: "16px", color: "#3182ce" }}
        >
          Travelbass{" "}
        </a>
      </div>
      </div>
    </div>
  );
};

export default Footer;
