const db = require("../models");
const nodemailer = require("nodemailer");

const createRequest = async (req, res) => {
  try{
    if (req.body.accountType == 'individual'){
      const request = await db.individual.create(req.body);
      return res.status(201).json({
        "status": 201,
        request
      })
    }
    else {
      const request = await db.company.create(req.body);
      return res.status(201).json({
        "status": 201,
         request
      })
    }
    /*
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
  
    if (req.body.accountType == 'individual'){
      message = {
    
        from: "hello@bodales.com",
        to: "hello@bodales.com",
        subject: 'You have a new request',
        text: 'A new request has been placed by ' + req.body.firstName + " " +  req.body.lastName + ' to move ' + req.body.productDescription + ' from ' + req.body.location + ' to ' + req.body.destination + '.'
      };
    
      transporter.sendMail(message, (err) => {
        if (err){
          console.log("Error! Email not sent");
        } else{
          console.log("Email sent successfully!");
        }
      });
      
    }
    else {
      message = {
    
        from: "hello@bodales.com",
        to: "hello@bodales.com",
        subject: 'You have a new request',
        text: 'A new request has been placed by ' + req.body.companyName + ' to move ' + req.body.productDescription + ' from ' + req.body.location + ' to ' + req.body.destination + '.'
      };
    
      transporter.sendMail(message, (err) => {
        if (err){
          console.log("Error! Email not sent");
        } else{
          console.log("Email sent successfully!");
        }
      });
    } */
  } catch (error){
    return res.status(500).json({
      "status": 500,
      error: error.message
    })
  }

}

module.exports = {
  createRequest
}
