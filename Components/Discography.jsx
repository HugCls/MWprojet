import React from "react";
import styles from "../styles/Home.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { userinfo } from "../Constants/userinfo";
import useFetchData from "../Hooks/useFetchData";
import useAxios from "../Hooks/useAxios";
import Link from "next/link";

function Discography({ currentTheme }) {
  // const options = {
  //   method: 'GET',
  //   url: 'https://api.discogs.com/artists/1368289/releases',
  //   params: {sort: 'year', sort_order: 'desc', per_page: '75'},
  //   headers: {
  //     Authorization: 'OAuth oauth_consumer_key="", oauth_nonce="1ADA5sLK9Ia5RPJxOZZKGCSSsG0XykmI", oauth_signature="k4kYQvMiQ8zP%2BucmQJ7l9uVzLIA%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1663625431", oauth_token="goccowdGLBPzAZlfvRejYDekqKykERVdoNHCEsOA", oauth_version="1.0"',
  //     'User-Agent': 'axios/0.19.2 X-SiteSpeedApp-1 EzoicStaticCache'
  //   }
  // };
  
  
  const  {data, error, loading}  = useFetchData();

 if (loading) console.log(data);

  

  <Accordion allowToggle>
    <AccordionItem>
      <AccordionButton justifyContent="center">
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>
        <div className={styles.timeline}>
          <ul> 
            {data.releases.map((value, key) => {
              return (
                <li data-aos="fade-up" key={key}>
                  <div className={styles.content}>
                    <h3 style={{ color: currentTheme.accent }}>
                      {value.title}
                    </h3>
                    <p style={{ color: currentTheme.subtext }}>
                      {value.label}, {value.place}
                    </p>
                    <p style={{ color: currentTheme.subtext }}>
                      {value.format}
                    </p>
                  </div>
                  <div
                    className={styles.time}
                    style={{
                      border: `2px solid ${currentTheme.accent}`,
                      color: currentTheme.accent,
                    }}
                  >
                    <h4>{value.year}</h4>
                  </div>
                </li>
              );
            })} 
            <div style={{ clear: "both" }} />
          </ul>
        </div>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>;
}

export default Discography;
