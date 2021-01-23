import React from 'react'

export default class Footer extends React.Component {

    constructor() {
        super()
    }

    render() {

        return (

            <footer className="p-4">

<div className="w-full flex justify-center align-start flex-wrap bg-red-400">
<a className="w-2/4 p-4 text-xl text-gray-600">Home</a>
<a className="w-2/4 p-4 text-xl text-gray-600">About</a>
<a className="w-2/4 p-4 text-xl text-gray-600">Contact Us</a>
<a className="w-2/4 p-4 text-xl text-gray-600">Support Us</a>
<a className="w-2/4 p-4 text-xl text-gray-600">FAQ</a>
</div>

                <a href="/" target="_blank" rel="noopener noreferrer" className="text-xl">

                    Powered by <span className="ml-1 text-navyblue"> Algrith</span>
                    <img src="./images/logo/algrith.png" alt="Algrith Logo" className="logo" />

                </a>

            </footer>
            
        )
    }
    
}
