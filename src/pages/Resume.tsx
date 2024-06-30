import React from 'react';
import { Nav } from '../components/Header';

export const Resume = () => {
    return (
        <div className="resume-page">
            <Nav />


            <div className="title">
            <p>Resume</p>
            </div>

            <a href="resume.pdf" className="first-download-link" download>
                Download Resume
            </a>

            <div className="resume-container">
                <div className="pdf-book">
                    <embed src="resume.pdf#toolbar=0" type="application/pdf" className="pdf-embed" />
                </div>
            </div>
            <a href="resume.pdf" className="download-link" download>
                Download Resume
            </a>
        </div>
    );
};
