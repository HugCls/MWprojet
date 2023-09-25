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
import Image from "next/image";
import React from "react";
import Parser from "html-react-parser";

const ArticleCard = ({
  article: {
    thumbnail,
    cover_image,
    categories,
    tag_list,
    title,
    description,
    link,
    phraseLink,
  },
  currentTheme,
}) => {
  const btnRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    //  maxW="xs"
    width="20rem"
      height={{ base: "auto", md: "47rem" }}
      position="relative"
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      bg={currentTheme.secondary}
    >
      <Image
        src={thumbnail || cover_image}
        alt="thumbnail image"
      />
      <Box p="6">
        <HStack spacing={2}>
          {categories
            ? renderTags(categories)
            : tag_list
            ? renderTags(tag_list)
            : null}
        </HStack>
        <Box mt="1" as="h4" lineHeight="tight">
          {title}
        </Box>
        <Box as="span" color={currentTheme.subtext} fontSize="sm">
          {description.replace(/(<([^>]+)>)/gi, "").slice(0, 80) + " . . ."}
        </Box>
        <Button variant="link" ref={btnRef} onClick={onOpen}>
          <a style={{ fontSize: "16px", color: "#3182ce" }}>View More</a>
        </Button>
        <Modal onClose={onClose} finalFocusRef={btnRef} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent style={{ backgroundColor: currentTheme.secondary }}>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {Parser(description)}
              <Button variant="link">
                <a
                  href={link}
                  target="_blank"
                  style={{ fontSize: "16px", color: "#3182ce" }}
                >
                  {phraseLink}
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

export default ArticleCard;
