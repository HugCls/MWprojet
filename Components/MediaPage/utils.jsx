import { Tag, TagLabel } from "@chakra-ui/react";

export const renderTags = (tags) => {
    return tags.slice(0, 3).map((category, key) => (
        <Tag key={key} size="sm" borderRadius="md" variant="outline" colorScheme="blue">
            <TagLabel>{category}</TagLabel>
        </Tag>
    ));
};

export const truncateTitle = (title, length = 30) => {
    return title.length > length ? `${title.slice(0, length)}...` : title;
};
