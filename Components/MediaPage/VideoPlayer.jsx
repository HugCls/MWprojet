import React from "react";
import styles from "./Media.module.css";

const VideoPlayer = ({ videoSrc }) => {
    return (
      <div
        className={styles.card}
        style={{
          position: "relative",
          paddingBottom: "56.25%", // Maintain a 16:9 aspect ratio
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
          src={videoSrc}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    );
  };
  
  export default VideoPlayer;
  