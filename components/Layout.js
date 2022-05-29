import React, { Component } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import DynamicCssGenerator from './DynamicCssGenerator'

export default class Layout extends React.Component {    
    constructor() {
        super()
        // Method binding
        this.resizeHeaderOnScroll = this.resizeHeaderOnScroll.bind(this)
        this.deviceView = this.deviceView.bind(this)
        this.sectionScroll = this.sectionScroll.bind(this)
        this.rippleEffect = this.rippleEffect.bind(this)
        this.openNavBar = this.openNavBar.bind(this)
        this.closeNavBar = this.closeNavBar.bind(this)
        this.closeAll = this.closeAll.bind(this)
        this.hidePageLink = this.hidePageLink.bind(this)
        // this.backToTop = this.backToTop.bind(this)
        this.scrollToTopObserver = this.scrollToTopObserver.bind(this)
    }
    componentDidMount() {
        AOS.init({ easing: 'ease-in-out-sine' })
        this.hidePageLink()
        // this.backToTop()
        // Selectors used in multiple methods
        this.nav_menu = document.querySelector('#nav-menu')
        this.overlay = document.querySelector('#overlay')
        this.header = document.querySelector('header');
        this.brand = document.querySelector('#brand');
        this.brandTitle = document.querySelector('#brand-title');
        this.hamburger = document.querySelector('#hamburger');
        // Event trigger on mount
        this.sectionScroll();
        this.rippleEffect();
        window.addEventListener('scroll', () => {
            this.resizeHeaderOnScroll()
            this.scrollToTopObserver({
                target: document.querySelector('#back-to-top'),
                display: 'flex'
            });
        }, false);
    }
    componentWillUnmount() {
        // Event Trigger on unmount
        window.removeEventListener('scroll', this.resizeHeaderOnScroll())
    }
    scrollToTopObserver = ({target, display}) => {        
        if ((target && typeof target !== 'object') || (display && typeof display !== 'string')) {
            return console.error({
                status:'error',
                message: 'Instance of scrollToTopObserver error.',
                description: 'target parameters must be an HTML object. display must be a string and a valid CSS display value'
            })
        }
        if (!target && !display) {
            return console.error({
                status:'error',
                message: 'Instance of scrollToTopObserver error.',
                description: 'no valid parameters provided'
            })
        }        
        // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            target.style.display = display;
        } else {
            target.style.display = 'none';
        }        
    }
    hidePageLink = () => {
        const header_links = document.querySelectorAll('#navbar-links a')
        const path = window.location.pathname
        const page_name = path.split('/').pop()
        header_links.forEach(link => {
            const link_href = link.href.split('/').pop()
            if (link_href == page_name) {
            link.style.display = 'none'
            }
        })
    }
    //	Viewport observer
	//	Checks if viewport is mobile
	deviceView = () => {
		let viewport_width = document.documentElement.clientWidth;
		if (viewport_width < '702') {
			return "mobile";
		} else {
			return "desktop";
		}
    }
    sectionScroll = () => {
        const scroll_selectors = document.querySelectorAll(".scroll-selector");        
        scroll_selectors.forEach(selector => {
            selector.addEventListener('click', function(e) {
                e.preventDefault();                
                let offset_top;
                if (this.id !== 'back-to-top') {
                    const href = this.getAttribute("href");
                    offset_top = document.querySelector(href).offsetTop;
                } else {
                    offset_top = 0;
                }                
                scroll({
                    top: offset_top,
                    behavior: "smooth"
                });
            });
        });
    }
    rippleEffect = () => {
		document.querySelectorAll('.ripple-node').forEach(button => {			
			button.addEventListener('mousedown', function(e) {				
				const target = e.target;
				const rect = target.getBoundingClientRect();
				let ripple = target.querySelector('.ripple');				
				if (ripple) ripple.remove();	
				ripple = document.createElement('span');
				ripple.className = 'ripple';
				ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
				target.appendChild(ripple);
				const top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.documentElement.scrollTop;
				const left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.documentElement.scrollLeft;
				ripple.style.top = top + 'px';
				ripple.style.left = left + 'px';
				return false;				
			});

		});

	}    
    resizeHeaderOnScroll = () => {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            this.header.style.transform = 'scale(1, 0.7)'
            this.header.style.transformOrigin = 'top'
            this.brand.style.transform = 'scale(0.7, 1)'
            this.brand.style.transformOrigin = 'left top'
            this.header.classList.add('shadow-lg')
            if (this.deviceView() == 'desktop') this.nav_menu.style.top = '0.52rem'
        } else {
            this.header.style.transform = 'scale(1)'
            this.brand.style.transform = 'scale(1)'
            this.header.classList.remove('shadow-lg')
            if (this.deviceView() == 'desktop') this.nav_menu.style.top = '1.5rem'
        }
    }
    openNavBar = () => {            
        if (this.nav_menu.className.includes('-right-full')) {
            this.nav_menu.classList.remove('-right-full')
            this.nav_menu.classList.add('right-0')
            this.overlay.classList.remove('hidden')
            this.overlay.classList.add('block')
        }          
    }
    closeNavBar = () => {
        if (this.nav_menu.className.includes('right-0')) {
            this.nav_menu.classList.remove('right-0')
            this.nav_menu.classList.add('-right-full')
            this.overlay.classList.remove('block')
            this.overlay.classList.add('hidden')
        }
    }
    closeAll = () => { this.closeNavBar() }

    render() {
        return (            
            <div>                
                <Header open_nav_bar={this.openNavBar} />
                <Navbar close_nav_bar={this.closeNavBar} />
                { this.props.children }
                <Footer />
                <span id="back-to-top" className="scroll-selector cursor-pointer hidden fixed justify-center items-center right-8 md:right-12 bottom-8 rounded-full bg-green-400 text-white text-3xl w-16 h-16 md:w-18 md:h-18">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12" />
                    </svg>
                </span>
                <div id="overlay" onClick={this.closeAll} className="fixed hidden top-0 left-0 z-20 bg-black opacity-50 h-screen w-screen"></div>                
                <div id="alert" className="fixed z-50 -top-32 rounded-xl left-2/4 transform -translate-x-2/4 bg-green-100 text-green-500 p-4 w-3/5 flex justify-between items-center">
                    <span id="message">Message</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                {/*
                    Since TailwindCSS uses treeshaking, classes not visible in jsx elements won't
                    be generated. DynamicCssGenerator component helps generate all css styles used
                    as javascript variables which are not visible to TailwindCSS at build time.
                    Do not forget to add your dynamic classes to this component.
                */}
                <DynamicCssGenerator />
            </div>
        )      
    }
}
