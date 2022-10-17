import axios from "axios";
import { useState, useEffect } from "react";
// require("dotenv").config();
const useFetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: "https://api.discogs.com/artists/1368289/releases",
    params: { sort: "year", sort_order: "desc", per_page: "75" },
    headers: {
      Authorization:
        process.env.DISCOGS_KEY,
    },
  };

  useEffect(() => {
    setLoading(true);
    axios
      .request(options)
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};

export default useFetchData;
