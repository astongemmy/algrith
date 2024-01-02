import Head from 'next/head';
import React from 'react';

import Outline from '../components/Outline';
import Layout from '../components/Layout';
import Intro from '../components/Intro';

const About = () => {
	const intro = {
		title: {
			text: "Who we really are!",
			align: "",
			case: ""
		},
		description: {
			text: "We are a software company dedicated to delivering elegant, efficient,\n secure, accessible etc, web applications and websites for use by\n clients both in the public and private sector.",
			align: "",
			case: ""
		},
		slogan: "We make happy clients",
		scroll_to: "outline"
	}
	const outlines = {
		title: 'What we really do',
		illustration: {
			align: { x: 'left', y: 'top' },
			dimension: {
				md: { x: 20, y: 32, scale: 65 },
				lg: { x: 52, y: 72, scale: 45 }
			},
			src: './images/illustrations/girl_3.gif'
		},
		items: [
			{
				title: 'Web Application Development',
				subtitle: 'Exposure',
				icon: 'fa fa-globe',
				content: 'Need a web application for your business or industry?'
			},
			{
				title: 'Artificial Intelligence',
				subtitle: 'Relief',
				icon: 'fa fa-chart-bar',
				content: 'Want to know how to integrate AI into your business?'
			},
			{
				title: 'Website Revamp (Redesign)',
				subtitle: 'Sophistication',
				icon: 'fa fa-code-branch',
				content: 'Does your website need an aesthetically pleasing new look?'
			},
			{
				title: 'Business Optimization',
				subtitle: 'Upgrade',
				icon: 'fa fa-code-branch',
				content: 'Are you looking to automate repetitive tasks, or improve overall workflow in order to make your customers happier?. Our team of skilled developers is dedicated to creating software that aligns seamlessly with your business goals.'
			}
		]
	}

	return (
		<Layout>
			<Head>
				<meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
				<title> About | Algrith </title>
			</Head>
			<main>
				<Intro payload={intro} />
				<Outline outline={outlines} />
			</main>
		</Layout>
	)
};

export default About;