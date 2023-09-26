import React, { useState } from "react";
import "./contact.scss";

function Contact() {
  const [ name, setName] = useState("");
  const [email, setEmail ] = useState("");
  const [message, setMessage ] = useState("");

  console.log(name, email, message)
  return (
    <div className="contact_container" id="contact">
      <div>
        <h3>
          Got a project in mind?, <span>let's make it happen</span>
        </h3>
        <form
          name="contact"
          method="POST"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e)=> setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="name">What's on your mind</label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e)=> setMessage(e.target.value)}
            ></textarea>
          </div>

          <button type="submit">Contact</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
