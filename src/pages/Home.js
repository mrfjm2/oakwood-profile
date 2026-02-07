import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ContactSection from '../components/ContactSection';
import './Home.css';

function Home() {
  const services = [
    {
      id: 'construction',
      title: 'The Construction',
      description: 'End-to-end builds with engineering oversight',
      icon: '🏗️',
      instagram: 'https://www.instagram.com/oakwood.group/',
      path: '/construction'
    },
    {
      id: 'design',
      title: 'The Design',
      description: 'Modern, clean, and easy to maintain spaces',
      icon: '✨',
      instagram: 'https://www.instagram.com/oakwood.thedesigns',
      path: '/design'
    },
    {
      id: 'joinery',
      title: 'The Joinery',
      description: 'Custom kitchens, doors, wardrobes & fit-outs',
      icon: '🪵',
      instagram: 'https://www.instagram.com/oakwood.thejoinery/',
      path: '/joinery'
    },
    {
      id: 'boutique',
      title: 'The Boutique',
      description: 'Luxury furniture & premium décor pieces',
      icon: '🛋️',
      instagram: 'https://www.instagram.com/oakwood.theboutique/',
      path: '/boutique'
    }
  ];

  return (
    <div className="home-page">
      <Hero />
      <section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">
            Comprehensive solutions for your space, crafted with precision and care
          </p>
          <div className="services-grid">
            {services.map(service => (
              <Link 
                to={service.path} 
                key={service.id} 
                className="service-card-link"
              >
                <div className="service-card-home">
                  <div className="service-header">
                    <div className="service-icon-large">{service.icon}</div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                  </div>
                  <div className="service-footer">
                    <button className="view-more-btn">
                      View Portfolio →
                    </button>
                    <a 
                      href={service.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="instagram-link-home"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}

export default Home;
