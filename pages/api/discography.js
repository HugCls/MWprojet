import axios from "axios";

const options = {
  method: "GET",
  url: "https://api.discogs.com/artists/1368289/releases",
  params: { sort: "year", sort_order: "desc", per_page: "75" },
};

const [releases, setReleases] = useState([]);

const getReleases = async () => {
  axios
    .request(options)
    .then((response) => {
      console.log(response.data);
      const allReleases = response.data;
      setReleases(allReleases);
    })
    .catch((error) => {
      console.error(error);
    });
};

useEffect(() => getReleases(), []);
