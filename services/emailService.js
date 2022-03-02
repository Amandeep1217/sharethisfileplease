const nodemailer = require('nodemailer');

 async function sendMail({from , to, subject, text, html}){

    let transporter = nodemailer.createTransport({
        service: "Gmail" ,
        auth:{
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });
         
    let info = await transporter.sendMail({
        from: `inShare <${from}>`,
        to: to,
        subject:subject,
        text: text,
        html:html
    })
   
}
module.exports = sendMail;
