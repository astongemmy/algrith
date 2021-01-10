import React, { Component } from 'react'
import Meta from '/common/Meta'
import Header from '/common/Header'
import Navbar from '/common/Navbar'
import Footer from '/common/Footer'


export default class Layout extends React.Component() {
    
    constructor() {
        super()
    }

    render() {

        return (
        
            <Header event={{open_nav_bar}} />
            <Navbar event={{close_nav_bar}} />

                {props.children}

            <Footer />
                
            <div id="overlay" onClick={close_all} className="fixed hidden top-0 left-0 z-20 bg-black opacity-50 h-screen w-screen"></div>

    
        )
      
    }

}
  