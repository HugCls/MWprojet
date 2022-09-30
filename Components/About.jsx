import styles from "../styles/Home.module.css";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

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
        data-aos="fade-up"
      >
        {userinfo.about.content}
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
        <Button ref={btnRef}
            onClick={onOpen}>
          {ctaTexts.resumeCTA}&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon
            
            width="15px"
            height="15px"
            icon={faExternalLinkAlt}
          />
        </Button>
        <Modal
        // backgroundColor={currentTheme}
        // text={currentTheme.subtext}
          onClose={onClose}
          finalFocusRef={btnRef}
          isOpen={isOpen}
          scrollBehavior={scrollBehavior}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{userinfo.aboutSeeMore.content}</ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default About;
