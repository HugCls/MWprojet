import axios from "axios";
import { useState, useEffect } from "react";

const options = {
  method: "GET",
  url: "https://api.discogs.com/artists/1368289/releases",
  params: { sort: "year", sort_order: "desc", per_page: "75" },
};

const useFetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    axios
      .request(options)
      .then((response) => setData(response.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(true));
  }, [options]);

  return { data, loading, error };
};

export default useFetchData;
