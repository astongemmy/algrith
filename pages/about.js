import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import Styles from '../components/styles/about/about.module.css'
import Intro from '../components/about/Intro'
import Outline from '../components/common/Outline'

export default class About extends React.Component {
  
    constructor() {
        super()
    }

    componentDidMount() {
        
    }

    componentWillUnmount() {
        
    }

    render() {

        const outlines = {
            title: 'What we really do',
            items: [
                {
                    title: 'Web Application',
                    icon: 'fa fa-globe',
                    content: 'We design and build efficient websites and web applications for your business, leveraging modern tools and technologies such as artificial intelligence when needed'
                },
                {
                    title: 'Data Science',
                    icon: 'fa fa-chart-bar',
                    content: 'Our team of dedicated data scientists and machine learning engineers will help you make sense of your companys data by analysing and building machine learning models when needed, offering you the best insights'
                },
                {
                    title: 'Refactoring',
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

                    <Intro />
                    
                    <Outline outline={outlines}/>             
                
                </main>

            </Layout>
    
        )
    
    }

}
