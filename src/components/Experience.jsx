import React from "react";

import html from "../../public/html.png";
import C from "../../public/C.webp";
import CPP from "../../public/C++.png";
import git from "../../public/git.png";
import sql from "../../public/sql.png";
import react from "../../public/reactjs.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import spring from "../../public/spring.png";
import mongodb from "../../public/mongodb.jpg";
import ncuda from "../../public/ncuda.jpg";
import sycl from "../../public/sycl.png";
import vs from "../../public/vs.jpg";
import eclipse from "../../public/eclipse.png";
import netbeans from "../../public/netbeans.jpg";
import jn from "../../public/jn.png";
import github from "../../public/github.jpg";
function Experience()
{   
    const cardItem=[
        {
            id:1,
            logo:C,
            name:"C"
        },
        {
            id:2,
            logo:CPP,
            name:"C++"
        },
        {
            id:3,
            logo:java,
            name:"Java"
        },
        {
            id:4,
            logo:spring,
            name:"Spring"
        },
        {
            id:9,
            logo:ncuda,
            name:"CUDA"
        },
        {
            id:10,
            logo:sycl,
            name:"SYCL"
        },
        {
            id:11,
            logo:javascript,
            name:"JavaScript"
        },
        {
            id:12,
            logo:react,
            name:"ReactJS"
        },
        {
            id:13,
            logo:mongodb,
            name:"MongoDB"
        },
        {
            id:14,
            logo:sql,
            name:"SQL"
        },
        {
            id:15,
            logo:github,
            name:"Github"
        },
        {
            id:16,
            logo:vs,
            name:"VS Code"
        },
        {
            id:13,
            logo:eclipse,
            name:"Eclipse"
        },
        {
            id:14,
            logo:netbeans,
            name:"NetBeans"
        }
    ]
    return (
        <>
        <div name="Experience" className="text-white accordion-container" style={{ maxWidth: '1300px', margin: '0 auto', marginTop: '20px' }}>
            <div>
                <h1 className="underline text-5xl font-bold mb-5">Experience</h1>
                <p className="font-bold  text-2xl  mb-5" >I have hands-on experience with the following tools & technologies:</p>
                <br></br>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-7 my-3">
                    {
                        cardItem.map(({id,logo,name})=>(

                            <div className="md:w-[200px] md:h-[200px] flex flex-col items-center justify-center border-[3px] rounded-full p-1 cursor-pointer hover:scale-110 duration-300" key={id}>
                                  <img src={logo} className="w-[150px]  rounded-full" alt=""></img> 
                                  <div>
                                    <div className="px-2 font-bold text-xl mb-2">{name}</div>
                                  </div>
                                    
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
    <br/>
    <br/>
    <br/>
    
        </>
    );
}


export default Experience;