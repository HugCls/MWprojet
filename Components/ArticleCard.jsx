import { Box, TagLabel, Tag, HStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Gigs.module.css";

const ArticleCard = ({ article, currentTheme }) => {
  return (
    <div style={{ whiteSpace: "initial" }}>
      <Box
        maxW="sm"
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
            {article.description.replace(/(<([^>]+)>)/gi, "").slice(0, 85) +
              " . . ."}
          </Box>
          <div style={{ marginTop: "1rem" }}>
            <Box>
              <Link href={article.link || article.url}>
                <a className={styles.cta2} style={{ color: "#3182ce" }}>
                  View More
                </a>
              </Link>
            </Box>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default ArticleCard;
