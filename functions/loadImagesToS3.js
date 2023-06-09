const { writeS3 } = require("./writeS3");
const axios = require("axios");

const loadImagesToS3 = async (req, res) => {

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

  const { body } = req;
  const { sourceUrl, targetBucket, fileName } = body;

  const response = await loadFromUrl(sourceUrl);
  const statusCode = response.status;

  if (statusCode !== 200) return { statusCode };

  try {
    buffer = await Buffer.from(response.data, "binary");
  } catch (e) {
    return { error: "buffer formation feil", statusCode };
  }

  const storeInS3 = await writeS3({
    ContentType: "image/jpeg",
    Bucket: targetBucket,
    Key: fileName,
    Body: buffer,
  });

  if (storeInS3 && storeInS3.error) {
    return { error: "S3 upload feil", statusCode };
  }
  return { statusCode };

};
module.exports = loadImagesToS3;
