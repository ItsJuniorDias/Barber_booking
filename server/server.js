const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const twilio = require("twilio");

const connectDB = require("./config/db");
const User = require("./models/User");
const Otp = require("./models/Otp");

require("dotenv").config();
connectDB();

// Twilio
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

const app = express();
app.use(express.json());

// Rota para enviar código
app.post("/send-otp", async (req, res) => {
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

  res.json({ success: true, message: "Código enviado!" });
});

// Rota para verificar código
app.post("/verify-otp", async (req, res) => {
  const { phone, code } = req.body;

  const otp = await Otp.findOne({ phone, code });

  if (!otp)
    return res.status(400).json({ success: false, message: "Código inválido" });

  if (otp.expiresAt < new Date())
    return res.status(400).json({ success: false, message: "Código expirado" });

  res.json({ success: true, message: "Verificado com sucesso!" });
});

// Lista dodos os usuários
app.get("/users", authenticateToken, async (req, res) => {
  try {
    const users = await User.find().select("-password"); // remove a senha
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Erro ao buscar usuários" });
  }
});

// Registrar usuário
app.post("/register", async (req, res) => {
  const { name, email, phone, password, confirmPassword } = req.body;

  const existingUser = await User.findOne({ email });
  const existingPhone = await User.findOne({ phone });

  if (existingUser) {
    return res.status(402).json({ message: "Usuário já existe" });
  }

  if (existingPhone) {
    return res.status(401).json({ message: "Celular já cadastrado" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    phone,
    password: hashedPassword,
    confirmPassword,
  });

  await newUser.save();

  res.status(201).json({ message: "Usuário registrado com sucesso!" });
});

// Login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) {
    return res.status(400).json({ message: "Usuário não encontrado" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Senha inválida" });
  }

  const token = jwt.sign(
    { username: user.username, id: user._id },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  res.json({ token });
});

// Middleware para proteger rotas
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
}

// Rota protegida
app.get("/profile", authenticateToken, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");

  res.json({ message: `Bem-vindo, ${user.username}!` });
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
