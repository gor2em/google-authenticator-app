const express = require("express");
const httpStatus = require("http-status");
const speakeasy = require("speakeasy");
const qrcode = require("qrcode");

const router = express.Router();

//returning new secret and base64
const generateAuthenticatorCode = async (req, res) => {
  const secret = speakeasy.generateSecret({
    name: "authenticator-app-ga",
  });

  const data = await qrcode.toDataURL(secret.otpauth_url);

  return {
    secret: secret, //ascii secret
    data: data, //base64
  };
};

const verifyAuthenticatorCode = (code) => {
  return speakeasy.totp.verify({
    secret: "#M2ngW0%gXRiFbdxTQBc2In&r!h*by)*",
    encoding: "ascii",
    token: parseInt(code),
  });
};

router.get("/getCode", async (req, res) => {
  const generatedCode = await generateAuthenticatorCode();
  return res.status(httpStatus.OK).send(generatedCode);
});

router.post("/auth", (req, res) => {
  const code = req.body?.code;
  if (!code) {
    return res.status(httpStatus.BAD_REQUEST).send({ message: "BAD REQUEST!" });
  }
  const isVerified = verifyAuthenticatorCode(code);

  if (isVerified) {
    // setTimeout(() => {
    return res.status(httpStatus.OK).send({ message: "OK" });
    // }, 10000);
  } else {
    return res.status(httpStatus.NOT_FOUND).send({ message: "NOT FOUND!" });
  }
});

module.exports.AuthenticatorRoute = router;
