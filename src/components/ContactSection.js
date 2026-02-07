import React from 'react';
import './ContactSection.css';

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Ready to start your project? We're here to help bring your vision to life.
        </p>
        
        <div className="contact-methods">
          <a href="mailto:info@theoakwood.net" className="contact-card">
            <div className="contact-icon">📧</div>
            <h3>Email Us</h3>
            <p>info@theoakwood.net</p>
            <span className="contact-label">Send us a message</span>
          </a>
          
          <a href="https://api.whatsapp.com/send/?phone=97317727270&text&type=phone_number&app_absent=0" className="contact-card" target="_blank" rel="noopener noreferrer">
            <div className="contact-icon">💬</div>
            <h3>WhatsApp</h3>
            <p>Chat with us</p>
            <span className="contact-label">Quick response</span>
          </a>

          <a href="tel:+97317727270" className="contact-card">
            <div className="contact-icon">📞</div>
            <h3>Call</h3>
            <p>Direct line</p>
            <span className="contact-label">Speak to our team</span>
          </a>
        </div>

        <div className="location-info">
          <div className="location-item">
            <span className="location-icon">📍</span>
            <span>Manama • Bahrain</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
