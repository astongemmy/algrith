import '../public/styles/App.css'
import '../public/styles/Icons.css'
import '../public/styles/aos.css'
import '../public/styles/animate.css'
import '../public/js/aos.js'
import '../public/js/aos-init.js'
import App from 'next/app'

export default class MyApp extends App {

    constructor() {
        super()
    }

    render() {

        const { Component, pageProps } = this.props

        return (
            <Component {...pageProps} />
        )

    }

}
