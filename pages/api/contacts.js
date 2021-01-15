const nodemailer = require("nodemailer");
// import dbConnect from '../../utils/dbConnect';
// import Contacts from '../../models/Contacts';

// dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {

        case 'POST':
            try {

                const { name, email, message, phone, location } = req.body;
                
                // create reusable transporter object using the default SMTP transport
                let transporter = nodemailer.createTransport({
                    host: "mail.privateemail.com",
                    port: 587,
                    secure: false, // true for 465, false for other ports
                    auth: {
                        user: process.env.CONTACT_EMAIL_ADDRESS, // generated ethereal user
                        pass: process.env.EMAIL_PASSWORD, // generated ethereal password
                    },
                    // tls: {
                    //     rejectUnauthorized: true
                    // }
                });

                const HTML_body = `
                    <div>
                        <h1>New Contact Email</h1>
                        <h2>Details</h2>
                        <ul>
                            <li>From: ${name}</li>
                            <li>Email: ${email}</li>
                            <li>Phone: ${phone}</li>
                            <li>Location: ${location}</li>
                        </ul>                        
                        <h2>Message</h2>
                        <p>${message}</p>
                    </div>    
                `;

                const mailOption = {
                    from: `Algrith <contact@algrith.com>`, // sender address
                    to: `algrithllc@gmail.com, AlgrithLLC@gmail.com`, // list of receivers
                    subject: "New Contact Mail", // Subject line
                    text: `${message}`, // plain text body
                    html: HTML_body, // html body
                }
                
                await transporter.sendMail(mailOption, (err, data) => {
                    if (err) {
                        return res.status(400).json({ success: false, data: {message: 'An error occured!'} });
                    } else {
                        res.status(201).json({ success: true, data: {message: 'Mail sent!'} })
                    }
                });                

            } catch (error) {
                res.status(400).json({ success: false, data: {message: 'An error occurred!'}});
            }
            break;

        default:
            res.status(400).json({ success: false, data: {message: 'An error occured!'}});
            break;
    }
}
