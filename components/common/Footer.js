import React from 'react'

export default class Footer extends React.Component {

    constructor() {
        super()
    }

    render() {

        return (

            <footer className="bg-gray-100">

<div className="w-full p-8 flex justify-between items-start flex-wrap">
<a className="w-2/4 lg:text-center p-4 text-xl text-gray-600">Home</a>
<a className="w-2/4 lg:text-center p-4 text-xl text-gray-600">About</a>
<a className="w-2/4 lg:text-center p-4 text-xl text-gray-600">Contact Us</a>
<a className="w-2/4 lg:text-center p-4 text-xl text-gray-600">Support Us</a>
<a className="w-2/4 lg:text-center p-4 text-xl text-gray-600">FAQ</a>
</div>

                <a href="/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center mx-6 py-6 text-xl">

                    Powered by <span className="ml-1 text-navyblue"> Algrith</span>
                    <img src="./images/logo/algrith.png" alt="Algrith Logo" className="logo" />

                </a>

            </footer>
            
        )
    }
    
}
