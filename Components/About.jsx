import styles from "../styles/Home.module.css";
import React from "react";
import Link from "next/link";
import Parser from "html-react-parser";
import { useDisclosure } from "@chakra-ui/react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { userinfo, ctaTexts, headings } from "../Constants/userinfo";

const About = ({ currentTheme }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");
  const btnRef = React.useRef(null);
  return (
    <div
      id="about"
      className={styles.homeAboutSection}
      style={{ backgroundColor: currentTheme.secondary }}
    >
      <h1 className={styles.workheading} data-aos="fade-up">
        {headings.about}
      </h1>
      <p
        className={styles.aboutText}
        style={{ color: currentTheme.subtext }}
        data-aos={"fade-up"}
      >
        {userinfo.about.content} &nbsp; &nbsp;
        <Button variant="link" ref={btnRef} onClick={onOpen}>
          <a style={{ fontSize: "16px", color: "#3182ce" }}>View More</a>
        </Button>
      </p>

      <div
        data-aos="fade-up"
        style={{
          textAlign: "center",
          padding: "1rem 0",
          margin: "1rem 0",
          position: "relative",
          display: "flex",
          color: currentTheme.subtext,
        }}
      >
        <Modal
          onClose={onClose}
          finalFocusRef={btnRef}
          isOpen={isOpen}
          scrollBehavior={scrollBehavior}
        >
          <ModalOverlay />
          <ModalContent style={{ backgroundColor: currentTheme.secondary }}>
            <ModalHeader>Michael "Mudcat" Ward</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{Parser(userinfo.aboutSeeMore.content)}</ModalBody>
            <ModalFooter>
              <Button backgroundColor={currentTheme.secondary} onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <div style={{ textAlign: "center", padding: "1rem 0" }}>
          <Link href="/contact">
            <a
              target="_blank"
              className={styles.cta3}
              style={{
                background: "transparent",
                border: `2px solid ${currentTheme.accent}`,
              }}
            >
              {ctaTexts.capabCTA} <span>&gt;</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
