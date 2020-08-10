import React, { useCallback, useState } from 'react';
// @ts-ignore
import style from '../css/contactMe.module.css';
const ContactMe = () => {
    const [status, setStatus] = useState(null);
    const submitForm = useCallback((ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setStatus("SUCCESS");
            } else {
                setStatus("ERROR");
            }
        };
        xhr.send(data);
    }, []);

    return (
        <form
            className={style.form}
            onSubmit={submitForm}
            action="https://formspree.io/moqkberw"
            method="POST"
        >
            <div className={style.nameInput}>
                <div className={style.topBorder} />
                <div className={style.leftBorder} />
                <input type='text' placeholder='Your name.' name="name" required />
                <div className={style.rightBorder} />
                <div className={style.bottomBorder} />
            </div>
            <div className={style.nameInput}>
                <div className={style.topBorder} />
                <div className={style.leftBorder} />
                <input type='email' placeholder='Your email.' name="email" required />
                <div className={style.rightBorder} />
                <div className={style.bottomBorder} />
            </div>
            <div className={style.messageTextarea}>
                <div className={style.topBorder} />
                <div className={style.leftBorder} />
                <textarea placeholder='Your message.' name="message" required />
                <div className={style.rightBorder} />
                <div className={style.bottomBorder} />
            </div>


            {status === "SUCCESS" ? <p>Thanks!</p> : <div className={style.sendButton}>
                <button>Send!</button>
                <div className={style.bottomBorder} />
            </div>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
    );
};

export default ContactMe;
