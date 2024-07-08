import React from "react";

import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import nodejs from "../../public/node.png";
import reactjs from "../../public/reactjs.png";

import cfc from "../../public/cfc.png";


import ir from "../../public/ir.png";

import othello from "../../public/othello.jfif";

import cs from "../../public/cs.webp";

import fss from "../../public/fss.webp";

import graph from "../../public/graph.jpg";


import gpu from "../../public/gpu.jpg";
function Portfolio()
{   
    const cardItem = [
        {
            id: 0,
            logo: gpu,
            name: "STARPLAT: CROSS‑BACKEND GRAPH DSL FOR PARALLEL GRAPH ALGO",
            link: "https://github.com/Anu-22cool/SYCL_STARPLAT"
        },
        {
            id: 1,
            logo: fss,
            name: "DISTRO‑FLOCK: A FILE SHARING SOLUTION",
            link: "https://github.com/Anu-22cool/DistroFlock"
        },
        {
            id: 2,
            logo: ir,
            name: "CONTENT_AWARE_IMAGE_RESIZER",
            link: "https://github.com/Anu-22cool/Image_Resizer"
        },
        {
            id: 3,
            logo: othello,
            name: "OTHELLO_GAME_PLAYING_BOT",
            link: "https://github.com/Anu-22cool/Othello-Game-Playing-Bot"
        },
        {
            id: 4,
            logo: cs,
            name: "LIVE_CRICKET_SCORE",
            link: "https://github.com/Anu-22cool/Live_CricketScore"
        },
        {
            id: 5,
            logo: cfc,
            name: "COMPUTER_CENTRE_FACILITY_BOOKING",
            link: "https://github.com/Anu-22cool/Parallelized_Computer_Centre_Facility_Booking_Application"
        },
        {
            id: 6,
            logo: graph,
            name: "Graph_Activation_Game",
            link: "https://github.com/Anu-22cool/Graph_Activation_Game"
        }
    ];
    
    return (
        <>        <div name="Projects" className="text-white accordion-container" style={{ maxWidth: '1300px', margin: '0 auto', marginTop: '20px' }}>
            <div>
                <h1 className="underline text-5xl font-bold mb-5">Projects</h1>
                <br/>
                <br/>
                {/* <span className="underline font-semibold">Featured Projects</span> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-5">
                    {
                        cardItem.map(({id,logo,name,link})=>(

                            <div className="md:w-[600px] md:h-[300px] border-[4px] border-white dark:border-cyan rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300" key={id}>
                                  
                                  <div className="flex items-center">
                                        <img src={logo} className="w-[160px] h-[160px] p-1 rounded-full border-[2px] md:mt-6" alt=""  />
                                        <div className="px-2 font-bold text-xl mb-2">{name}</div>
                                 </div>
                                 
                                  <div className="justify-around px-6 py-4 space-x-3">
                                        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Video</button> */}
                                                        <a href={link} target="_blank" rel="noopener noreferrer">
                                                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded text-xl">Source Code</button>
                                                        </a>
                                  </div>
                                  <br></br>         
                            </div>    
                           
                        ))
                    }
                </div>
            </div>
        </div>
        <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
   

        </>

    );
}


export default Portfolio;
