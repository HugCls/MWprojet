/* eslint-disable import/no-anonymous-default-export */
export default function (req, res) {
  require("dotenv").config({ path: `${__dirname}/../../Collections/.env` });

  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    
  });
  const mailData = {
    from: process.env.SENDER,
    to: process.env.TO,
    subject: `Message From Michael 'Mudcat' Ward's Website`,
    text: `${req.body.message} | Sent from: ${req.body.email}`,
    html: `<p>Name: ${req.body.name}</p><p>Email: ${req.body.email}</p><p>Phone: ${req.body.phone}</p><p>Message: ${req.body.message}</p>`,
  };
  transporter.sendMail(mailData, (err, info) => {
    if (err) console.log("error");
    else console.log("info");
  });
  res.status(200);
}
