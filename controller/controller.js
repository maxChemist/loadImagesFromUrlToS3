const loadImagesToS3 = require("../functions/loadImagesToS3");
const getFromUrl = require("../functions/getFromUrl");

class Controller {
  async get(req, res) {
    try {
      res.send("Server work");
    } catch (err) {
      res.send("Some error ocures");
    }
  }

  async loadImageReq(req, res) {
    const response = await loadImagesToS3(req, res);
    res.status(200).json(response);
  }

  async getUrl(req, res) {
    try {
      const response = await getFromUrl(req, res);
      res.status(200).json(response);
    } catch (error) {
      res
        .status(200)
        .json({
          message: error.message,
          name: error.name,
          stack: error.stack,
          fileName: error.fileName,
          lineNumber: error.lineNumber,
          columnNumber: error.columnNumber,
        });
    }
  }
}

module.exports = new Controller();
