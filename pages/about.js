import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Intro from '../components/Intro'
import Outline from '../components/Outline'

export default function About() {
	const intro = {
		title: {
			text: "Who we really are!",
			align: "",
			case: ""
		},
		description: {
			text: "Algrith is a software company dedicated to delivering elegant, efficient,\n secure, accessible etc, web applications and websites for use by\n clients both in the public and private sector.",
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
				subtitle: 'Strictly responsive',
				icon: 'fa fa-globe',
				content: 'We design and build efficient websites and web applications for your business, leveraging modern tools and technologies such as artificial intelligence when needed'
			},
			{
				title: 'Artificial Intelligence',
				subtitle: 'Indepth analysis',
				icon: 'fa fa-chart-bar',
				content: 'Want to know how to integrate AI into your business?'
			},
			{
				title: 'Website Revamp (Redesign)',
				subtitle: 'Cleaner code',
				icon: 'fa fa-code-branch',
				content: 'Since we are updated with industry trends, we are at best position to refactor your existing codebase for maximum efficiency, such that you have never experienced before'
			},
			{
				title: 'Mobile Application Development',
				subtitle: 'Cleaner code',
				icon: 'fa fa-code-branch',
				content: 'Since we are updated with industry trends, we are at best position to refactor your existing codebase for maximum efficiency, such that you have never experienced before'
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
}