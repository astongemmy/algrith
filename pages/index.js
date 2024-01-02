import Head from 'next/head';
import React from 'react';

import MissionStatement from '../components/MissionStatement';
import ContactUsCall from '../components/ContactUsCall';
import WelcomeIntro from '../components/WelcomeIntro';
import GetStarted from '../components/GetStarted';
import TechStack from '../components/TechSTack';
import WhoWeAre from '../components/WhoWeAre';
// import Pricing from '../components/Pricing';
import Outline from '../components/Outline';
import Section from '../components/Section';
// import { useSelector } from 'react-redux';
import Layout from '../components/Layout';

export default function Index() {
  // const { products, isLoading } = useSelector((state) => state.product);
  
	const whyChooseUsOutlines = {
    title: 'Why choose us',
    illustration: {
      align: { x: 'left', y: 'top' },
      dimension: {
        md: { x: 20, y: 32, scale: 65 },
        lg: { x: 32, y: 52, scale: 65 }
      },
      src: './images/illustrations/team.png'
    },
    items: [
      {
        title: 'Swift and Accurate',
        subtitle: 'Delivery',
        icon: 'fa fa-rocket',
        content: 'Time is a valuable currency of business and we give our clients value in time.'
      },
      {
        title: 'Innovative',
        subtitle: 'Skilled',
        icon: 'fa fa-cog',
        content: 'We stay ahead of the curve, incorporating the latest technologies to ensure your business remains competitive in a rapidly evolving landscape.'
      },
      {
        title: 'Trusted',
        subtitle: 'Reputable',
        icon: 'fa fa-shield-alt',
        content: 'Integrity defines business life span and we are determined to live long with you.'
      }
    ]
  };

  const whatWeDoOutlines = {
		title: 'What we do',
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
	};

  const sections = {
    testimonial: {
      title: {
        text: "Testimonials",
        align: "left"
      },
      illustration: {
        align: { x: 'right', y: 'top' },
        dimension: {
          md: { x: 32, y: 52, scale: 65 },
          lg: { x: 28, y: 64, scale: 65 }
        },
        src: "./images/illustrations/testimonial.gif"
      },
      items: require('../constants/testimonials.json')
    }
  };

  const intro = {
    title: {
      text: "The best software algorithm solution",
      align: "",
      case: ""
    },
    subtitle: {
      text: "We make happy clients",
      align: "",
      case: ""
    },
    action: {
      text: "Get Started"
    },
    scroll_to: "product-intro"
  };
  
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
        <title> Home | Algrith </title>
      </Head>

      <main>
        <WelcomeIntro payload={intro} />
        <WhoWeAre />
        <Outline outline={ whatWeDoOutlines } />
        <ContactUsCall />
        <Outline outline={ whyChooseUsOutlines } />
        <TechStack />
        <MissionStatement />
        {/* <Pricing products={products} isLoading={isLoading} /> */}
        <Section payload={ sections.testimonial } />
        <GetStarted />
      </main>
    </Layout>
  )
}