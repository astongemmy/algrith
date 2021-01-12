import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import Styles from '../components/styles/about/about.module.css'
import Intro from '../components/index/Intro'
import About from '../components/index/About'

export default class About extends React.Component {
  
    constructor() {
        super()
    }

    componentDidMount() {
    }

    componentWillUnmount() {
        
    }
    
    render() {
        
        return (
        
            <Layout>
                
                <Head>
                    <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
                    <title> About | Algrith </title>
                </Head>

                <main>

                    <Intro />

                    <About />             
                
                </main>

            </Layout>
    
        )
    
    }

}