import React, { Component } from 'react'
import Header from './common/Header'
import Navbar from './common/Navbar'
import Footer from './common/Footer'


export default class Layout extends React.Component {
    
    constructor() {
        super()
        this.handleScroll = this.handleScroll.bind(this)
        this.deviceView = this.deviceView.bind(this)
    }

    componentDidMount() {
        this.nav_menu = document.querySelector('#nav-menu')
        this.overlay = document.querySelector('#overlay')
        this.header = document.querySelector('header');
        this.brand = document.querySelector('#brand');
        this.brandTitle = document.querySelector('#brand-title');
        this.hamburger = document.querySelector('#hamburger');
        window.addEventListener('scroll', this.handleScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
    
    //	Viewport observer	//
	//	Checks if viewport is mobile
	deviceView() {
		let viewport_width = document.documentElement.clientWidth;
		if (viewport_width < '702') {
			return "mobile";
		} else {
			return "desktop";
		}
    }
    
    handleScroll() {
        // When the user scrolls down 200px from the top of the document, resize the navbar's padding and the logo's font size
        if (this.header !== undefined) {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                this.header.style.transform = 'scale(1, 0.7)'
                this.header.style.transformOrigin = 'top'
                this.brand.style.transform = 'scale(0.7, 1)'
                this.brand.style.transformOrigin = 'left top'
                if (this.deviceView() == 'desktop') {
                    this.nav_menu.style.top = '0.25rem'
                }
            } else {
                this.header.style.transform = 'scale(1)'
                this.brand.style.transform = 'scale(1)'
                if (this.deviceView() == 'desktop') {
                    this.nav_menu.style.top = '4rem'
                }
            }
        }
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

window.scrollTo({
top: 0,
behavior: "smooth"
})
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
            
            <div>
                
                <Header event={{open_nav_bar}} />
                <Navbar event={{close_nav_bar}} />

                    {this.props.children}

                <Footer />
                    
                <div id="overlay" onClick={close_all} className="fixed hidden top-0 left-0 z-20 bg-black opacity-50 h-screen w-screen"></div>

            </div>

        )
      
    }

}
  
