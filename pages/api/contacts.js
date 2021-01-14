const nodemailer = require("nodemailer");
import dbConnect from '../../utils/dbConnect';
import Contacts from '../../models/Contacts';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {

        case 'GET':
            try {
                const contacts = await Contacts.find({});
                res.status(200).json({ success: true, data: contacts })
            } catch (error) {
                res.status(400).json({ success: false, data: {message: 'An error occured!'}});
            }
            break;

        case 'POST':
            try {

                const { name, email, message } = req.body;

                const transporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                        user: process.env.EMAIL_ADDRESS,
                        pass: process.env.EMAIL_PASSWORD,
                    },
                });

                const mailOption = {
                    from: email,
                    to: process.env.EMAIL_ADDRESS,
                    subject: `@Contact Algrith from ${name}`,
                    text: message,
                };

                transporter.sendMail(mailOption, (err, data) => {
                    if (err) {
                        return res.status(400).json({ success: false, data: {message: err.message} });
                    } else {
                        // const contact = await Contacts.create(req.body);
                        // res.status(201).json({ success: true, data: contact })
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
