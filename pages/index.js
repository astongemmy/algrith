import Head from 'next/head';
import React from 'react';

import MissionStatement from '../components/MissionStatement';
import ContactUsCall from '../components/ContactUsCall';
import WelcomeIntro from '../components/WelcomeIntro';
import GetStarted from '../components/GetStarted';
import TechStack from '../components/TechStack';
import WhoWeAre from '../components/WhoWeAre';
// import Pricing from '../components/Pricing';
import Outline from '../components/Outline';
import Section from '../components/Section';
// import { useSelector } from 'react-redux';
import Layout from '../components/Layout';

const Index = () => {
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
        content: 'Time is a valuable currency of business and we give our clients value in time.',
        icon: 'bi bi-rocket-takeoff text-2xl',
        title: 'Swift and Accurate',
        subtitle: 'Delivery',
      },
      {
        content: 'We stay ahead of the curve, incorporating the latest technologies to ensure your business remains competitive in a rapidly evolving landscape.',
        icon: 'bi bi-magic text-2xl',
        title: 'Innovative',
        subtitle: 'Skilled',
      },
      {
        content: 'Integrity defines business life span and we are determined to live long with you.',
        icon: 'bi bi-patch-check text-3xl',
        subtitle: 'Reputable',
        title: 'Trusted'
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
	};

  const sections = {
    testimonial: {
      items: require('../constants/testimonials.json'),
      illustration: {
        src: './images/illustrations/testimonial.gif',
        align: { x: 'right', y: 'top' },
        dimension: {
          md: { x: 32, y: 52, scale: 65 },
          lg: { x: 28, y: 64, scale: 65 }
        }
      },
      title: {
        text: 'Testimonials',
        align: 'left'
      }
    }
  };

  const intro = {
    title: {
      text: 'The best software algorithm solution',
      align: '',
      case: ''
    },
    action: {
      icon: 'bi bi-compass-fill text-2xl',
      text: 'Get Started',
    },
    subtitle: {
      text: 'We make happy clients',
      align: '',
      case: ''
    },
    scroll_to: 'who-we-are'
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
  );
};

export default Index;