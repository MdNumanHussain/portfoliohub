import React, { useEffect, useState } from 'react';
import './Footer.css'; // Ensure this path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const [isDarkMode, setIsDarkMode] = useState(document.body.classList.contains('accessibility-mode'));

    useEffect(() => {
        const body = document.body;

        const observer = new MutationObserver(() => {
            setIsDarkMode(body.classList.contains('accessibility-mode'));
        });

        observer.observe(body, {
            attributes: true,
            attributeFilter: ['class'],
        });

        return () => observer.disconnect();
    }, []);

    const footerClass = isDarkMode ? 'light-mode-footer' : 'dark-mode-footer';

    return (
        <div id="footer" className={footerClass}>
            <div className="container footer-container">
                <div className="contact-info">
                    <p><FontAwesomeIcon icon={faPaperPlane} /> numanhm618@gmail.com</p>
                    <p><FontAwesomeIcon icon={faPhone} /> +447387747419</p>
                </div>
                <div className="social-icons">
                    <a href="https://www.facebook.com/profile.php?id=100009468416735"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://github.com/MdNumanHussain"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.instagram.com/noooo_maaaan"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://www.linkedin.com/in/numanmahim"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
