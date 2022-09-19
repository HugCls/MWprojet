import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://api.discogs.com/artists/1368289/releases',
  params: {sort: 'year', sort_order: 'desc', per_page: '75'},
  headers: {
    Authorization: 'OAuth oauth_consumer_key="", oauth_nonce="neAstJtZ0ElmEYJRTvcV6XZ11TOkrP4T", oauth_signature="HrEx5gGRp3%2FYGfjbXrAPJ1UVoAs%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1663622496", oauth_token="goccowdGLBPzAZlfvRejYDekqKykERVdoNHCEsOA", oauth_version="1.0"'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
