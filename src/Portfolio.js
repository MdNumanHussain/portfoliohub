import React from 'react';
import './Portfolio.css';
import work1 from './images/work-1.png';
import work2 from './images/work-2.png';
import work3 from './images/work-3.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Portfolio = () => {
    return (
        <div id="portfolio">
            <div className="container">
                <h1 className="sub-title">My Work</h1>
                <div className="work-list">
                    <div className="work">
                        <img src={work1} alt="NextGen Coders" />
                        <div className="layer">
                            <h3>NextGen Coders</h3>
                            <p>Enables users to learn programming, run code, and access AI-powered assistance seamlessly. Download the app to start coding today!</p>
                            <a href="images/NextGenCoders.apk" download="NextGenCoders.apk"><i className="fas fa-download"></i> </a>
                        </div>                
                    </div>
                    <div className="work">
                        <img src={work2} alt="Social Finder App" />
                        <div className="layer">
                            <h3>Social Finder App</h3>
                            <p>Discover and connect with sports enthusiasts in your area with the Social Finder App. Meet up and play your favorite sports together! Check out the source code on GitHub to see how it works or to contribute.</p>
                            <a href="https://github.com/MdNumanHussain/Socialize" title="View on GitHub"><i className="fas fa-external-link-alt"></i> </a>
                        </div>                
                    </div>
                    <div className="work">
                        <img src={work3} alt="Numan Hussain's Portfolio" />
                        <div className="layer">
                            <h3>Numan Hussain's Portfolio</h3>
                            <p>Explore my personal portfolio website, built from scratch to showcase my projects and skills in web and app development. Dive into my world of coding and design.</p>
                            <a href="https://mdnumanhussain.github.io/NumanMahim.github.io/" title="Visit My Portfolio"><i className="fas fa-external-link-alt"></i></a>
                        </div>                
                    </div>
                </div>
                <a href="#" className="btn">See more</a>
            </div>
        </div>
    );
};

export default Portfolio;
