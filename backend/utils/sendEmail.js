const nodemailer = require('nodemailer');

const sendEmail = async options => {
    const transporter = nodemailer.createTransport({
        service: 'outlook',
        // host: process.env.SMTP_HOST,
        // port: process.env.SMTP_PORT,
         auth: {
             user: process.env.REAL_EMAIL,
             pass: process.env.REAL_PASSWORD
         }
    });

    const message = {
        from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
        to: options.email,
        subject: options.subject,
        text: options.message
    }

    await transporter.sendMail(message)
}

module.exports = sendEmail;