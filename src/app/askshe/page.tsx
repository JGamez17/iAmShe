'use client'
import React, { FormEvent, useState } from 'react';

export const AskShe = () => {
    const [isSubmitted, setSubmitted] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: JSON.stringify({
                    access_key: "d38f8668-f2a0-4d7d-90d4-f7350c4f9abc",
                    name,
                    email,
                    message,
                }),
                headers: {
                    'content-type': 'application/json',
                },
            });
            if (res.status === 200) {
                setSubmitted(true);
            } else {
                console.error("Error:", res.statusText);
            }
        } catch (err) {
            console.error('API Error:', err);
        }

    };

    return isSubmitted ? (
        <div>
            <h1 className="text-center font-semibold text-3xl text-black">
                Thank you for your message!</h1>
        </div>
    ) : (
        <div className="bg-black min-h-screen flex flex-col items-center justify-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mt-20 mb-8">
                Ask She - Questions, Comments, Concerns, please submit below
            </h3>
            <form onSubmit={onSubmit} className="form-container flex flex-col gap-8">
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="email"
                        placeholder="name@example.com"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message: </label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        id="message"
                        placeholder="Enter your message"
                    ></textarea>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AskShe;
