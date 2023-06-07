const axios = require("axios");

const getFromUrl = async (req, res) => {
  // -- constnts and functions --
  const loadFromUrl = async (url) => {
    return new Promise((resolve) => {
      axios
        .get(url, { responseType: "arraybuffer" })
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

  if (statusCode !== 200) return { statusCode, data: response.data };
  return { statusCode };
};
module.exports = getFromUrl;
