import axios from "axios";
import { useState, useEffect } from "react";

const useFetchData = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(endpoint, options)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [endpoint, JSON.stringify(options)]);

  return { data, loading, error };
};

export default useFetchData;
