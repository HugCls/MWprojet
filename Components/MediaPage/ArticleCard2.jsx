import React, { useRef } from "react";
import {
  Box,
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
import { renderTags, truncateTitle } from './utils';
import Image from "next/image";
import Parser from "html-react-parser";

const ArticleCard2 = ({
  cover_image = {},
  tags = [],
  title = "",
  description = "",
  link = "#",
  phraseLink = "Read More",
  currentTheme = {}
}) => {
  const btnRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const linkStyle = {
    fontSize: "16px",
    color: "#3182ce"
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
        src={cover_image.url || ""}
        alt="thumbnail image"
        width={cover_image.width || 0}
        height={cover_image.height || 0}
      />
      <Box p="6">
        <HStack spacing={2}>
          {tags.length > 0 && renderTags(JSON.parse(tags))}
        </HStack>
        <Box mt="1" as="h4" lineHeight="tight">
          <Tooltip label={title} aria-label="A tooltip">
            <span>{truncateTitle(title)}</span>
          </Tooltip>
        </Box>
        <Box as="span" color={currentTheme.subtext} fontSize="sm">
          {`${description.replace(/(<([^>]+)>)/gi, "").slice(0, 80)} . . .`}
        </Box>
        <Button variant="link" ref={btnRef} onClick={onOpen} style={linkStyle}>
          View More
        </Button>
        <Modal onClose={onClose} finalFocusRef={btnRef} isOpen={isOpen} >
          <ModalOverlay />
          <ModalContent bg={currentTheme.secondary} >
            <ModalHeader mt="50px" >{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {description && Parser(description)}
              <Button variant="link" style={linkStyle}>
                <a href={link} target="_blank" 
                
                >
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
