import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'

export default class DynamicCssGenerator extends React.Component {  
  constructor() { super() }
  render() {
    return (
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
          <title> Dynamically generated CSS | Algrith </title>
        </Head>
        
        <main>
          <span 
            className="              
              md:-left-28 md:-right-28 
              lg:-left-28 lg:-right-28 
              
              md:-left-32 md:-right-32 
              lg:-left-32 lg:-right-32 
              
              md:-left-20 md:-right-20 
              lg:-left-20 lg:-right-20 
              
              md:-left-52 md:-right-52 
              lg:-left-52 lg:-right-52 
              
              md:-top-52 md:-top-52 
              lg:-top-52 lg:-top-52 
              
              md:-top-64 md:-top-64 
              lg:-top-64 lg:-top-64 
              
              md:-top-32 md:-top-32 
              lg:-top-32 lg:-top-32 
              
              md:-top-72 md:-top-72 
              lg:-top-72 lg:-top-72 

              md:-top-64 md:-top-64 
              lg:-top-64 lg:-top-64
              
              md:scale-35 md:scale-45 md:scale-65
              lg:scale-35 lg:scale-45 lg:scale-65
            ">
          </span>
        </main>
      </Layout>
    )
  }
}