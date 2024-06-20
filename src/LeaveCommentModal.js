import React, { useState, useEffect } from 'react';
import './LeaveCommentModal.css';

function LeaveCommentModal({ isOpen, onClose, addTestimonial }) {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [date, setDate] = useState(new Date().toLocaleDateString());

    useEffect(() => {
        setDate(new Date().toLocaleDateString());
    }, [isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (quote && author) {
            addTestimonial({ quote, author, date });
            setQuote("");
            setAuthor("");
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
