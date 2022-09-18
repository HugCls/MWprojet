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
  
  const { data, error, loading } = useFetchData();

  

  console.log(data);

  <Accordion allowToggle>
    <AccordionItem>
      <AccordionButton justifyContent="center">
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>
        <div className={styles.timeline}>
          <ul>
            {data?.results?.map((value, key) => {
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
