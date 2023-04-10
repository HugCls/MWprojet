import React from "react";
import { Button } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";




const SortButtons = ({ onSortByBand, onSortByYear, onSortByLabel, currentTheme }) => {
    return (
      <div style={{ display: "flex", flexDirection: "column",}}  >
        <Button backgroundColor={currentTheme.body} onClick={onSortByBand} justifyContent="center">
          <h3 >Band</h3>
        </Button>
        <Button backgroundColor={currentTheme.body} onClick={onSortByYear} justifyContent="center" marginTop="3px">
          <h3 >Year</h3>
        </Button>
        <Button backgroundColor={currentTheme.body} onClick={onSortByLabel} justifyContent="center" marginTop="3px">
          <h3 >Label</h3>
        </Button>
      </div>
    );
  };

  export default SortButtons;