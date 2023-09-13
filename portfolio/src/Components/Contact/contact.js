import React from "react";
import "./contact.scss";

function Contact() {
  return (
    <div className="contact_container" id="contact">
      <div>
        <h3>
          Got a project in mind?, <span>let's make it happen</span>
        </h3>
        <form>
          <div>
            <label htmlFor="name">Full name</label>
            <input type="text" name="name" id="name"/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email"/>
          </div>
          <div>
            <label htmlFor="name">What's on your mind</label>
            <textarea name="message" id="message"></textarea>
          </div>

          <button type="submit">Contact</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
