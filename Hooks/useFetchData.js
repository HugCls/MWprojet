import axios from "axios";
import { useState, useEffect } from "react";

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
        'OAuth oauth_consumer_key="", oauth_nonce="1ADA5sLK9Ia5RPJxOZZKGCSSsG0XykmI", oauth_signature="k4kYQvMiQ8zP%2BucmQJ7l9uVzLIA%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1663625431", oauth_token="goccowdGLBPzAZlfvRejYDekqKykERVdoNHCEsOA", oauth_version="1.0"',
      "User-Agent": "axios/0.19.2 X-SiteSpeedApp-1 EzoicStaticCache",
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

  return {data, loading, error};
};

export default useFetchData;
