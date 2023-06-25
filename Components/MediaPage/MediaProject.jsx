import styles from "./Media.module.css";
import he from "he";
import striptags from "striptags";
import { Divider, Box, Spinner, Alert, Button } from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import VideoPlayer from "./VideoPlayer";
import SocialMediaIcon from "./SocialMediaIcon";
import {
  faSpotify,
  faAmazon
} from "@fortawesome/free-brands-svg-icons";

const MediaProject = ({ currentTheme, data, error, loading, id }) => {
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Spinner color="blue.500" size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert status="error">
        <p>Error loading the gigs: {error.message}</p>
      </Alert>
    );
  }

  console.log(data);
  
  return (
    data?.map((value, id) => {
      const { name, videourl, spotifylink, amazonlink, videodescription } = value.acf;
      const decodedName = he.decode(striptags(name));
      const videosUrl = he.decode(striptags(videourl));
      const decodedSpotifyLink = he.decode(striptags(spotifylink));
      const decodedAmazonLink = he.decode(striptags(amazonlink));
      const decodedVideosDescription = he.decode(striptags(videodescription));
      return (
    <div
      className={styles.parentofparentcard}
      style={{ justifyContent: id % 2 === 0 ? "flex-start" : "flex-end" }}
    >
      <div className={styles.parentcard}>
        <div className={styles.cardtitle}>
          <h1 className={styles.projtitle}>{decodedName}</h1>
        </div>
        <div className={styles.imageandsocials}>
         <VideoPlayer videoSrc={videosUrl} />
          <div>
            <SocialMediaIcon
              link={decodedSpotifyLink}
              icon={faSpotify}
              currentTheme={currentTheme}
            />
            <SocialMediaIcon
              link={decodedAmazonLink}
              icon={faAmazon}
              currentTheme={currentTheme}
            />
          </div>
        </div>
        <div className={styles.cardbottom}>
          <p className={styles.projdescription}>{decodedVideosDescription}</p>
        </div>
      </div>
    </div>
    );
  })
  );
};

export default MediaProject;
