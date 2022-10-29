import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const path = require('path');
// const express = require('express');
 
// const nodemailer = require('nodemailer');
// const app = express();
// const cors = require('cors')
// app.use(cors())
// const buildPath = path.join(__dirname, '..', 'build');
// app.use(express.json());
// app.use(express.static(buildPath)); 

// app.post('/users',(req,res)=>{
 
//   var transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'your mail',
//         pass: 'password'
//       }
//   });

//   var mailOptions = {
//       from: 'your mail',// sender address
//       to: req.body.to, // list of receivers
//       subject: req.body.subject, // Subject line
//       text:req.body.description,
//       html: `
//       <div style="padding:10px;border-style: ridge">
//       <p>You have a new contact request.</p>
//       <h3>Contact Details</h3>
//       <ul>
//           <li>Email: ${req.body.to}</li>
//           <li>Subject: ${req.body.subject}</li>
//           <li>Message: ${req.body.description}</li>
//       </ul>
//       `
//   };
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error)
//     {
//       res.json({status: true, respMesg: 'Email Sent Successfully'})
//     } 
//     else
//     {
//       res.json({status: true, respMesg: 'Email Sent Successfully'})
//     }
 
//   });
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// listen to the port
// app.listen(5000, () => {
//   console.log('server start on port 3030');
// });


