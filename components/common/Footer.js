import React from 'react'

export default class Footer extends React.Component {

    constructor() {
        super()
    }

    render() {

        return (

            <footer className="bg-gray-200">

<div className="w-full flex justify-between items-start flex-wrap">
<a className="w-2/4 lg:text-center p-4 text-xl text-green-600">Home</a>
<a className="w-2/4 lg:text-center p-4 text-xl text-green-600">About</a>
<a className="w-2/4 lg:text-center p-4 text-xl text-green-600">Contact Us</a>
<a className="w-2/4 lg:text-center p-4 text-xl text-green-600">Support Us</a>
<a className="w-2/4 lg:text-center p-4 text-xl text-green-600">FAQ</a>
</div>

                <a href="/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center m-6 text-xl">

                    Powered by <span className="ml-1 text-navyblue"> Algrith</span>
                    <img src="./images/logo/algrith.png" alt="Algrith Logo" className="logo" />

                </a>

            </footer>
            
        )
    }
    
}
