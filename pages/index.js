import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import Styles from '../components/styles/index/index.module.css'
import Intro from '../components/index/Intro'
import About from '../components/index/About'
import Leaders from '../components/index/Leaders'
import Contact from '../components/index/Contact'

export default class Index extends React.Component {
  
    constructor() {
        super()
        this.typing = this.typing.bind(this)
    }

    componentDidMount() {
        this.typing(-1)
    }

    componentWillUnmount() {
        
    }
    
    typing = (counter) => {
        
        const intro_string = "The best software algorithm solution"
        let count, typing_timeout;
        
        if (document.querySelector('.intro-lead .cursor')) {
            
            if (counter !== intro_string.length - 1) {
                document.querySelector('.intro-lead .cursor').remove()
            }
        
        }
        
        if (counter >= intro_string.length) {
            count = 0
            clearTimeout(typing_timeout)
            return
        }
        
        if (counter <= intro_string.length) {
            count = counter + 1
        }
        
        let cursor_elem = document.createElement("span")
        cursor_elem.className = "cursor"
        
        let element = document.createElement("span")
        element.textContent = intro_string[count];
        
        if (intro_string[count] == " ") {
            element.style.marginLeft = "5px"
        }
        
        document.querySelector('.intro-lead').append(element)
        document.querySelector('.intro-lead').append(cursor_elem)
        
        typing_timeout = setTimeout(() => {
            this.typing(count)
        }, 100)
    
    }

    render() {
        
        return (
        
            <Layout>
                
                <Head>
                    <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
                    <title> Home | Algrith </title>
                </Head>

                <main>

                    <Intro />

                    <About />

                    <Leaders />

                    <Contact />                    
                
                </main>

            </Layout>
    
        )
    
    }

}
