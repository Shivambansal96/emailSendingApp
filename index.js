

const express = require('express');
const nodemailer = require('nodemailer')

require('dotenv').config();


    // This is for gmail 

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com', // Replace with your provider's SMTP server
    port: 465, // 465 for true nad 587 for false, Port may vary depending on your provider
    secure: true, // Use true for TLS, false for non-TLS (consult your provider)
    auth: {
      user: process.env.User_name, // Replace with your email address
      pass: process.env.PASSWORD // Replace with your email password
    }
  });
  // console.log(process.env.User_name);

  // console.log(transporter.auth.user);
  // console.log(transporter.auth.pass);
  // console.log(process.env.User_name);
  // console.log(process.env.PASSWORD);

// Dummy Mailer 

// const transporter = nodemailer.createTransport({
//     host: 'localhost', // Replace with your provider's SMTP server
//     port: 1025, // Port may vary depending on your provider
//     secure: false, // Use true for TLS, false for non-TLS (consult your provider)
//     debug: true
//   });

//   const mailOptions = {
//     from: 'donotreply@dG.com', // Replace with your email address
//     to: 'mohinibansal1997@gmail.com', // Replace with the recipient's email address
//     subject: 'Sending Email using Nodemailer', // Replace with your desired subject
//     // text: 'This is my first dummy email.', // Plain text content
//     // or
//     html: `
//     <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Email Template</title>
// </head>
// <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
//     <table border="0" cellpadding="0" cellspacing="0" width="100%">
//         <tr>
//             <td style="padding: 20px 0 30px 0;">
//                 <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border: 1px solid #cccccc; border-collapse: collapse; background-color: #ffffff;">
//                     <tr>
//                         <td align="center" bgcolor="#70bbd9" style="padding: 40px 0 30px 0; color: #ffffff; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;">
//                             Welcome to Our Service!
//                         </td>
//                     </tr>
//                     <tr>
//                         <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
//                             <table border="0" cellpadding="0" cellspacing="0" width="100%">
//                                 <tr>
//                                     <td style="color: #153643; font-family: Arial, sans-serif; font-size: 24px;">
//                                         <b>Hello, John Doe!</b>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td style="padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
//                                         We're excited to have you get started. First, you need to confirm your account. Just press the button below.
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td align="center">
//                                         <a href="#" style="background-color: #007BFF; color: #ffffff; padding: 15px 25px; text-decoration: none; font-size: 16px; border-radius: 5px;">Confirm Account</a>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td style="padding: 30px 0 0 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
//                                         If you have any questions, feel free to <a href="#" style="color: #007BFF; text-decoration: none;">contact our support team</a>. We're here to help!
//                                     </td>
//                                 </tr>
//                             </table>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td bgcolor="#ee4c50" style="padding: 30px 30px 30px 30px;">
//                             <table border="0" cellpadding="0" cellspacing="0" width="100%">
//                                 <tr>
//                                     <td style="color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;" width="75%">
//                                         &reg; Someone, somewhere 2024<br/>
//                                         <a href="#" style="color: #ffffff;"><font color="#ffffff">Unsubscribe</font></a> to this newsletter instantly
//                                     </td>
//                                     <td align="right" width="25%">
//                                         <table border="0" cellpadding="0" cellspacing="0">
//                                             <tr>
//                                                 <td style="font-size: 12px; font-weight: bold;">
//                                                     <a href="http://www.twitter.com/" style="color: #ffffff;">
//                                                         <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="Twitter" width="38" height="38" style="display: block;" border="0"/>
//                                                     </a>
//                                                 </td>
//                                                 <td style="font-size: 12px; font-weight: bold;">
//                                                     <a href="http://www.facebook.com/" style="color: #ffffff;">
//                                                         <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="Facebook" width="38" height="38" style="display: block;" border="0"/>
//                                                     </a>
//                                                 </td>
//                                             </tr>
//                                         </table>
//                                     </td>
//                                 </tr>
//                             </table>
//                         </td>
//                     </tr>
//                 </table>
//             </td>
//         </tr>
//     </table>
// </body>
// </html>

//     ` // HTML content (optional)
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });

const app = express();
app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.send(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Form</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          form {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            width: 400px;
          }
          label {
            font-weight: bold;
          }
          input[type="email"],
          input[type="text"],
          textarea {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
          }
          textarea {
            height: 100px;
          }
          button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
          }
          button:hover {
            background-color: #45a049;
          }
        </style>
        </head>
        <body>
        
        <form action="/send-email" method="post">
          <label for="email">Email:</label><br>
          <input type="email" id="email" name="email" required><br>
          <label for="subject">Subject:</label><br>
          <input type="text" id="subject" name="subject" required><br>
          <label for="message">Message:</label><br>
          <textarea id="message" name="message" rows="4" required></textarea><br><br>
          <button type="submit">Send Email</button>
        </form>
        
        </body>
        </html>  `
    )
})

app.post('/send-email', (req, res) => {
    console.log(req.body);


    const mailOptions = {
        from: {
          name: 'Shivam Bansal',
          Username: process.env.User_name
        }, // Replace with your email address
        to: req.body.email, // Replace with the recipient's email address
        subject: req.body.subject, // Replace with your desired subject
        // text: 'This is my first dummy email.', // Plain text content
        // text: req.body.message
        // or
        html: req.body.message
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

})

app.listen(8008, () => {
    console.log('Server is running at PORT http://localhost:8008');
})
