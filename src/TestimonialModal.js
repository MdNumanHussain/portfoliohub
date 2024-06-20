import React from 'react';
import './TestimonialModal.css';

function TestimonialModal({ isOpen, onClose, testimonials }) {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Testimonials</h2>
                {testimonials.slice(0).reverse().map((testimonial, index) => (
                    <div key={index} className="testimonial-item">
                        <p>"{testimonial.quote}"</p>
                        <p>- {testimonial.author} Commented on {testimonial.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TestimonialModal;
