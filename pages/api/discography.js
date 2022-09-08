import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://api.discogs.com/artists/1368289/releases',
  params: {sort: 'year', sort_order: 'desc', per_page: '75'}
};

axios.request(options).then((response) => {
  console.log(response.data);
}).catch((error) => {
  console.error(error);
});