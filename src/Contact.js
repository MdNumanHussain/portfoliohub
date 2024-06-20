import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fullMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

        const botToken = '7073059910:AAE-KjA9a8wHzI9iDkmOfFa6EWuJhLcZOHQ'; // Use your actual bot token
        const chatId = '7165607497'; // Make sure this is the correct chat ID
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: fullMessage,
                }),
            });

            const data = await response.json();
            if (data.ok) {
                setName('');
                setEmail('');
                setMessage('');
                setResponseMessage('Numan got your message in Telegram. He will reply through your email within 24 hours. Thanks for contacting!');
            } else {
                setResponseMessage('Failed to send message.');
            }
        } catch (error) {
            console.error('Error:', error);
            setResponseMessage('Failed to send message.');
        }
    };

    return (
        <div id="contact">
            <div className="container">
                <div className="row">
                    <h1 className="sub-title">Contact Me</h1>
                    <div className="contact-right">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="Name"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <textarea
                                name="Message"
                                rows="6"
                                placeholder="Your Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                            <button type="submit" className="btn btn2">Submit</button>
                        </form>
                        <span id="msg">{responseMessage}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
