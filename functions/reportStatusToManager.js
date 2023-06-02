const axios = require("axios");
const managerUrl = "http://3.252.90.40:8000/fleet-manager";
const simpleToken = "RNR-project-token";

const reportStatusToManager = async () => {
  await axios.get("http://3.252.90.40:8000");

  // -- form ec2 info --
  const id = await (
    await axios.get(`http://169.254.169.254/latest/meta-data/instance-id`)
  ).data;

  const region = await (
    await axios.get(`http://169.254.169.254/latest/meta-data/placement/region`)
  ).data;

  const publicIp = await (
    await axios.get(`http://169.254.169.254/latest/meta-data/public-ipv4`)
  ).data;

  try {
    const response = await axios.post(
      managerUrl,
      { ip, region, publicIp },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${simpleToken}`,
        },
      }
    );
    const text = JSON.stringify(response.data);

    await axios.post("http://3.252.90.40:8000", { post: true, text });
  } catch (error) {
    const errorObj = {
      message: transaction.error.message,
      name: transaction.error.name,
      stack: transaction.error.stack,
      fileName: transaction.error.fileName,
      lineNumber: transaction.error.lineNumber,
      columnNumber: transaction.error.columnNumber,
    }
    await axios.post("http://3.252.90.40:8000", { error: true, errorObj });
  }
};
module.exports = reportStatusToManager;
