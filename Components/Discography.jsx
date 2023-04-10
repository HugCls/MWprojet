import React from "react";
import styles from "../styles/Home.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import ScrollToTop from "../Components/ScrollToTop";
import useFetchData from "../Hooks/useFetchData";
import Link from "next/link";
import useFetchDiscs from "../Hooks/useFetchDiscs";

const Discography = ({ currentTheme }) => {
  const { data, error, loading } = useFetchData();
  data?.releases.splice(63);
  delete data?.releases[0];
  delete data?.releases[1];
  delete data?.releases[2];

  // const { data, error, loading } = useFetchDiscs();

  if (loading) console.log(data);
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <AccordionButton justifyContent="center"> see complete discography
          <AccordionIcon boxSize={10} ml="2px" />
        </AccordionButton>

        <AccordionPanel>
          <ScrollToTop />
          <div >
            <div className={styles.timeline2}>
              <ul>
                {data?.releases.map((value, key) => {
                  return (
                    <li data-aos="fade-up" key={key}>
                      <div className={styles.content}>
                        <h3 style={{ color: currentTheme.accent }}>
                          {value.artist}
                        </h3>
                        <h2 style={{ color: currentTheme.subtext }}>
                          {value.title}
                        </h2>
                        <p style={{ color: currentTheme.subtext }}>
                          {value.label}
                        </p>
                        <p style={{ color: currentTheme.tertiary }}>
                          {value.role}
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
          </div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Discography;
