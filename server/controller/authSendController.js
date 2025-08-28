const Otp = require("../models/Otp");
const twilio = require("twilio");

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

const sendOtp = async (req, res) => {
  const { phone } = req.body;

  const code = Math.floor(1000 + Math.random() * 9000).toString();

  await Otp.create({
    phone,
    code,
    expiresAt: new Date(Date.now() + 5 * 60 * 1000),
  });

  // Enviar SMS
  await client.messages.create({
    body: `Seu código de verificação é: ${code}`,
    from: process.env.TWILIO_PHONE, // Número do Twilio
    to: phone,
  });

  return res.json({ success: true, message: "Código enviado!" });
};

module.exports = sendOtp;
