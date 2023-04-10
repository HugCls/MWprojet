import axios from "axios";
import { useState, useEffect } from "react";

const useFetchDiscs = (sortOption = "year") => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://www.wp.michaelmudcatward.com/wp-json/acf/v3/discs?per_page=100"
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [sortOption]);

  return { data, loading, error };
};

export default useFetchDiscs