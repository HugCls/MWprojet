import styles from "../styles/Gigs.module.css";
import { FaAmazon, FaSpotify } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { HStack } from "@chakra-ui/react";
import { useState } from "react";

const MediaProject = ({ currentTheme, project, id }) => {
  return (
    <div
      className={styles.parentofparentcard}
      style={{ justifyContent: id % 2 === 0 ? "flex-start" : "flex-end" }}
    >
      <div className={styles.parentcard}>
        <div className={styles.cardtitle} style={{ mt: "3px" }}>
          <h1 className={styles.projtitle}>{project.name}</h1>
        </div>
        <div className={styles.imageandsocials}>
          <div
            className={styles.card}
            style={{
              borderColor: currentTheme.footerColor,
              position: "relative",
            }}
          >
            <iframe
              height="300"
              src={project.video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>

          <div
            className={styles.socialIcon}
            style={{
              color: currentTheme.subtext,
              borderColor: currentTheme.subtext,
            }}
          >
            {project.spotifyLink !== "" ? (
              <Link href={project.spotifyLink} target="_blank">
                <a>
                  <FaSpotify size={25} />
                </a>
              </Link>
            ) : (
              <FontAwesomeIcon icon={faGithubAlt}  />
            )}
          </div>
          <div
            className={styles.socialIcon}
            style={{
              color: currentTheme.subtext,
              borderColor: currentTheme.subtext,
            }}
          >
            {project.projectLink !== "" ? (
              <Link href={project.amazonLink}>
                <a>
                  <FaAmazon size={25} />
                </a>
              </Link>
            ) : (
              <FontAwesomeIcon icon={faTelegramPlane} onClick={showProjToast} />
            )}
          </div>
        </div>
        <div className={styles.cardbottom}>
          <p className={styles.projdescription}>{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MediaProject;
