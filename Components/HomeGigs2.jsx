import React, { useState, useMemo, useCallback } from "react";
import styles from "../styles/Home.module.css";
import useFetchData from "../Hooks/useFetchData";
import he from "he";
import striptags from "striptags";
import { Divider, Box, Spinner, Alert, Button } from "@chakra-ui/react";

const HomeGigs2 = ({
  currentTheme: { accent, footerColor, subtext, contrastText },
  id,
}) => {
  const { data, error, loading } = useFetchData(
    process.env.NEXT_PUBLIC_API_GIGS_URL
  );
  const [itemsToShow, setItemsToShow] = useState(3);

  const sortedData = useMemo(() => {
    return data
      ?.filter((gig) => {
        const gigDate = new Date(he.decode(striptags(gig.acf.date)));
        return gigDate >= new Date();
      })
      .sort((a, b) => {
        const dateA = new Date(he.decode(striptags(a.acf.date)));
        const dateB = new Date(he.decode(striptags(b.acf.date)));
        return dateA - dateB; // Sort in descending order
      });
  }, [data]);

  const handleViewMore = useCallback(() => {
    setItemsToShow(itemsToShow + 3);
  }, [itemsToShow]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Spinner color="blue.500" size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert status="error">
        <p>Error loading the gigs: {error.message}</p>
      </Alert>
    );
  }

  return (
    <>
      {sortedData?.slice(0, itemsToShow).map((value, key) => {
        const { date, venue, adress, add_info } = value.acf;
        const decodedDate = he.decode(striptags(date));
        const decodedVenue = he.decode(striptags(venue));
        const decodedAdress = he.decode(striptags(adress));
        const decodedAddInfo = he.decode(striptags(add_info));

        return (
          <div
            className={styles.projectmain}
            style={{
              borderColor: accent,
              borderRadius: key % 2 === 0 ? "50px 0 0 0" : "0 0 50px 0",
            }}
            key={value.id || key}
          >
            <div className={styles.projectContent}>
              <div
                className={styles.projectIcon}
                style={{
                  color: accent,
                  backgroundColor: footerColor,
                  borderColor: accent,
                }}
              />
              <React.Fragment>
                <h1 className={styles.projectTitle}>Date: {decodedDate}</h1>
                <h2 className={styles.projectTitle}>
                  Name of Venue: {decodedVenue}
                </h2>
                <h3 className={styles.projectTitle} style={{ color: subtext }}>
                  Location: {decodedAdress}
                </h3>
                <Divider sx={{ margin: "5px" }} />
                <h4
                  className={styles.projectSubTitle}
                  style={{ color: subtext }}
                >
                  {decodedAddInfo}
                </h4>
              </React.Fragment>
            </div>
          </div>
        );
      })}
      <div className={styles.buttonContainer}>
        <Button onClick={handleViewMore}>View More</Button>
      </div>
    </>
  );
};

export default HomeGigs2;
