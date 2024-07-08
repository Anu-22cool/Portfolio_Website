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
          <ul className="list-disc pl-8 text-lg font-sans leading-relaxed ">
              <li className="mb-4">
                <span className="font-semibold">Completed M.Tech in Computer Science from IIT Madras (July 2024)</span>
                <ul className="list-disc pl-7 mt-2">
                    <li className="mt-2">
                          Final year project under Prof. Rupesh Nasre on StarPlat, a domain-specific parallel programming language tailored for solving complex graph problems across different architectures.
                    </li>
                </ul>
              </li>
              <li className="mb-4">
                <span className="font-semibold">B.Tech in Computer Science from BIT Durg (April 2022)</span>
              </li>
              <li className="mb-4">
                <span className="font-semibold">Academic achievement: Secured 386th rank in GATE 2022 exam (Computer Science)</span>
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
         
            <ul className="list-disc pl-8 text-lg font-sans leading-relaxed font-semibold ">
              <li className="mb-4">
                  Solid understanding in essential theoretical subjects such as Advanced Data Structures and Algorithms, and Operating Systems.
              </li>
              <li className="mb-4">
                  Expertise in programming languages acquired through courses like Advanced Programming Laboratory, Object Oriented Programming, and GPU Programming using CUDA and SYCL.
              </li>
              <li className="mb-4">
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
          <div >
            <h5 className="text-xl font-semibold mb-4">National Supercomputing Mission</h5>
              <ul className="list-disc pl-8 text-lg font-sans leading-relaxed font-semibold ">
                  <li className="mb-4">
                    Collaborated with the National Supercomputing Mission to spearhead and facilitate a training program focused on SYCL.
                  </li>
                  <li className="mb-4">
                    Designed and delivered comprehensive training sessions covering:
                    <ul className="list-disc pl-8 mt-2">
                      <li className="mb-2">GPU fundamentals and architecture</li>
                      <li className="mb-2">Installation procedures</li>
                      <li className="mb-2">Intriguing program implementations</li>
                      <li className="mb-2">Optimization techniques</li>
                    </ul>
                  </li>
              </ul>

            <h5 className="text-xl font-semibold mb-4">Teaching Assistantship at IIT Madras</h5>
              <ul className="list-disc pl-8 text-lg font-sans leading-relaxed font-semibold ">
                <li className="mb-4">
                  Course: CS2810 Object Oriented Algorithms Implementation and Analysis Lab
                </li>
                <li className="mb-4">
                  Supervisor: Professor Kartik Nagar
                </li>
                   <li className="mb-4">
                  Provided invaluable support to students in understanding and implementing sophisticated object-oriented algorithms and concepts.
                </li>
              </ul>
         </div>

       </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>

          <span style={{ fontSize: '20px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
          Personal Interests #4 
          </span>
          </Accordion.Header>
          <Accordion.Body style={{ backgroundColor: '#1a1a1a', color: '#f1f1f1' }}>
          <div className="prose max-w-none">
            <ul className="list-disc pl-8 text-lg leading-relaxed ">
              <li className="mb-4">
                <span className="font-semibold">Music:</span>
                <ul className="list-disc pl-8 text-lg font-sans leading-relaxed font-semibold">
                  <li>Playing guitar and singing are essential ways for me to unwind and cultivate creative inspiration.</li>
                </ul>
              </li>
              <li className="mb-4">
                <span className="font-semibold">Cricket:</span>
                <ul className="list-disc pl-8 text-lg font-sans leading-relaxed font-semibold">
                  <li>Passionate about cricket, with a significant involvement that led to winning an inter-school tournament during school years.</li>
                </ul>
              </li>
              <li className="mb-4">
                <span className="font-semibold">Chess:</span>
                <ul className="list-disc pl-8 text-lg font-sans leading-relaxed font-semibold">
                  <li>Consider myself a decent player, enjoy the intellectual challenge and find it refreshing from technical endeavors.</li>
                </ul>
              </li>
            </ul>
          </div>
          </Accordion.Body>
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
