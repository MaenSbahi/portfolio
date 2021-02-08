import React from 'react';
import Input from './Input';

const Form = ({ setStatus }) => {
    const submitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader('Accept', 'application/json');

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;

            if (xhr.status === 200) {
                form.reset();
                setStatus('SUCCESS');
                setTimeout(() => setStatus(''), 6000);
            } else {
                setStatus('ERROR');
            }
        };
        xhr.send(data);
    };

    return (
        <form
            onSubmit={submitForm}
            action="https://formspree.io/xdowwjna"
            method="POST"
            className="contact-form"
        >
            <Input
                type="text"
                name="name"
                placeholder="Full name"
                label="Full name"
            />
            <Input
                type="email"
                name="email"
                placeholder="Name@example.com"
                label="Your email"
            />
            <Input
                input={false}
                name="message"
                placeholder="Tell me more about your project, needs, and timeline."
                label="Your message"
            />
            <div className="buttons">
                <button className="submit">Send</button>
            </div>
        </form>
    );
};

export default Form;
