const express = require("express");
const sendOtp = require("../controller/authSendController.js");
const verifyOtp = require("../controller/authVerifyController.js");

const router = express.Router();

router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);

module.exports = router;
