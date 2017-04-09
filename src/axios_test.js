var axios = require("axios");

axios.get('https://api.tfl.gov.uk/line/mode/tube/status')
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });