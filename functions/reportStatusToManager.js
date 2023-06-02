const axios = require("axios");
const managerUrl = 'http://3.252.90.40:8000/fleet-manager'

const reportStatusToManager = async () => {
   await axios.get(managerUrl)
};
module.exports = reportStatusToManager;
