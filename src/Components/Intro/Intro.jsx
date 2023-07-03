import React from 'react';
import './Intro.css';
import Me from '../../assets/Intro/propa2.png';
import Resume from '../../assets/resume/Afra_Zaman_Resume copy.pdf';
import { FiDownload } from 'react-icons/fi';  

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, This is</h2>
                    <h1 className="i-name">Afra Zaman</h1>

                    <div className="i-title-item">MERN Stack Developer</div>

                    <p className="i-desc">
                        Passionate MERN stack developer leveraging extensive experience to create dynamic, user-centric web applications. Combining creativity and technical expertise, I transform complex problems into innovative, scalable solutions.
                    </p>

                     {/* Add the button here with the icon */}
                     <a href={Resume} download className="mt-4 w-64 bg-[#53ab98] hover:bg-[#2b6777] text-white font-bold py-2 px-4 rounded flex items-center">
                        <FiDownload className="mr-2"/> My Resume
                    </a>
                </div>
        
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    );
};

export default Intro;
