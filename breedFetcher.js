const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error);
    }
    const data = JSON.parse(body);
    if (data.length == 0) {
      callback(error);
    } else {
      callback(error, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };
