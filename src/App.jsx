import React from 'react'
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Test from "./components/Test"

import './styles.css'; 
// this is the starting point of our application
function App() {
  return (
    
     <>
     
       <Navbar/>
       <Main/>
       <About/>
       <Portfolio/>
       <Experience/>
       <Contact/> 
       <Footer/>
       {/* <Test/> */}
       
     </>
  )
}

export default App