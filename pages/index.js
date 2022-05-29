import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Intro from '../components/index/Intro'
import Outline from '../components/Outline'
import Leaders from '../components/index/Leaders'
import Section from '../components/Section'
import GetStarted from '../components/index/GetStarted'
import MissionStatement from '../components/index/MissionStatement'
import Hero from '../components/index/Hero'
import Pricing from '../components/Pricing'
import LogoCloud from '../components/LogoCloud'

export default class Index extends React.Component {  
  constructor() { super() }
  render() {
    const outlines = {
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
          title: 'Fast',
          icon: 'fa fa-plane',
          content: 'Time is a valuable currency of business and we give our clients value in time'
        },
        {
          title: 'Competence',
          icon: 'fa fa-handshake',
          content: 'We posses sufficiency of skills to drive your web presence and experience to the next level'
        },
        {
          title: 'Trusted',
          icon: 'fa fa-shield-alt',
          content: 'Integrity defines business life span and we are determined to live long with you'
        }
      ]
    }    
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
        items: [
          {
            name: "Sarah Dayan",
            designation: "Staff Engineer",
            location: "Algolia",
            avatar: "./images/testimonials/sarah-dayan.jpg",
            text: "Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny."
          },
          {
            name: "Flinch Booth",
            designation: "Systems Operator",
            location: "United States",
            avatar: "./images/testimonials/flinch-booth.jpg",
            text: "Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny."
          },
          {
            name: "Maddy Paddignton",
            designation: "Architect/Designer",
            location: "India",
            avatar: "./images/testimonials/maddy-paddington.jpeg",
            text: "Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny."
          },
        ]
      }
    }
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
    }
    return (
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
          <title> Home | Algrith </title>
        </Head>
        
        <main>
          <Intro payload={ intro } />
          <LogoCloud />
          <Hero />
          <Outline outline={outlines} />
          <MissionStatement />
          <Pricing />
          {/* <Leaders /> */}
          <Section payload={ sections.testimonial } />
          <GetStarted />
        </main>
      </Layout>
    )
  }
}