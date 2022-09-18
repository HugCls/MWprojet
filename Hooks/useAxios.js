import { useState, useEffect } from "react";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://api.discogs.com/artists/1368289/releases",
  params: { sort: "year", sort_order: "desc", per_page: "75" },
};

const useAxios = () => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    axios
      .request(options)
      .then((response) => {
        setResponse(response.data);
        console.log(response.data);
      })
      console.log(response)
      .catch((error) => {
        setError(error);
        console.error(error);
      })
      .finally(() => {
        setloading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    [response, error, loading]
);
};


export default useAxios;
