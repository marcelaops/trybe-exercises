const axios = require("axios");

module.exports = async function fetchApi(_req, res, _next) {
  const result = await axios.get("https://api.coindesk.com/v1/bpi/currentprice/BTC.json");

  res.status(200).json(result.data);
};
