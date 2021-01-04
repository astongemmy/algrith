import React from 'react'
import Link from 'next/link'
import Meta from '../components/common/Meta'
import Styles from '../components/styles/index/index.module.css'
import Header from '../components/common/Header'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Intro from '../components/index/Intro'
import About from '../components/index/About'
import Leaders from '../components/index/Leaders'
import Contact from '../components/index/Contact'

export default class Index extends React.Component {
  
    constructor() {
        super()
    }

    componentDidMount() {
        this.nav_menu = document.querySelector('#nav-menu')
        this.overlay = document.querySelector('#overlay')
    }

    render() {

        const open_nav_bar = () => {
            if (this.nav_menu !== undefined) {
                if (this.nav_menu.className.includes('-right-full')) {
                    this.nav_menu.classList.remove('-right-full')
                    this.nav_menu.classList.add('right-0')
                    this.overlay.classList.remove('hidden')
                    this.overlay.classList.add('block')
                } else {
                    this.nav_menu.classList.remove('right-0')
                    this.nav_menu.classList.add('-right-full')
                    this.overlay.classList.remove('block')
                    this.overlay.classList.add('hidden')
                }
            }
        }

        const close_nav_bar = () => {
            if (this.nav_menu !== undefined) {
                if (this.nav_menu.className.includes('right-0')) {
                    this.nav_menu.classList.remove('right-0')
                    this.nav_menu.classList.add('-right-full')
                    this.overlay.classList.remove('block')
                    this.overlay.classList.add('hidden')
                } else {
                    this.nav_menu.classList.remove('-right-full')
                    this.nav_menu.classList.add('right-0')
                    this.overlay.classList.remove('hidden')
                    this.overlay.classList.add('block')
                }
            }
        }

        const close_all = () => {
            close_nav_bar()
        }
        
        return (
        
            <div className="">
              
                <Meta />

                <Header event={{open_nav_bar}} />

                <Navbar event={{close_nav_bar}} />
                
                <main>

                    <Intro />

                    <About />

                    <Leaders />

                    <Contact />                    
                
                </main>

                <Footer />
                
                <div id="overlay" onClick={close_all} className="fixed hidden top-0 left-0 z-20 bg-black opacity-50 h-screen w-screen"></div>

            </div>
    
        )
    
    }

}
