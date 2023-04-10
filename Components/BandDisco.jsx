import React from "react";

import useFetchDiscs from "../Hooks/useFetchDiscs";
import striptags from "striptags";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const BandDisco = () => {
  const [sortOption, setSortOption] = useState("year"); // état pour stocker l'option de tri sélectionnée
  const { data, error, loading } = useFetchDiscs(sortOption);

  const count = data?.reduce((acc, disc) => {
    const { band } = disc.acf;
    acc[band] = acc[band] ? acc[band] + 1 : 1;
    return acc;
  }, {});

  // Trier les albums en fonction de l'option de tri sélectionnée
  const sortedData = data?.sort((a, b) => {
    let sortResult;
    if (sortOption === "band") {
      sortResult = count[b.acf.band] - count[a.acf.band];
    }
    return sortResult || b.acf.year - a.acf.year;
  });
  const sortedByYearData = data?.sort((a, b) => {
    let sortResult;
    if (sortOption === "year") {
      sortResult = b.acf.year - a.acf.year;
    }
    return sortResult;
  });
  const sortedByLabelData = data?.sort((a, b) => {
    let sortResult;
    if (sortOption === "label") {
      sortResult = a.acf.label.localeCompare(b.acf.label);
    }
    return sortResult;
  });

  const groupedData = sortedData?.reduce((acc, disc) => {
    const { band } = disc.acf;
    acc[band] = acc[band] ? [...acc[band], disc] : [disc];
    return acc;
  }, {});


  console.log(groupedData)

  sortOption === "band";
  Object.keys(groupedData).map((band, index) => {
    return (
      <div className={styles.timeline2}>
        <React.Fragment key={index}>
          <h3
            style={{
              border: `2px solid ${currentTheme.accent}`,
              color: currentTheme.accent,
            }}
          >
            {band}
          </h3>
          {groupedData[band].map((disc, index) => {
            const label = striptags(disc.acf.label);
            const title = striptags(disc.acf.title);
            const year = striptags(disc.acf.year);
            const format = striptags(disc.acf.format);
            const place = striptags(disc.acf.place);
            const add_info = striptags(disc.acf.add_info);
            return (
              <div data-aos="fade-up" key={index}>
                <h4
                  style={{
                    color: currentTheme.accent,
                  }}
                >
                  {year}
                </h4>
                <h2
                  style={{
                    color: currentTheme.subtext,
                  }}
                >
                  {title}
                </h2>

                <p
                  style={{
                    color: currentTheme.subtext,
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    color: currentTheme.tertiary,
                  }}
                >
                  {place}
                </p>
                <p
                  style={{
                    color: currentTheme.subtext,
                  }}
                >
                  {format}
                </p>
                <p
                  style={{
                    color: currentTheme.subtext,
                  }}
                >
                  {add_info}
                </p>
              </div>
            );
          })}
        </React.Fragment>{" "}
      </div>
    );
  });
};

export default BandDisco;
