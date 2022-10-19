import { Box, TagLabel, Tag, HStack } from "@chakra-ui/react";
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


const ArticleCard = ({ article, currentTheme }) => {
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
          src={article.thumbnail || article.cover_image}
          alt="thumbnail image"
          height="500"
          width="500"
        />
        <Box p="6">
          <HStack spacing={2}>
            {article.categories
              ? article.categories.slice(0, 3).map((category, key) => {
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
              : article.tag_list
              ? article.tag_list.slice(0, 3).map((category, key) => {
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
            {article.title}
          </Box>
          <Box as="span" color={currentTheme.subtext} fontSize="sm">
            {article.description.replace(/(<([^>]+)>)/gi, "").slice(0, 80) +
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
              <ModalHeader>{article.title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {Parser(article.description)}{" "}
                <Button variant="link">
                  <a
                    href={article.link}
                    target="_blank"
                    style={{ fontSize: "16px", color: "#3182ce" }}
                  >
                    {article.phraseLink}
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

export default ArticleCard;
