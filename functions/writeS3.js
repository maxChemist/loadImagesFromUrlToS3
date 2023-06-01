"use strict";
const S3 = require("aws-sdk/clients/s3");

const writeS3 = async (params) => {
  const s3 = new S3({
    maxRetries: 10,
    signatureVersion: "v4",
  });
  return new Promise(async (resolve) => {
    s3.upload(params, async (error, data) => {
      if (error) {
        resolve({ error: err });
      } else {
        resolve({ data });
      }
    });
  });
};
module.exports = {
  writeS3,
};
