import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import Styles from '../components/styles/about/about.module.css'
import Intro from '../components/index/Intro'
import Outline from '../components/index/Outline'

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
        
            <Layout intro_string="Algrith is a software company dedicated to delivering elegant, efficient, secure, accessible etc, web applications and websites  for use by clients both in the public and private software." >
                
                <Head>
                    <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
                    <title> About | Algrith </title>
                </Head>

                <main>

                    <Intro />
                    
                    <Outline />             
                
                </main>

            </Layout>
    
        )
    
    }

}