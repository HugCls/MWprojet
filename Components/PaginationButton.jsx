import React from "react";
import { Button } from "@chakra-ui/react";

const PaginationButtons = ({
    onViewMore,
    onViewLess,
    bandToShow,
    discToShow,
    groupedData,
    sortedData,
    sortOption,
    currentTheme,
  }) => {
    const shouldShowViewLess = bandToShow > 3 || discToShow > 10;
    const shouldShowViewMoreBand = sortOption === "band" && bandToShow < Object.keys(groupedData).length;
    const shouldShowViewMoreOther = sortOption !== "band" && discToShow < sortedData.length;
  
    return (
      <div
        style={{
          color: currentTheme.accent,
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "5px",
        }}
      >
        {shouldShowViewLess && <Button onClick={onViewLess}>View less</Button>}
        {(shouldShowViewMoreBand || shouldShowViewMoreOther) && (
          <Button onClick={onViewMore}>View more</Button>
        )}
      </div>
    );
  };
  
  export default PaginationButtons;