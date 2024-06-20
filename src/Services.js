import React from 'react';
import './Services.css';
import { useEffect } from 'react';

const Services = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://kit.fontawesome.com/ec35440de8.js";
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);
    }, []);

    return (
        <div id="services">
            <div className="container">
                <h1 className="sub-title">My Services</h1>
                <div className="services-list">
                    <div>
                        <i className="fa-solid fa-code"></i>
                        <h2>Web Design</h2>
                        <p>Expertise in crafting visually appealing and responsive websites. Utilizing the latest web technologies, I design user-friendly and innovative websites tailored to meet client needs and enhance user engagement.</p>
                        <a href="#">Learn more</a>
                    </div>
                    <div>
                        <i className="fa-solid fa-code"></i>
                        <h2>UI/UX Design</h2>
                        <p>Specialized in creating intuitive and effective user interfaces and experiences. With a focus on usability and design aesthetics, I ensure seamless interaction and a satisfying user journey across all digital platforms.</p>
                        <a href="#">Learn more</a>
                    </div>
                    <div>
                        <i className="fa-solid fa-code"></i>
                        <h2>App Development</h2>
                        <p>Offer comprehensive app development services for both Android and iOS platforms. From concept to launch, I develop high-performance, feature-rich apps using industry-best practices and cutting-edge technologies.</p>
                        <a href="#">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
