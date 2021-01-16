import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import Styles from '../components/styles/index/index.module.css'
import Intro from '../components/index/Intro'
import Outline from '../components/index/Outline'
import Leaders from '../components/index/Leaders'
import Contact from '../components/index/Contact'

export default class Index extends React.Component {
  
    constructor() {
        super()
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        
    }
        
    render() {

        const outlines = {
            title: 'Why choose us',
            items: [
                {
                    title: 'Competence',
                    icon: 'fa fa-handshake',
                    content: 'We posses sufficiency of skills to drive your web presence and experience to the next level'
                },
                {
                    title: 'Fast',
                    icon: 'fa fa-plane',
                    content: 'Time is a valuable currency of business and we give our clients value in time'
                },
                {
                    title: 'Trusted',
                    icon: 'fa fa-shield-alt',
                    content: 'Integrity defines business life span and we are determined to live long with you'
                }
            ]
        }
        
        return (
        
            <Layout intro_string="The best software algorithm solution">
                
                <Head>
                    <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
                    <title> Home | Algrith </title>
                </Head>

                <main>

                    <Intro />

                    <Outline outline={outlines}/>

                    <Leaders />

                    <Contact />                    
                
                </main>

            </Layout>
    
        )
    
    }

}