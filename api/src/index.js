const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const { AuthenticatorRoute } = require("./authenticator");

app.listen(5000, () => {
  console.log("app is running");

  app.use("/user", AuthenticatorRoute);
});
