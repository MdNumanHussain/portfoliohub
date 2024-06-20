import React from 'react';
import './Cv.css';
import cvPdf from './images/cv.pdf';
import cvDocx from './images/cv.docx';
import cvPng from './images/cv.png';

const Cv = () => {
    return (
        <div className="download-cv">
            <h2>Download CV</h2>
            <a href={cvPdf} download="Md Numan Hussain-cv.pdf" className="btn">Download as PDF</a>
            <a href={cvDocx} download="Md Numan Hussain-cv.docx" className="btn">Download as DOCX</a>
            <a href={cvPng} download="Md Numan Hussain-cv.png" className="btn">Download as PNG</a>
        </div>
    );
};

export default Cv;
