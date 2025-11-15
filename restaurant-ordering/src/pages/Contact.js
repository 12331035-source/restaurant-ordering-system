import React, { useState } from 'react';
import './style.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Construct mailto link
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:12331035@students.liu.edu.lb?subject=${subject}&body=${body}`;

    // Open default mail client
    window.location.href = mailtoLink;

    // Show confirmation alert
    alert(`Thank you, ${formData.name}! We'll contact you as soon as possible.`);

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="page contact">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
          required
        ></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
