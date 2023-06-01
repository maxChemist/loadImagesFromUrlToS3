class Controller {
  async get(req, res) {
    try {
      res.send("Server work");
    } catch (err) {
      console.log('error: ', err)
    }
  }
}

module.exports = new Controller();
