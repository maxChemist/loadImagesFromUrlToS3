const axios = require("axios");
const managerUrl = "http://3.252.90.40:8000/fleet-manager";
const simpleToken = "RNR-project-token";

const reportStatusToManager = async () => {
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

  const localIp = await (
    await axios.get(`http://169.254.169.254/latest/meta-data/local-ipv4`)
  ).data;

  await axios.post(
    managerUrl,
    { id, region, publicIp, localIp },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${simpleToken}`,
      },
    }
  );
};
module.exports = reportStatusToManager;
