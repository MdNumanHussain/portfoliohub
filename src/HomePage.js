import React, { useState, useEffect } from 'react';
import './HomePage.css';
import coverImage from './images/Cover.png';
import profileImage from './images/Profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faRobot, faBlog, faComments, faArrowUp, faArrowDown, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { applyStoredTheme, toggleAccessibility } from './theme';
import TestimonialModal from './TestimonialModal';
import LeaveCommentModal from './LeaveCommentModal';

function HomePage() {
    const [currentSection, setCurrentSection] = useState('middle');
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") !== "light");
    const [showModal, setShowModal] = useState(false);
    const [showCommentModal, setShowCommentModal] = useState(false);
    const [testimonials, setTestimonials] = useState([
        { quote: "Numan is a highly skilled software engineer with a knack for solving complex problems efficiently.", author: "Client A", date: "26/05/2024" },
        { quote: "Working with Numan has been a pleasure; his dedication and expertise are evident in every project.", author: "Client B", date: "26/05/2024" },
        { quote: "He is an amazing person.", author: "Md Numan Hussain", date: "26/05/2024" },
    ]);

    useEffect(() => {
        console.log("HomePage useEffect called");
        applyStoredTheme();
        setIsDarkMode(localStorage.getItem("theme") !== "light");
    }, []);

    console.log("HomePage render called");

    const handleSlideUp = () => {
        setCurrentSection('left');
    };

    const handleSlideDown = () => {
        setCurrentSection('right');
    };

    const handleToggleTheme = () => {
        toggleAccessibility();
        setIsDarkMode(prevMode => !prevMode);
    };

    const handleAddTestimonial = (newTestimonial) => {
        setTestimonials(prevTestimonials => [newTestimonial, ...prevTestimonials]);
    };

    return (
        <div className="home-container">
            <div className={`slider-container ${currentSection}`}>
                <div className="column left-column">
                    <h2>Testimonials</h2>
                    {testimonials.slice(0, 3).reverse().map((testimonial, index) => (
                        <div key={index}>
                            <p>{testimonial.author} on {testimonial.date}</p>
                            <p>{testimonial.quote}</p>
                        </div>
                    ))}
                    <button className="view-testimonials" onClick={() => setShowModal(true)}>
                        <FontAwesomeIcon icon={faComments} /> View More Testimonials
                    </button>
                    <button className="leave-comment" onClick={() => setShowCommentModal(true)}>
                        <FontAwesomeIcon icon={faComments} /> Leave a Comment
                    </button>
                </div>
                <div className="column middle-column">
                    <div className="navigation-arrows">
                        <FontAwesomeIcon icon={faArrowUp} className="up-arrow" onClick={handleSlideUp} />
                    </div>
                    <div className="cover-photo">
                        <img src={coverImage} alt="Cover" />
                    </div>
                    <div className="profile-info">
                        <div className="profile-picture">
                            <img src={profileImage} alt="Profile" />
                        </div>
                        <div className="profile-details">
                            <h1>MD Numan Hussain</h1>
                            <p>Software Engineer</p>
                            <div className="buttons">
                                <button className="view-story">
                                    <FontAwesomeIcon icon={faBookOpen} /> View Story
                                </button>
                                <button className="know-about">
                                    <FontAwesomeIcon icon={faRobot} /> Know About Him from AI
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="navigation-arrows">
                        <FontAwesomeIcon icon={faArrowDown} className="down-arrow" onClick={handleSlideDown} />
                    </div>
                </div>
                <div className="column right-column">
                    <h2>Latest Blog Posts</h2>
                    <ul>
                        <li>Blog Post 1: The Future of AI in Software Development</li>
                        <li>Blog Post 2: 10 Tips for Effective Remote Work</li>
                        <li>Blog Post 3: Understanding Cloud Computing</li>
                    </ul>
                    <button className="view-blogs">
                        <FontAwesomeIcon icon={faBlog} /> View Blog
                    </button>
                </div>
            </div>
            <TestimonialModal isOpen={showModal} onClose={() => setShowModal(false)} testimonials={testimonials} />
            <LeaveCommentModal isOpen={showCommentModal} onClose={() => setShowCommentModal(false)} addTestimonial={handleAddTestimonial} />
        </div>
    );
}

export default HomePage;
