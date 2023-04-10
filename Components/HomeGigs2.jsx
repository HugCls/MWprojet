import React from "react";
import styles from "../styles/Home.module.css";
import useFetchGigs from "../Hooks/useFetchgigs";
import striptags from "striptags";
import { Divider } from '@chakra-ui/react'
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const HomeGigs2 = ({ currentTheme, id }) => {
  const { data, error, loading } = useFetchGigs();

  if (loading) console.log(data);

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
        ></div>
      <ul>
        {data?.map((value, key) => {
          const date = striptags(value.acf.date);
          const venue = striptags(value.acf.venue);
          const adress = striptags(value.acf.adress);
          const add_info = striptags(value.acf.add_info);
          return (
            <div key={key}>
              <h1 className={styles.projectTitle}>Date: {date}</h1>
              <h2 className={styles.projectTitle}>Name of Venue: {venue}</h2>
              <h3
                className={styles.projectTitle}
                style={{ color: currentTheme.subtext }}
              >
               Location: {adress}
              </h3>
              <Divider sx={{margin:"5px"}}/>
              <h4 className={styles.projectSubTitle}
          style={{ color: currentTheme.subtext}}>{add_info}</h4>
            </div>
          );
        })}
      </ul>
      </div>
    </div>
  );
};

export default HomeGigs2;
