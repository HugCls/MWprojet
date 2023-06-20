import styles from "./Media.module.css";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faAmazon
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaIcon = ({ link, icon, currentTheme }) => {
    return (
      <div
        className={styles.socialIcon}
        style={{
          color: currentTheme.subtext,
          borderColor: currentTheme.subtext,
        }}
      >
        {link ? (
          <Link href={link} >
            <a target="_blank">
              <FontAwesomeIcon icon={icon} />
            </a>
          </Link>
        ) : (
          <FontAwesomeIcon icon={icon} />
        )}
      </div>
    );
  };

export default SocialMediaIcon;