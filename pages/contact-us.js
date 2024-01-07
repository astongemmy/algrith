import Head from 'next/head';
import React from 'react';

import Contact from '../components/Contact';
import Layout from '../components/Layout';
import Intro from '../components/Intro';

const ContactUs = () => {
	const intro = {
		title: {
			text: "Send in your thoughts!",
			align: "",
			case: ""
		},
		description: {
			text: "Are you looking for ways to optimize your business using technology to save time and money?\n Looking for business excellence at an affordable rate?\n Not sure how technology can help your business?",
			align: "",
			case: ""
		},
		slogan: "Our response culture is swift",
		scroll_to: "contact",
		accomodate: true
	};
	
	return (
		<Layout>
			<Head>
				<meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
				<title> Contact Us | Algrith </title>
			</Head>
			
			<main className="relative">
				<Intro payload={intro} />
				<Contact />
			</main>
		</Layout>
	);
};

export default ContactUs;