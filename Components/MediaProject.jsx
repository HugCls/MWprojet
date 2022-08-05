import styles from "../styles/Gigs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faTelegramPlane,
  faSpotify,
  faAmazon
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { HStack, Tag, TagLabel, Tooltip } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

const MediaProject = ({ currentTheme, project, id }) => {
  return (
    <div
      className={styles.parentofparentcard}
      style={{ justifyContent: id % 2 === 0 ? "flex-start" : "flex-end" }}
    >
      <div className={styles.parentcard}>
        <div className={styles.cardtitle}>
          <h1 className={styles.projtitle}>{project.name}</h1>
        </div>
        <div className={styles.imageandsocials}>
          <div
            className={styles.card}
            style={{
              borderColor: currentTheme.footerColor,
              position: "relative",
              paddingBottom: "56.25%",
              paddingTop: "30px",
              height: "0",
              overflow: "hidden",
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }}
              src={project.video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
          <div>
            
            <div
              className={styles.socialIcon}
              style={{
                color: currentTheme.subtext,
                borderColor: currentTheme.subtext,
              }}
            >
              {project.githubLink !== "" ? (
                <Link href={project.spotifyLink}>
                  <a>
                    <FontAwesomeIcon icon={faSpotify} />
                  </a>
                </Link>
              ) : (
                <FontAwesomeIcon icon={faSpotify} />
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
                    <FontAwesomeIcon icon={faAmazon} />
                  </a>
                </Link>
              ) : (
                <FontAwesomeIcon icon={faAmazon} />
              )}
            </div>
            {/* </Tooltip> */}
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
