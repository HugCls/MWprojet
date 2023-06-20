import styles from "./Media.module.css";

import { Box, TagLabel, Tag, HStack } from "@chakra-ui/react";
import { headings } from "../../Constants/userinfo";
import Image from "next/image";
import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import Parser from "html-react-parser";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import Link from "next/link";


const BookCard = ({ book, currentTheme }) => {
  const btnRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");


  return (
    <div style={{ whiteSpace: "initial" }}>
      <Box
        height={"680px"}
        maxW="md"
        borderWidth="2px"
        borderRadius="lg"
        overflow="hidden"
        bg={currentTheme.secondary}
      >
        <Image
          src={book.thumbnail || book.cover_image}
          alt="thumbnail image"
          height="500"
          width="500" />
        <Box p="6">
          <HStack spacing={2}>
            {book.categories
              ? book.categories.map((category, key) => {
                return (
                  <div key={key}>
                    <Tag
                      size="sm"
                      borderRadius="md"
                      variant="outline"
                      colorScheme="blue"
                    >
                      <TagLabel>{category}</TagLabel>
                    </Tag>
                  </div>
                );
              })
              : book.tag_list
                ? book.tag_list.map((category, key) => {
                  return (
                    <div key={key}>
                      <Tag
                        size="sm"
                        borderRadius="md"
                        variant="outline"
                        colorScheme="blue"
                      >
                        <TagLabel>{category}</TagLabel>
                      </Tag>
                    </div>
                  );
                })
                : null}
          </HStack>
          <Box mt="1" as="h4" lineHeight="tight">
            {book.title}
          </Box>
          <Box as="span" color={currentTheme.subtext} fontSize="sm">
            {book.description.replace(/(<([^>]+)>)/gi, "").slice(0, 150) +
              " . . ."}
            &nbsp;&nbsp;
          </Box>

          <Button variant="link" ref={btnRef} onClick={onOpen}>
            <a style={{ fontSize: "16px", color: "#3182ce" }}>View More</a>
          </Button>
          <Modal
            onClose={onClose}
            finalFocusRef={btnRef}
            isOpen={isOpen}
            scrollBehavior={scrollBehavior}
          >
            <ModalOverlay />
            <ModalContent style={{ backgroundColor: currentTheme.secondary }}>
              <ModalHeader>{book.title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {Parser(book.description)}
                <Button variant="link">
                  <a
                    href={book.link}
                    target="_blank"
                    style={{ fontSize: "16px", color: "#3182ce" }}
                  >
                    {book.phraseLink}
                  </a>
                </Button>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose} backgroundColor={currentTheme.secondary}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Box>
    </div>
  );
};

export default BookCard;
