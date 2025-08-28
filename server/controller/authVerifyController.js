const Otp = require("../models/Otp");
const twilio = require("twilio");

const verifyOtp = async (req, res) => {
  const { phone, code } = req.body;

  const otp = await Otp.findOne({ phone, code });

  if (!otp)
    return res.status(400).json({ success: false, message: "Código inválido" });

  if (otp.expiresAt < new Date())
    return res.status(400).json({ success: false, message: "Código expirado" });

  return res.json({ success: true, message: "Verificado com sucesso!" });
};

module.exports = verifyOtp;
