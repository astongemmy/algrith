import React, {useEffect} from 'react'
import Link from 'next/link'

export default class Header extends React.Component {
    
    constructor() {
        super()
    }

componentDidMount() {
this.header = document.querySelector('header')
this.window = window
}

    render() {

const handleScroll = () => {
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
        if (this.header !== undefined) {
if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            this.header.querySelector('#brand-text').classList.remove('text-5xl');
this.header.querySelector('#brand-text').classList.add('text-5xl');
        } else {
            this.header.querySelector('#brand-text').classList.remove('text-5xl');
this.header.querySelector('#brand-text').classList.add('text-5xl');
        }
        }
}

if (this.window !== undefined) {
window.addEventListener('scroll', function() {
handleScroll()
})
}

        return (

            <header className="flex sticky top-0 z-20 justify-between items-start bg-green-300 p-4 w-full dark:bg-black">
                
                {/* <div className="w-16 ml-4 lg:ml-64 md:mt-4 mt-1">
                    <img src="./images/logo/algrith.png" alt="brand-logo" />
                </div> */}
                <div className="ml-4 lg:ml-32 md:mt-4 mt-1">
                    <a href="/">
                        <h1 id="brand-text" className="uppercase hover:bg-green-400 p-4 rounded-full text-5xl text-yellow-100 mx-auto w-full text-center font-medium">
                            Algrith
                        </h1>
                    </a>
                </div>
                
                <div id="hamburger" onClick={this.props.event.open_nav_bar} className="md:hidden flex justify-center items-center text-3xl cursor-pointer w-16 h-16 ml-4 mr-4 mt-1 bg-green-500 text-white">
                    <i className="fa fa-bars"></i>
                </div>

            </header>

        )
    }
}
