import React, { useEffect, useState } from 'react'
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
import useInterfaceClient from '../hooks/useInterfaceClient'

export default function Index(){
  const { productInterface } = useInterfaceClient()
  
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
        title: 'Swift and Accurate',
        subtitle: '6days delivery',
        icon: 'fa fa-rocket',
        content: 'Time is a valuable currency of business and we give our clients value in time'
      },
      {
        title: 'Competence',
        subtitle: 'Tool mastery',
        icon: 'fa fa-cog',
        content: 'We posses sufficiency of skills to drive your web presence and experience to the next level'
      },
      {
        title: 'Trusted',
        subtitle: 'High reputation',
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
      items: require('../constants/testimonials.json')
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
        <Hero { ...productInterface } />
        <Outline outline={ outlines } />
        <MissionStatement />
        <Pricing { ...productInterface } />
        <Section payload={ sections.testimonial } />
        <GetStarted />
      </main>
    </Layout>
  )
}