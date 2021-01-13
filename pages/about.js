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
this.Fetch = this.Fetch.bind(this)
    }

    componentDidMount() {
this.Fetch()
    }

    componentWillUnmount() {
        
    }

Fetch = () => {
fetch('/api/airbnb', {
method: 'POST',
body: ''
}
}).then(response => response.json())
.then(response => {
alert(JSON.stringify(response))
}).catch(error => {
alert(error)
})
    
    render() {
        
        return (
        
            <Layout>
                
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
