import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

 function About() {
  return (
    <>       
    <div name="About" className="text-white accordion-container" style={{ maxWidth: '1300px', margin: '0 auto', marginTop: '20px', fontFamily: 'Montserrat, sans-serif', fontSize: '1.20rem' }}>
      <h1 className="underline text-5xl font-bold mb-5">Background</h1>   
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header >
          <span style={{ fontSize: '20px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
            Education and Training #1
          </span>
          
          </Accordion.Header>
          <Accordion.Body style={{ backgroundColor: '#1a1a1a', color: '#f1f1f1' }}>
          <ul>
             <li>
               Completed M.Tech in Computer Science from IIT Madras (July 2024)
               <ul>
                   <li>Final year project under Prof. Rupesh Nasre on StarPlat, a domain-specific parallel programming language tailored for solving complex graph problems 
                       across different architectures.
                   </li>
                
              </ul>
             </li>
             <li>
              B.Tech in Computer Science from BIT Durg(April 2022)
            </li>
            <li>
              Academic achievement: Secured 386th rank in GATE 2022 exam (Computer Science)
            </li>
          </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            
          <span style={{ fontSize: '20px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
          Skills and Expertise #2 
          </span>
            </Accordion.Header>
          <Accordion.Body style={{ backgroundColor: '#1a1a1a', color: '#f1f1f1' }}>
         
            <ul>
              <li>
                Solid understanding in essential theoretical subjects such as Advanced Data Structures and Algorithms, and Operating Systems.
              </li>
              <li>
                Expertise in programming languages acquired through courses like Advanced Programming Laboratory, Object Oriented Programming, and GPU Programming using CUDA and SYCL.
              </li>
              <li>
                Completed coursework covering Computer Networks, Relational Database Management Systems, Computer Architecture, and Artificial Intelligence.
             </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
          <span style={{ fontSize: '20px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
            Position of Responsibility #3
            </span></Accordion.Header>
          <Accordion.Body style={{ backgroundColor: '#1a1a1a', color: '#f1f1f1' }}>
          <h5>National Supercomputing Mission</h5>
      <ul>
        <li>
          Collaborated with the National Supercomputing Mission to spearhead and facilitate a training program focused on SYCL.
        </li>
        <li>
          Designed and delivered comprehensive training sessions covering:
          <ul>
            <li>GPU fundamentals and architecture</li>
            <li>Installation procedures</li>
            <li>Intriguing program implementations</li>
            <li>Optimization techniques</li>
          </ul>
        </li>
      </ul>

      <h5>Teaching Assistantship at IIT Madras</h5>
      <ul>
        <li>
          Course: CS2810 Object Oriented Algorithms Implementation and Analysis Lab
        </li>
        <li>
          Supervisor: Professor Kartik Nagar
        </li>
        <li>
          Provided invaluable support to students in understanding and implementing sophisticated object-oriented algorithms and concepts.
        </li>
      </ul>
       </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>

          <span style={{ fontSize: '20px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
          Personal Interests #4 
          </span>
          </Accordion.Header>
          <Accordion.Body style={{ backgroundColor: '#1a1a1a', color: '#f1f1f1' }}>
          <ul>
        <li>
          Music:
          <ul>
          <li>Playing guitar and singing are essential ways for me to unwind and cultivate creative inspiration.</li>
          </ul>
        </li>
        <li>
          Cricket:
          <ul>
            <li>Passionate about cricket, with a significant involvement that led to winning an inter-school tournament during school years.</li>
          </ul>
        </li>
        <li>
          Chess:
          <ul>
            <li>Consider myself a decent player; enjoy the intellectual challenge and find it refreshing from technical endeavors.</li>
          </ul>
        </li>
      </ul> </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    
    </>

     
  )
}

export default About;

// zada data hua to span ki jgh <p> use