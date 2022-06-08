const path = require('path')
const nodemailer = require("nodemailer");
const hbs = require('nodemailer-express-handlebars');

export default async (req, res) => {
	switch (req.method) {
		case 'POST':
			try {
				const { name, email, message, phone, country } = req.body;
				let transporter = nodemailer.createTransport({
					host: process.env.CONTACT_MAIL_AUTH_HOST,
					port: process.env.CONTACT_MAIL_AUTH_PORT,
					secure: true, // true for 465, false for other ports
					auth: {
						user: process.env.CONTACT_MAIL_AUTH_USERNAME, // generated ethereal user
						pass: process.env.CONTACT_MAIL_AUTH_PASSWORD, // generated ethereal password
					}
				});
				const handlebarOptions = {
					viewEngine: {
						extName: ".handlebars",
						partialsDir: path.resolve('./templates'),
						defaultLayout: false,
					},
					viewPath: path.resolve('./templates'),
					extName: ".handlebars",
				}				
				transporter.use('compile', hbs(handlebarOptions));				
				const mailOption = {
					from: process.env.CONTACT_MAIL_SENDER, // sender address
					to: process.env.CONTACT_MAIL_RECEIVER, // list of receivers
					subject: process.env.CONTACT_MAIL_SUBJECT, // Subject line
					text: message, // plain text body
					template: 'contact-email',
					context: {
						name: name,
						email: email,
						phone: phone,
						country: country,
						message: message
					}
				}
				transporter.sendMail(mailOption, (err, data) => {
					if (err) return res.status(400).json({
						success: false,
						message: 'Could not send mail!',
						data: {},
					});
					return res.status(200).json({
						success: true,
						data: data,
						message: 'Mail sent!'
					})
				});
			} catch (error) {
				return res.status(500).json({
					success: false,
					data: {},
					message: 'Server error!'
				});
			}
			break;
		default:
			return res.status(405).json({
				success: false,
				data: {},
				message: 'Unallowed request method!'
			});
			break;
	}
}