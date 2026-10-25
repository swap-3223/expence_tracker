// const nodeMailer = require('nodemailer')
// require('dotenv').config()
// const sendMail = async({name,email,message})=>{
//     try {
//         const transporter = nodeMailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.MAIL_USER,
//     pass: process.env.MAIL_PASS,
//   },
// });
//         const mailOption={
//             from:email, 
//             to:process.env.MAIL_USER,
//             subject:`New Contact Message from ${name}`,
//             html:`
//         <h2>New Contact Message</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong><br/>${message}</p>
//       `
// //             html: `
// //   <div style="font-family: 'Segoe UI', Tahoma, sans-serif; padding: 20px; background: #f4f6f8;">
// //     <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
      
// //       <div style="background: linear-gradient(135deg, #4A90E2, #007AFF); padding: 20px;">
// //         <h2 style="color: white; margin: 0; font-size: 24px; text-align: center;">📩 New Contact Message</h2>
// //       </div>
      
// //       <div style="padding: 25px;">
// //         <p style="font-size: 16px; color: #333;">Hello Admin,</p>
// //         <p style="font-size: 15px; color: #555;">
// //           You have received a new message via your contact form. Here are the details:
// //         </p>

// //         <div style="margin: 20px 0; padding: 15px; background: #f9fbfd; border-left: 4px solid #007AFF;">
// //           <p style="margin: 5px 0;"><strong style="color:#007AFF;">Name:</strong> ${name}</p>
// //           <p style="margin: 5px 0;"><strong style="color:#007AFF;">Email:</strong> ${email}</p>
// //           <p style="margin: 5px 0;"><strong style="color:#007AFF;">Message:</strong></p>
// //           <div style="margin-top: 10px; padding: 12px; background:#fff; border-radius:8px; border:1px solid #eee;">
// //             ${message}
// //           </div>
// //         </div>

// //         <p style="font-size: 14px; color: #888; margin-top: 30px;">
// //           This is an automated notification. Please do not reply to this email.
// //         </p>
// //       </div>

// //       <div style="background: #f1f1f1; padding: 12px; text-align: center; font-size: 13px; color: #666;">
// //         © ${new Date().getFullYear()} Your Website — All Rights Reserved.
// //       </div>
// //     </div>
// //   </div>
// // `,
//     }
//     await transporter.sendMail(mailOption)
//     return true;
//         }
//      catch (err) {
//     console.log("Email Error:", err);
//     return false;
//   }
// };

// module.exports = sendMail;

// // const nodeMailer = require('nodemailer');
// // require('dotenv').config();

// // const sendMail = async ({ name, email, message }) => {
// //   try {
// //     const transporter = nodeMailer.createTransport({
// //       host: "smtp.gmail.com",
// //       port: 465,
// //       secure: true, 
// //       auth: {
// //         user: process.env.MAIL_USER,
// //         pass: process.env.MAIL_PASS
// //       }
// //     });

// //     const mailOptions = {
// //       from: `ExpenseTracker <${process.env.MAIL_USER}>`,
// //       to: process.env.MAIL_USER,
// //       replyTo: email,
// //       subject: `New Contact Message from ${name}`,
// //       html: `
// //         <h2>New Message</h2>
// //         <p><b>Name:</b> ${name}</p>
// //         <p><b>Email:</b> ${email}</p>
// //         <p><b>Message:</b> ${message}</p>
// //       `
// //     };

// //     await transporter.sendMail(mailOptions);
// //     return true;

// //   } catch (err) {
// //     console.log("Email Error:", err);
// //     return false;
// //   }
// // };

// // module.exports = sendMail;


// // const { Resend } = require('resend');
// // require('dotenv').config();

// // const resend = new Resend(process.env.RESEND_API_KEY);

// // const sendMail = async ({ name, email, message }) => {
// //   try {
// //     await resend.emails.send({
// //       from: "ExpenseTracker <onboarding@resend.dev>",
// //       to: process.env.MAIL_USER,  
// //       reply_to: email,
// //       subject: `New Contact Message from ${name}`,
// //       html: `
// //         <div style="font-family: Arial, sans-serif; padding: 20px;">
// //           <h2 style="color:#007AFF;">📩 New Contact Message</h2>
// //           <p><strong>Name:</strong> ${name}</p>
// //           <p><strong>Email:</strong> ${email}</p>
// //           <p><strong>Message:</strong></p>
// //           <div style="padding: 10px; background:#f7f7f7; border-radius:5px;">
// //             ${message}
// //           </div>
// //           <br/>
// //           <p style="font-size:12px; color:#777;">This email was sent automatically by your website.</p>
// //         </div>
// //       `
// //     });

// //     return true;
// //   } catch (err) {
// //     console.log("Resend Email Error:", err);
// //     return false;
// //   }
// // };

// // module.exports = sendMail;
