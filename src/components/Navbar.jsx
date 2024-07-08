import React, { useState } from "react";
import pic from "../../public/photo.png";
import { MdClose } from "react-icons/md";
import { LuMenuSquare } from "react-icons/lu";
import { Link } from "react-scroll";

function Navbar() {
    const [menu, setMenu] = useState(false);

    const navItems = [
        { id: 1, text: "Home" },
        { id: 2, text: "About" },
        { id: 3, text: "Projects" },
        { id: 4, text: "Experience" },
        { id: 5, text: "Contact" },
        { id: 6, text: "Resume", url: "https://drive.google.com/file/d/1WcqmcJdSjy9JFgaBz445PeovAQynkyBw/view?usp=sharing" } // Add your resume link here
    ];

    return (
        <div className="text-white mx-auto px-4 h-24 md:px-20 h-20 shadow-md fixed top-0 right-0 left-0 bottom-0 z-50 bg-black">
            <div className="flex justify-between items-center h-16 mt-2">
                <div className="flex space-x-2">
                <img src={pic} className="h-12 w-12 rounded-full mt-2 " alt="" />
                    <div>
                        <h1 className="mt-2 font-semibold text-xl cursor-pointer text-xl">
                            Anukul<span className="text-green-500 text-2xl">l</span>
                            <p className="text-lg">Software Development Engineer</p>
                        </h1>
                    </div>
                </div>

                {/* Desktop Navbar */}
                <div className="hidden md:block">
                    <ul className="flex space-x-8 text-xl">
                        {navItems.map(({ id, text, url }) => (
                            <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>
                                {url ? (
                                    <a href={url} download>{text}</a>
                                ) : (
                                    <Link to={text} smooth={true} duration={500} offset={-70} activeClass="active">{text}</Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Navbar */}
                <div className="md:hidden">
                    <div onClick={() => setMenu(!menu)}>{!menu ? <LuMenuSquare /> : <MdClose />}</div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menu && (
                <div className="bg-black md:hidden">
                    <ul className="flex flex-col items-center justify-center space-y-3 text-xl">
                        {navItems.map(({ id, text, url }) => (
                            <li className="hover:scale-105 duration-200 cursor-pointer font-semibold" key={id}>
                                {url ? (
                                    <a href={url}  download onClick={() => setMenu(!menu)}>{text}</a>
                                ) : (
                                    <Link
                                        onClick={() => setMenu(!menu)}
                                        to={text}
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        activeClass="active">{text}</Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navbar;
