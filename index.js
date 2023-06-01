const cors = require("cors");
const express = require("express");
const useRouter = require("./routes/router");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", useRouter);
const server = require("http").createServer(app);
const PORT = 7654;
const start = async () => {
  setInterval(() => {
    scrapManager();
  }, 60000);
  try {
    server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log("Error on server launch: ", e);
  }
};
start();
