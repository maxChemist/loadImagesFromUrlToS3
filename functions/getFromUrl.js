const axios = require("axios");
const atob = require('atob');

const getFromUrl = async (req, res) => {
  // -- constnts and functions --
  const loadFromUrl = async (url) => {
    return new Promise((resolve) => {
      axios
        .get(url)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          resolve(err.response);
        });
    });
  };
  // ----------------------------------

  const { query } = req;
  const urlEncoded = query ? query.url : "";
  if (!urlEncoded) return { error: "url not found" };

  const url = atob(urlEncoded);
  const response = await loadFromUrl(url);
  const statusCode = response.status;
  const data = response.data;

  if (statusCode !== 200) return { statusCode };
  return { statusCode, data };
};
module.exports = getFromUrl;
