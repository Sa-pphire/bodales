const db = require("../models");
const nodemailer = require("nodemailer");

const createOrder = async (req, res) => {
  try{
    const order = await db.User.create(req.body);
    let message, transporter;

    transporter = nodemailer.createTransport({
      host: 'mail.privateemail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    transporter.verify((error, success) =>{
      if (error){
        console.log(error);
      } else {
        console.log("Server is ready to send mail");
      }
    });
  
    message = {
    
      from: 'testmail@kwizin.africa',
      to: 'testmail@kwizin.africa',
      subject: 'You have a new order',
      text: 'A new order has been placed by ' + req.body.fullName + ' to ' + req.body.restaurantName + ' located at ' + req.body.restaurantLocation + ' for ' + req.body.restaurantCuisine + '.'
    };
  
    transporter.sendMail(message, (err, info) => {
      if (err){
        console.log("Error! Email not sent" + info.rejected + info.response);
      } else{
        console.log("Email sent successfully!" + info.messageId);
      }
    });
    return res.status(201).json({
      order,
    });
  } catch (error){
    return res.status(500).json({
      error: error.message
    })
  }

}

module.exports = {
  createOrder
}
