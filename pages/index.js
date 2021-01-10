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
        this.handleScroll = this.handleScroll.bind(this)
        this.deviceView = this.deviceView.bind(this)
this.typing = this.typing.bind(this)
    }

    componentDidMount() {
        this.nav_menu = document.querySelector('#nav-menu')
        this.overlay = document.querySelector('#overlay')
        this.header = document.querySelector('header');
        this.brand = document.querySelector('#brand');
        this.brandTitle = document.querySelector('#brand-title');
        this.hamburger = document.querySelector('#hamburger');
this.cursor = document.querySelector(".intro-lead .cursor");
this.lead_intro = document.querySelector(".intro-lead");
//this.count;
        window.addEventListener('scroll', this.handleScroll, false);
window.addEventListener('load', this.typing(-1), false);

    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
window.removeEventListener('load', this.typing)
    }

typing(counter) {

      const intro_string = "The best software algorithm solution"
      
      if (this.cursor) {
          if (counter !== intro_string.length - 1) {
this.cursor.remove()
          }
      }
      
     if (counter >= intro_string.length) {
          counter = 0
          clearTimeout(typing_timeout)
      }
      
      if (counter <= intro_string.length) {
          counter = counter + 1
      }

     let cursor_elem = document.createElement("span")
     cursor_elem.className = "cursor"
     
      let element = document.createElement("span")
      
      element.textContent = intro_string[counter];
      
      if (intro_string[counter] == " ") {
          element.style.marginLeft = "12px"
          }
          this.lead_intro.append(element)
          this.lead_intro.append(cursor_elem)
          
     let typing_timeout = setTimeout(() => {
          this.typing(counter)
      }, 100)

alert(counter)

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
              
                <Meta title="Home | Algrith" />

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
