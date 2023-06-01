const axios = require("axios");
const loadImagesToS3 = require("../functions/loadImagesToS3");

class Controller {
  async get(req, res) {
    try {
      res.send("Server work");
    } catch (err) {
      console.log('error: ', err)
    }
  }

  async loadImageReq(req, res){
    const response = await loadImagesToS3(req, res)
    res.status(200).json(response);
  }

}

module.exports = new Controller();
