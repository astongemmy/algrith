import React from 'react'

export default class Intro extends React.Component {    
    constructor() {
        super()
        this.typing = this.typing.bind(this)
    }
    componentDidMount() {
        this.props.payload.title.text && typeof this.props.payload.title.text == 'string' ? this.typing(-1) : ''
    }

    typing = (counter) => {
        this.props.payload.title.text !== this.prev_intro_string ? clearTimeout(window.typing_timeout) : ''
        let count
        window.typing_timeout;
        if (document.querySelector('.intro-lead')) {
            if (document.querySelector('.intro-lead .cursor')) {                
                if (counter !== this.props.payload.title.text.length - 1) {
                    document.querySelector('.intro-lead .cursor').remove()
                }
                if (counter == this.props.payload.title.text.length - 1) {
                    document.querySelector('.intro-lead .cursor').remove()
                    return
                }            
            }           
            if (counter >= this.props.payload.title.text.length) {
                clearTimeout(window.typing_timeout)
                count = 0
                return
            }            
            if (counter <= this.props.payload.title.text.length) {
                count = counter + 1
            }            
            let cursor_elem = document.createElement("span")
            cursor_elem.className = "cursor"            
            let element = document.createElement("span")
            element.textContent = this.props.payload.title.text[count];            
            if (this.props.payload.title.text[count] == " ") {
                element.style.marginLeft = "5px"
            }            
            document.querySelector('.intro-lead').append(element)
            document.querySelector('.intro-lead').append(cursor_elem)
            window.typing_timeout = setTimeout(() => {
                this.typing(count)
            }, 100)
            this.prev_intro_string = this.props.payload.title.text
        }
        
    }
    
    render() {
        const { title, description, slogan, accomodate, scroll_to } = this.props.payload
        return (
            <div id="intro-about" className="relative w-full dark:bg-black bg-intro-about bg-left-top bg-cover bg-scroll lg:bg-fixed bg-no-repeat">
                <div className="w-full bg-gradient-to-b from-white pt-0 lg:pt-12 pb-12 lg:pb-20 px-8 md:px-12 lg:px-18 xl:px-24">
                    {title.text && <h1 data-aos="fade-down" className={`intro-lead relative ${ title.case ? title.case : '' } text-3xl md:text-5xl lg:text-8xl text-green-500 py-8 m-0 w-full text-${ title.align ? title.align : 'center' } font-bold`}></h1>}
                    {description.text && <p data-aos="fade-up" className={`w-full md:whitespace-pre ${ description.case ? description.case : '' } text-${ description.align ? description.align : 'center' } text-gray-600 text-2xl lg:text-3xl`}>
                        { description.text }
                    </p>}
                    {slogan && <aside data-aos="fade-right" className={`${ accomodate ? 'mb-16' : '' } mt-4 md:mt-8 ${ description.case ? description.case : '' } text-${ description.align ? description.align : 'center' } text-navyblue text-xl font-bold lg:text-3xl`}>
                        { slogan }
                    </aside>}
                </div>
                {scroll_to && <span href={ `#${scroll_to}` } className="scroll-selector cursor-pointer absolute flex justify-center items-center right-8 md:right-12 lg:right-32 -bottom-8 rounded-full bg-green-400 text-white text-3xl w-16 h-16 md:w-18 md:h-18 z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                    </svg>
                </span>}
            </div>
        )
    }
}
