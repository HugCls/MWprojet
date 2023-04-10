import axios from "axios";
import { useState, useEffect } from "react";

const useFetchGigs = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

const options = {
  method: 'GET',
  url: 'https://www.wp.michaelmudcatward.com/wp-json/acf/v3/gigs',
};

useEffect(() => {
    setLoading(true);
    axios
      .request(options)
      .then((response) => {
        setData(response.data);
        // console.log(response.data);

      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };

};

export default useFetchGigs;