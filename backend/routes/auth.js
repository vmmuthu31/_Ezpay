const express = require("express");
const router = express.Router();
var nodemailer = require("nodemailer");
const crypto = require("crypto");
const Reward = require("../models/rewards"); // Path to your Reward model

var transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: "social@gigshub.xyz",
    pass: "vtlh yxlx otpp note",
  },
});
router.post("/claimreward", async (req, res) => {
  const { emailAddress, uniqueCode } = req.body;

  try {
    const reward = await Reward.findOne({ emailAddress, uniqueCode });

    if (!reward) {
      return res.status(404).send("Reward not found.");
    }

    if (reward.claimed) {
      return res.status(400).send("Reward has already been claimed.");
    }

    reward.claimed = true;
    await reward.save();
    res.send("Reward claimed successfully.");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/sendemail", (req, res) => {
  const { recipients, amount, token } = req.body;

  const subject = "🚀 Welcome to EzPay: Start Your Adventure!";
  const uniqueCode = crypto.randomBytes(8).toString("hex");

  const html = `
  <!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; }
    .container { width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { color: #7742FE; font-size: 24px; text-align: center; }
    .content { color: #333; font-size: 16px; line-height: 1.6; }
    .bold { font-weight: bold; }
    .button { background-color: #7742FE; color: white; padding: 10px 20px; text-align: center; display: inline-block; margin: 20px 0; text-decoration: none; border-radius: 5px; }
    .footer { text-align: center; margin-top: 30px; font-size: 14px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <h1 class="header">Unlock Infinite Possibilities with EZPay! 🌐</h1>
    <p class="content">You have been awarded ${amount} ${token}. Your unique code is: ${uniqueCode}</p>

    <p class="content">Welcome to EZPay, where your interaction with tokens opens up a new world of opportunities. Here's what you can look forward to in our unique ecosystem. 🚀</p>
    
    <p class="content"><span class="bold">Reward and Share Tokens:</span> Effortlessly send and receive tokens as a show of appreciation or reward.</p>
    <p class="content"><span class="bold">Claim Your Rewards:</span> Enjoy the benefits of a robust and seamless reward system.</p>
    <p class="content"><span class="bold">Join Our Community:</span> Be part of a dynamic community that's at the forefront of the token-based economy.</p>
    <br/>
    <p class="content">Start exploring the endless possibilities with EZPay! <a href="https://ezpay-pi.vercel.app/" class="button">Get Started</a></p>
    
    <p class="footer">Need assistance or have questions? We're here to help.<br>Join the revolution,<br>The EZPay Team 🌟</p>
  </div>
</body>
</html>`;
  let errors = [];
  let successCount = 0;

  recipients.forEach(async (email) => {
    const newReward = new Reward({
      emailAddress: email,
      amount,
      token,
      uniqueCode,
    });
    await newReward.save();

    const mailOptions = {
      from: "hello@ezpay.xyz",
      to: email,
      subject,
      html,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending to:", email, error);
        errors.push({ email, error });
      } else {
        console.log("Email sent to:", email, info.response);
        successCount++;
      }

      if (errors.length + successCount === recipients.length) {
        if (errors.length > 0) {
          res
            .status(500)
            .json({ message: "Some emails failed to send", errors });
        } else {
          res.status(200).send("All emails sent successfully");
        }
      }
    });
  });
});

module.exports = router;
