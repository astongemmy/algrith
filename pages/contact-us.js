import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Intro from '../components/Intro'
import Contact from '../components/common/Contact'

export default class ContactUs extends React.Component {  
    constructor() { super() }
    render() {
        const intro = {
            title: {
                text: "Send in your thoughts!",
                align: "",
                case: ""
            },
            description: {
                text: "You could get started with a prospective business conversation in just few steps. \n Just send us a message and we will guide you through. \n Do not hesitate to write to us regarding an issue, \n a feedback or most importantly, a business proposal.",
                align: "",
                case: ""
            },
            slogan: "Our response culture is swift",
            scroll_to: "contact",
            accomodate: true
        }
        return (
            <Layout>
                <Head>
                    <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
                    <title> Contact Us | Algrith </title>
                </Head>
                <main className="relative">
                    <Intro payload={ intro } />
                    <Contact />
                </main>
            </Layout>
        )
    }
}