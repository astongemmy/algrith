import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import WelcomeIntro from '../components/WelcomeIntro'
import Outline from '../components/Outline'
import Section from '../components/Section'
import GetStarted from '../components/GetStarted'
import MissionStatement from '../components/MissionStatement'
import Hero from '../components/Hero'
import Pricing from '../components/Pricing'
import LogoCloud from '../components/LogoCloud'
import { getAllProducts } from '../lib/products'

export default function Index({ Products }) {

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
        <WelcomeIntro payload={intro} />
        <LogoCloud />
        <Hero />
        <Outline outline={outlines} />
        <MissionStatement />
        <Pricing packages={ Products[1].packages } slug={ Products[1].slug } />
        <Section payload={sections.testimonial} />
        <GetStarted />
      </main>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  return {
    props: {
      Products: getAllProducts()
    }
  }
}