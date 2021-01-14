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
        
        return (
        
            <Layout intro_string="The best software algorithm solution">
                
                <Head>
                    <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
                    <title> Home | Algrith </title>
                </Head>

                <main>

                    <Intro />

                    <Outline />

                    <Leaders />

                    <Contact />                    
                
                </main>

            </Layout>
    
        )
    
    }

}