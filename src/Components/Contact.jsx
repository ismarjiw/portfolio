import React from 'react'

export default function contact() {
    
    function sendEmail() {
        var params = {
            from_name: document.getElementById('name').value,
            email_id: document.getElementById('email_id').value,
            message: document.getElementById('message').value
        }
        emailjs.send("service_agszovn", "template_ki80x5j", params)
            .then(function (res) {
                alert("Success! " + res.status);
            })
    }
    
    return (
        <div className="contact-form" id='contact'>
            <h2>Get In Touch</h2>
            <h3>I'm currently looking for any new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</h3>
            <input id="name" type="text" placeholder='Name' required /><br />
            <input id="email_id" type="email" placeholder='Email' required /><br />
            <textarea id="message" placeholder='Message' required></textarea><br />
            <button onClick={sendEmail}>Say Hello</button>
        </div>
    )
}