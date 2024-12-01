
"use client"
import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import "../app/styles/contact.css";



const Contact = () => {
  return (
    
    <>


      {/* Background Image */}
      <div className="bak-img">
        <Image 
          src="/city.jpg"
          alt="Cityscape"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Contact Section */}
      <div id="contact" className="contact-container">
        <div className="contact-grid">
          <div className="contact-space">
            <h2 className="contact-heading" >
              Get in touch
            </h2>
            <p className="contact-text" >
              Feel free to reach out—drop me a line, give me a call, or send a
              message using the form. I m here to connect, answer any questions,
              or chat about potential collaborations.
            </p>

            <div className="contact-flex">
              <AiOutlineMail size={30} /> abc123@gmail.com
            </div>
            <div className="contact-flex1" >
              <BsTelephone size={30} /> (021)0090-0094
            </div>
          </div>

          <div className="contact-space">
            <div className="form" >
              <label htmlFor="name">Name :</label>
              <input type="text" id="name" className="input-field" />
            </div>
            <div className="form" >
              <label htmlFor="email">Email :</label>
              <input type="email" id="email" className="input-field" />
            </div>
            <div className="form">
              <label htmlFor="message">Message :</label>
              <textarea id="message" className="textarea-field" rows={4}></textarea>
            </div>
            <button className="button"  type="submit" >Submit</button>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Contact;
