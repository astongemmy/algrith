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
			text: "If You're not sure how to use technology in your business.\n You're looking for ways to optimize your business using technology to save time and money?\n Looking for excellence at an affordable rate?",
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