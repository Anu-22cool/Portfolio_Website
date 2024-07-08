import React, { Component } from 'react'
import {  FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdAttachEmail     } from "react-icons/md";
import { FaGithub          } from "react-icons/fa";



function Footer(){
  
    return (
       
         <>
           
            <footer className="text-white accordion-container" style={{ maxWidth: '900px', margin: '0 auto', marginTop: '20px' }}>
                <div name="Footer" className=' max-w-screen-2xl container mx-auto px-4 md:px-20  '>
                    <div className='flex flex-col items-center justify-center' >
                        <p className='text-xl'>Get in Touch
                        Through following links</p>
                        <div className='flex space-x-4'  style={{ marginTop: '20px' }}>
                            <p></p>
                            <a href="mailto:addewangan30719@gmail.com" target="_blank"><MdAttachEmail   size={30}  /></a>
                            <a href="https://www.linkedin.com/in/anukul-dewangan-573027235/?originalSubdomain=in" target="_blank"><FaLinkedin size={30} /></a>
                            <a href="https://github.com/Anu-22cool"  target="_blank"><FaGithub size={30} /></a>
                            <a href="https://x.com/40Anukul"  target="_blank"><FaTwitter size={30} /></a>
                        </div>

                        <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                            {/* <p className='text-sm'>
                                &copy;204 Your Company . All Rights Reserved.
                            </p> */}
                            <p className='text-xl' style={{ marginBottom:'20px' }} >
                               Created by : Anukul Dewangan
                            </p>
                            
                        </div>

                    </div>
                    
                </div>
            </footer>
         </>
    );
  
}

export default Footer;