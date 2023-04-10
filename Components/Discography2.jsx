import React from "react";
import { useState, useRef } from "react";
import styles from "../styles/Home.module.css";
import { userinfo, headings, ctaTexts } from "../Constants/userinfo";
import DiscoDataDisplay from "./DiscoDataDisplay";

import {
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import DiscLabel from "./DiscLabel";
import useFetchDiscs from "../Hooks/useFetchDiscs";
import DiscBand from "./DiscBand";
import DiscYear from "./DiscYear";
import SortButtons from "./SortButtons";
import PaginationButtons from "./PaginationButton";

const Discography2 = ({ currentTheme }) => {
  const [sortOption, setSortOption] = useState("band");
  const [showMore, setShowMore] = useState(false);
  const [bandToShow, setBandToShow] = useState("3");
  const [discToShow, setDiscToShow] = useState("10");
  const seeMoreRef = useRef();
  const { data, error, loading } = useFetchDiscs(sortOption);

  const count = data?.reduce((acc, disc) => {
    const { band } = disc.acf;
    acc[band] = acc[band] ? acc[band] + 1 : 1;
    return acc;
  }, {});

  // Trier les albums en fonction de l'option de tri sélectionnée
  const sortData = (a, b) => {
    if (sortOption === "band") {
      const count = data.reduce((acc, disc) => {
        const { band } = disc.acf;
        acc[band] = acc[band] ? acc[band] + 1 : 1;
        return acc;
      }, {});

      return count[b.acf.band] - count[a.acf.band] || b.acf.year - a.acf.year;
    } else if (sortOption === "year") {
      return b.acf.year - a.acf.year;
    } else if (sortOption === "label") {
      return a.acf.label.localeCompare(b.acf.label);
    }
  };

  const sortedData = data?.sort(sortData);

  const groupedData = sortedData?.reduce((acc, disc) => {
    const { band } = disc.acf;
    acc[band] = acc[band] ? [...acc[band], disc] : [disc];
    return acc;
  }, {});

  const handleSortByBand = () => {
    setSortOption("band");
    setBandToShow("3");
  };

  const handleSortByYear = () => {
    setSortOption("year");
    setDiscToShow("5");
  };

  const handleSortByLabel = () => {
    setSortOption("label");
    setDiscToShow("5");
  };

  const handleViewMore = (event) => {
    event.preventDefault();
    setBandToShow(parseInt(bandToShow) + 3);
    setDiscToShow(parseInt(discToShow) + 5);
    setShowMore(true);
  };

  const handleViewLess = (event) => {
    event.preventDefault();
    setShowMore(false);
    if (bandToShow > 3) {
      setBandToShow(parseInt(bandToShow) - 3);
    }
    if (discToShow > 5) {
      setDiscToShow(parseInt(discToShow) - 5);
    }
  };

  if (loading) console.log(data);
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <AccordionButton justifyContent="center" flexDirection="column">
          <div className={styles.workheading} data-aos="fade-up">
            {headings.discography}
          </div>{" "}
          <AccordionIcon boxSize={10} ml="2px" />
        </AccordionButton>
        <AccordionPanel>
          <h3 style={{ textAlign: "center", marginBottom: "5px" }}>Sort by</h3>
          <SortButtons
            backgroundColor={currentTheme.secondary}
            onSortByBand={handleSortByBand}
            onSortByYear={handleSortByYear}
            onSortByLabel={handleSortByLabel}
            currentTheme={currentTheme}
          />
        </AccordionPanel>

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && (
          <AccordionPanel>
            <DiscoDataDisplay
              sortOption={sortOption}
              groupedData={groupedData}
              sortedData={sortedData.slice(0, discToShow)}
              bandKeys={Object.keys(groupedData).slice(0, bandToShow)}
              currentTheme={currentTheme}
            />
            <PaginationButtons
              onViewMore={handleViewMore}
              onViewLess={handleViewLess}
              bandToShow={bandToShow}
              discToShow={discToShow}
              groupedData={groupedData}
              sortedData={sortedData}
              sortOption={sortOption}
              currentTheme={currentTheme}
            />
            <AccordionButton justifyContent="center">
              Close Discography
              <AccordionIcon />
            </AccordionButton>{" "}
          </AccordionPanel>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default Discography2;
