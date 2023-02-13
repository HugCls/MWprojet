import { Avatar } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { userinfo, ctaTexts, headings } from "../Constants/userinfo";

const Skills = ({ currentTheme }) => {
  return (
    <>
      {/* <h1 className={styles.workheading} data-aos="fade-up">
        {headings.distinctions}
      </h1> */}
      <div className={styles.skills} style={{ color: currentTheme.subtext }}>
        {userinfo.distinctions
          ? userinfo.distinctions.map((value, key1) => {
              return (
                <>
                  <ul className={styles.skillList} data-aos="fade-up">
                    <h1
                      className={styles.skillHeading}
                      style={{ color: currentTheme.text, display: "flex", justifyContent: "center" }}
                    >
                      {value.category}
                    </h1>
                    <div
                      className={styles.avatar}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Avatar
                        size="xl"
                        name={value.category}
                        src={value.awardLogo}
                      />
                    </div>
                    <div style={{ position: "relative", top: "20px" }}>
                      <h2>{value.description}</h2>
                    </div>
                  {/* todo center  */}
                    <div style={{ position: "relative", top: "20px" }}>
                      <h2>{value.description2}</h2>
                    </div>
                  </ul>
                  {userinfo.distinctions.indexOf(value) ===
                  userinfo.distinctions.length - 1 ? null : (
                    <div
                      className={styles.line}
                      style={{ backgroundColor: currentTheme.subtext }}
                      data-aos="fade-up"
                    />
                  )}
                </>
              );
            })
          : null}
      </div>
    </>
  );
};

export default Skills;
