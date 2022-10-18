import React, { useEffect, useState } from "react";
import { Box, AccordionIcon, AccordionButton } from "@chakra-ui/react";

export default function ScrollToTop({ currentTheme }) {
  const [isVisible, setIsVisible] = useState(false);

  const ScrollToTop = () => {
    window.scrollTo({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY) setIsVisible(true);
      else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Box
          onClick={ScrollToTop}
          position="fixed"
          bottom="20px"
          right={["16px", "84px"]}
          zIndex={3}
        >
          <AccordionButton fontSize={"25px"} >
            {" "}
            <AccordionIcon />
            Close
          </AccordionButton>
        </Box>
      )}
    </>
  );
}
