import React from "react";
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
  Tooltip,
} from "@chakra-ui/react";
import Image from "next/image";
import Parser from "html-react-parser";

const ArticleCard2 = ({
  cover_image,
  tags,
  title,
  description,
  link,
  phraseLink,
  currentTheme
}) => {
  const btnRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const renderTags = (tags) => {
    return tags.slice(0, 3).map((category, key) => (
      <Tag key={key} size="sm" borderRadius="md" variant="outline" colorScheme="blue">
        <TagLabel>{category}</TagLabel>
      </Tag>
    ));
  };

  const truncateTitle = (title, length = 30) => {
    return title.length > length ? `${title.slice(0, length)}...` : title;
  };

  return (
    <Box
      as="div"
      whiteSpace="initial"
      w="20rem"
      h={{ base: "auto", md: "40rem" }}
      position="relative"
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      bg={currentTheme.secondary}
    >
      <Image
        src={cover_image?.url}
        alt="thumbnail image"
        width={cover_image?.width}
        height={cover_image?.height}
      />
      <Box p="6">
        <HStack spacing={2}>
          {tags && renderTags(JSON.parse(tags))}
        </HStack>
        <Box mt="1" as="h4" lineHeight="tight">
          <Tooltip label={title} aria-label="A tooltip">
            <span>{truncateTitle(title)}</span>
          </Tooltip>
        </Box>
        <Box as="span" color={currentTheme.subtext} fontSize="sm">
          {`${description.replace(/(<([^>]+)>)/gi, "").slice(0, 80)} . . .`}
        </Box>
        <Button variant="link" ref={btnRef} onClick={onOpen}>
          View More
        </Button>
        <Modal onClose={onClose} finalFocusRef={btnRef} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent bg={currentTheme.secondary}>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {description && Parser(description)}
              <Button variant="link">
                <a href={link} target="_blank" style={{ fontSize: "16px", color: "#3182ce" }}>
                  {phraseLink}
                </a>
              </Button>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose} bg={currentTheme.secondary}>
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
