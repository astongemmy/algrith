const hbs = require('nodemailer-express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');

export default async (req, res) => {
	switch (req.method) {
		case 'POST':
			try {
				const { name, email, message, phone, country, customTopic, topic } = req.body;
				
				const transporter = nodemailer.createTransport({
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
						partialsDir: path.resolve('./templates'),
						extName: '.handlebars',
						defaultLayout: false
					},
					viewPath: path.resolve('./templates'),
					extName: '.handlebars'
				};

				transporter.use('compile', hbs(handlebarOptions));

				const mailOption = {
					subject: process.env.CONTACT_MAIL_SUBJECT,
					from: process.env.CONTACT_MAIL_SENDER,
					to: process.env.CONTACT_MAIL_RECEIVER,
					template: 'contact-email',
					text: message,
					context: {
						customTopic,
						country,
						message,
						topic,
						email,
						phone,
						name
					}
				};

				transporter.sendMail(mailOption, (err, data) => {
					if (err) return res.status(400).json({
						message: 'Could not send mail!',
						success: false,
						data: {},
					});

					return res.status(200).json({
						message: 'Mail sent!',
						success: true,
						data: data,
					});
				});
			} catch (error) {
				return res.status(500).json({
					message: 'Server error!',
					success: false,
					data: {},
				});
			}

			break;

		default:
			return res.status(405).json({
				message: 'Method not allowed',
				success: false,
				data: {}
			});

			break;
	};
};