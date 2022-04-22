const request = require('request');
const args = process.argv.slice(2);
const cat = args[0];

const fetchDescription = breed => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${cat}`;
  request(url, (error, response, body) => {
    if (response.statusCode !== 200) {
      console.log(`Sorry! Something went wrong: ${body}'`);
      return;
    }
    const data = JSON.parse(body);
    if (data.length == 0) {
      console.log('No matches found, try searching fur something else!');
    } else {
      console.log(data[0].description);
    }
  });
};

fetchDescription();
