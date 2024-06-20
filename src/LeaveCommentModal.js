import React, { useState, useEffect } from 'react';
import './LeaveCommentModal.css';
import { database, ref, push } from './firebase';

function LeaveCommentModal({ isOpen, onClose, addTestimonial }) {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [date, setDate] = useState(new Date().toLocaleDateString());

    useEffect(() => {
        setDate(new Date().toLocaleDateString());
    }, [isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (quote && author) {
            const newTestimonial = { quote, author, date };
            addTestimonial(newTestimonial);

            // Save to Firebase
            try {
                const testimonialsRef = ref(database, 'testimonials');
                await push(testimonialsRef, newTestimonial);
            } catch (error) {
                console.error('Error submitting testimonial:', error);
            }

            setQuote("");
            setAuthor("");
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Leave a Comment</h2>
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={quote}
                        onChange={(e) => setQuote(e.target.value)}
                        placeholder="Your comment"
                        required
                    />
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="Your name"
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default LeaveCommentModal;
