import {
  Box,
  TagLabel,
  Tag,
  HStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import useFetchData from "../../Hooks/useFetchData";
import Image from "next/image";
import React from "react";
import Parser from "html-react-parser";

const ArticleCard2 = ({ articles, currentTheme }) => {
  const btnRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const article = articles??.data[0];

  console.log("articles : ", articles);

  const renderTags = (tags) => {
    return tags.slice(0, 3).map((category, key) => (
      <div key={key}>
        <Tag size="sm" borderRadius="md" variant="outline" colorScheme="blue">
          <TagLabel>{category}</TagLabel>
        </Tag>
      </div>
    ));
  };

  return (
    <Box
      as={"div"}
      style={{ whiteSpace: "initial" }}
      width="20rem"
      height={{ base: "auto", md: "47rem" }}
      position="relative"
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      bg={currentTheme.secondary}
    >
      <Image
        src={articles?.cover_image.url}
        alt="thumbnail image"
        width={articles?.cover_image.width}
        height={articles?.cover_image.height}
      />{" "}
      <Box p="6">
        <HStack spacing={2}>
          {articles?.tags ? renderTags(JSON.parse(articles?.tags)) : null}
        </HStack>
        <Box mt="1" as="h4" lineHeight="tight">
          {articles?.title}
        </Box>
        <Box as="span" color={currentTheme.subtext} fontSize="sm">
          {articles?.description.replace(/(<([^>]+)>)/gi, "").slice(0, 80) +
            " . . ."}
        </Box>
        <Button variant="link" ref={btnRef} onClick={onOpen}>
          <a style={{ fontSize: "16px", color: "#3182ce" }}>View More</a>
        </Button>
        <Modal onClose={onClose} finalFocusRef={btnRef} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent style={{ backgroundColor: currentTheme.secondary }}>
            <ModalHeader>{articles?.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {articles && Parser(articles?.description)}{" "}
              <Button variant="link">
                <a
                  href={articles?.link}
                  target="_blank"
                  style={{ fontSize: "16px", color: "#3182ce" }}
                >
                  {articles?.phraseLink}
                </a>
              </Button>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={onClose}
                backgroundColor={currentTheme.secondary}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default ArticleCard2;
