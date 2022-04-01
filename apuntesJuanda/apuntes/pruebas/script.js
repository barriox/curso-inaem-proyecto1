const request = require("request");

const pais = document.querySelector("#pais").value;
const url = `https://restcountries.com/v3.1/alpha/${pais}`;

let options = { json: true };

request(url, options, (error, res, body) => {
  if (error) {
    return console.log(error);
  }

  if (!error && res.statusCode == 200) {
    res.send(body);
  }
});
request.listen(3000);
