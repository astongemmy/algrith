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
				content: 'Elevate businesses with cutting-edge web applications. Seamless, efficient, and tailored solutions for success.',
				title: 'Web Application Development',
				icon: 'bi bi-code-slash text-2xl',
				subtitle: 'Exposure'
			},
			{
				content: 'Unlock possibilities with our AI services—innovative solutions for smarter automation, enhanced decision-making, and unparalleled efficiency.',
				title: 'Artificial Intelligence',
				icon: 'bi bi-robot text-2xl',
				subtitle: 'Relief'
			},
			{
				content: 'Transform online presence to reflect modern, user-friendly design for a powerful impact!',
				title: 'Website Revamp (Redesign)',
				subtitle: 'Sophistication',
				icon: 'bi bi-stars text-2xl'
			},
			{
				// content: 'Are you looking to automate repetitive tasks, or improve overall workflow in order to make your customers happier?.',
				content: 'Maximize efficiency, minimize costs. Elevate your business with our tailored solutions for streamlined operations and growth.',
				icon: 'bi bi-graph-up-arrow text-2xl',
				title: 'Business Optimization',
				subtitle: 'Upgrade'
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