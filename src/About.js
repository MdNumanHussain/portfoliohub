import React, { useState, useEffect } from 'react';
import './About.css';
import userImage from './images/about.JPG'; // Correctly import the image

const About = () => {
    const [activeTab, setActiveTab] = useState('skills');

    useEffect(() => {
        const typeWriter = () => {
            const subtitle = document.querySelector('.sub-title');
            const fullText = "About Me";
            let i = 0;

            const typingEffect = () => {
                if (i < fullText.length) {
                    subtitle.textContent += fullText.charAt(i);
                    i++;
                    setTimeout(typingEffect, 150); // Adjust timing for faster or slower typing
                } else {
                    subtitle.style.borderRight = 'none'; // Remove the cursor after typing is complete
                }
            };

            typingEffect();
        };

        typeWriter(); // Initiate the typewriter effect when the document is ready
    }, []);

    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img src={userImage} alt="User" /> {/* Correctly reference the imported image */}
                        <h1>MD Numan Hussain</h1>
                    </div>
                    <div className="about-col-2">
                        <h1 className="sub-title">About Me</h1>
                        <p>
                            Intelligent and ambitious Computer Science graduate with a strong passion 
                            for technology and a keen eye for detail. Experienced in problem-solving, 
                            proactive in taking initiative, and adept at grasping new concepts swiftly. 
                            Demonstrates excellent collaboration and independent work skills. Highly 
                            organized with a structured approach to work and a proven ability to establish 
                            rapport with diverse colleagues and clients. Eager to pursue a career in DevOps 
                            Engineering leveraging a strong foundation in computer science and a passion 
                            for continuous integration, deployment, and cloud technologies.
                        </p>
                        <div className="tab-titles">
                            <div className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} onClick={() => setActiveTab('skills')}>Skills</div>
                            <div className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} onClick={() => setActiveTab('experience')}>Experience</div>
                            <div className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => setActiveTab('education')}>Education</div>
                            <div className={`tab-links ${activeTab === 'certifications' ? 'active-link' : ''}`} onClick={() => setActiveTab('certifications')}>Certifications</div>
                        </div>
                        <div className="tab-contents" style={{ display: activeTab === 'skills' ? 'block' : 'none' }} id="skills">
                            <ul>
                                <li><span>Programming Languages</span><br />
                                    <ul>
                                    <li>-Proficient in Java, Python, C#, C, C++, Kotlin, JavaScript etc</li>
                                    <li>-Experience with SQL and NoSQL databases</li>
                                    </ul>
                                </li>
                                <li><span>Web Development</span><br />
                                    <ul>
                                        <li>-Full-stack development</li>
                                        <li>-Familiar with frameworks such as React, Angular, and Vue.js</li>
                                        <li>-Expertise in HTML5, CSS3, and modern JavaScript (ES6+)</li>
                                    </ul>
                                </li>
                                <li><span>Mobile Development</span><br />
                                    <ul>
                                        <li>-Experience with Android and iOS development</li>
                                        <li>-Proficient in Flutter and React Native for cross-platform solutions</li>
                                    </ul>
                                </li>
                                <li><span>Software Architecture</span><br />
                                    <ul>
                                        <li>-Knowledge of design patterns and architecture styles (MVC, Microservices)</li>
                                        <li>-Experience in API design and development with REST and GraphQL</li>
                                    </ul>
                                </li>
                                <li><span>Cloud Computing</span><br />
                                    <ul>
                                        <li>-Skilled in using AWS, Azure, and Google Cloud platforms</li>
                                        <li>-Knowledge of cloud services like EC2, S3, Lambda, and Azure Functions</li>
                                    </ul>
                                </li>
                                <li><span>DevOps</span><br />
                                    <ul>
                                        <li>-Understanding of CI/CD pipelines using Jenkins, GitHub Actions, or GitLab</li>
                                        <li>-Familiarity with containerization and orchestration using Docker and Kubernetes</li>
                                    </ul>
                                </li>
                                <li><span>Machine Learning/AI</span><br />
                                    <ul>
                                        <li>-Basic knowledge of machine learning algorithms and data analysis</li>
                                        <li>-Experience with TensorFlow or PyTorch</li>
                                    </ul>
                                </li>
                                <li><span>Cybersecurity</span><br />
                                    <ul>
                                        <li>-Fundamental understanding of secure coding practices</li>
                                        <li>Experience with identity and access management (IAM)</li>
                                    </ul>
                                </li>
                                <li><span>Agile and Scrum</span><br />
                                    <ul>
                                        <li>-Proficient in Agile development methodologies</li>
                                        <li>-Experience with Scrum Master or similar agile process experience</li>
                                    </ul>
                                </li>
                                <li><span>UI/UX Design</span><br />
                                    <ul>
                                        <li>-Strong understanding of user-centered design principles</li>
                                        <li>-Experience with wireframing and prototyping tools like Sketch, Figma, or Adobe XD</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-contents" style={{ display: activeTab === 'experience' ? 'block' : 'none' }} id="experience">
                            <ul>
                                <li><span>Computer Science Teacher</span><br />Prime Tuition, Brixton, London, UK</li>
                                <li><span>Science Teacher</span><br />Ideal Centre for Tuition, Stepney Green, London, UK</li>
                                <li><span>Independent Software Developer</span><br />Full-stack</li>
                            </ul>
                        </div>
                        <div className="tab-contents" style={{ display: activeTab === 'education' ? 'block' : 'none' }} id="education">
                            <ul>
                                <li><span>University of Hertfordshire</span><br />BSc (Hons) Software Engineering — 1st Class Honours-----------2021-2024</li>
                                <li><span>University of Chittagong</span><br />BA (Hons) Computer Science — Incomplete--------------------------2019-2021</li>
                                <li><span>BMARPC</span><br />A-Levels — GPA: 5.0 / 5.0--------------------------------------------------2017-2019</li>
                            </ul>
                        </div>
                        <div className="tab-contents" style={{ display: activeTab === 'certifications' ? 'block' : 'none' }} id="certifications">
                            <ul>
                                <li><span>Certified Kubernetes Administrator (CKA)</span></li>
                                <li><span>AWS Certified Solutions Architect</span></li>
                                <li><span>Google Professional Data Engineer</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
