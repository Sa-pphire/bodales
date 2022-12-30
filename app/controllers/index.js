const db = require("../models");
const nodemailer = require("nodemailer");

const createRequest = async (req, res) => {
  try{
    if (req.body.accountType == 'individual'){
      const request = await db.individual.create(req.body);
    }
    else {
      const request = await db.company.create(req.body);
    }
    let message, transporter;

    transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD
      }
    });
    if (req.body.accountType == 'individual'){
      message = {
    
        from: process.env.USER,
        to: process.env.USER,
        subject: 'You have a new request',
        text: 'A new request has been placed by ' + req.body.firstName + " " +  req.body.lastName + ' to move ' + req.body.productDescription + ' from ' + req.body.location + ' to ' + req.body.destination + '.'
      };
    
      transporter.sendMail(message, (err, info) => {
        if (err){
          console.log("Error! Email not sent" + info.rejected + info.response);
        } else{
          console.log("Email sent successfully!" + info.messageId);
        }
      });
      res.writeHead(302, {
        'Location': 'https//wa.me/message/CQKJPRAFGNENK1/?text=Hi,%20I%20am%20${req.body.firstName}%20${req.body.lastName},%20I%20want%20to%20move%20${req.body.productDescription}%20from${req.body.location}%20to${req.body.destination}.'
      });
      res.end();
    }
    else {
      message = {
    
        from: process.env.USER,
        to: process.env.USER,
        subject: 'You have a new request',
        text: 'A new request has been placed by ' + req.body.companyName + ' to move ' + req.body.productDescription + ' from ' + req.body.location + ' to ' + req.body.destination + '.'
      };
    
      transporter.sendMail(message, (err, info) => {
        if (err){
          console.log("Error! Email not sent" + info.rejected + info.response);
        } else{
          console.log("Email sent successfully!" + info.messageId);
        }
      });
      res.writeHead(302, {
        'Location': 'https//wa.me/message/CQKJPRAFGNENK1/?text=Hi,%20We%20are%20${req.body.companyName},%20I%20want%20to%20move%20${req.body.productDescription}%20from${req.body.location}%20to${req.body.destination}%20.'
      });
      res.end();
    }
    return res.status(201).json({
      request,
    });
  } catch (error){
    return res.status(500).json({
      error: error.message
    })
  }

}

module.exports = {
  createRequest
}
