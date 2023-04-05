import React, { useState } from "react";

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <>
                <h2>Merci</h2>
                <div>Je vous recontacterai bientot.</div>
            </>
        );
    }

    return (
        <form className="form"
            action='https://getform.io/f/742bf52d-cfcf-4fd0-8ea4-5d5792c86d61'
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
        >
            <div className="form-input">
                <input type="text" placeholder="Votre Nom" name="name" required />
            </div>
            <div>
                <input type="email" placeholder="Votre Email" name="email" required />
            </div>
            <div>
                <textarea placeholder="Votre message" name="message" required />
            </div>

            <button type="submit"> Contactez-moi </button>

        </form>
    );
};

export default ContactForm;