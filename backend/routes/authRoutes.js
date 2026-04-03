// backend/routes/authRoutes.js

const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const nodemailer = require("nodemailer");

// Create SMTP Transporter (Use Gmail App Password in .env)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Signup
router.post("/signup", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    await newUser.save();
    res.json("User registered");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json("User not found");
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).json("Wrong password");
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "2h" });
    res.json({ token, user });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Forgot Password -> OTP via Real Email
router.post("/forgot-password", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json("Email not registered");

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.resetPasswordToken = otp;
    user.resetPasswordExpires = Date.now() + 600000;
    await user.save();

    const mailOptions = {
      from: `"AgriArya Support" <${process.env.EMAIL_USER}>`,
      to: user.email,
      subject: "Your AgriArya Password Reset OTP 🔐",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 10px; padding: 20px; text-align: center;">
          <h1 style="color: #1A2E24;">Agri<span style="color: #10b981;">Arya</span></h1>
          <hr/>
          <h3>Password Reset Code</h3>
          <p>Hello ${user.username || 'Farmer'}, use the following OTP to reset your password:</p>
          <div style="font-size: 32px; font-weight: bold; background: #f4f4f4; padding: 10px; border-radius: 5px; letter-spacing: 5px;">${otp}</div>
          <p style="color: #999;">Expired in 10 minutes. If you didn't request this, please ignore.</p>
        </div>
      `,
    };

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions);
      console.log(`[AUTH] Real Email Sent to ${user.email}`);
    } else {
      console.log(`[AUTH] DEV MODE: Credentials missing. OTP: ${otp}`);
    }

    res.json({ message: "OTP sent to your email!", resetToken: otp });
  } catch (err) {
    console.error(err);
    res.status(500).json("Error sending email.");
  }
});

// Verify & Reset
router.post("/reset-password", async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    const user = await User.findOne({ resetPasswordToken: token, resetPasswordExpires: { $gt: Date.now() } });
    if (!user) return res.status(400).json("Invalid/Expired OTP");
    user.password = await bcrypt.hash(newPassword, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();
    res.json("Password updated successfully!");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;