import React from 'react';
import './Hero.css';

function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            We're <span className="highlight">building</span> something carefully crafted.
          </h1>
          <p className="hero-description">
            Our new website is in the works. We're polishing the details to match 
            our quality in the real world. Meanwhile, you can still reach us — we're 
            fully operational.
          </p>
          <div className="hero-buttons">
            <button onClick={scrollToContact} className="btn btn-primary">Get In Touch</button>
            <button onClick={scrollToServices} className="btn btn-secondary">View Services</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
