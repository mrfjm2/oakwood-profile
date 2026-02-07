import React from 'react';
import './App.css';
import ServiceCard from './components/ServiceCard';
import Header from './components/Header';
import Hero from './components/Hero';
import ContactSection from './components/ContactSection';

function App() {
  const services = [
    {
      id: 1,
      title: 'The Construction',
      description: 'End-to-end builds with engineering oversight',
      icon: '🏗️',
      details: [
        'Full project management from concept to completion',
        'Experienced engineering oversight',
        'Quality control at every stage',
        'On-time delivery guarantee',
        'Compliance with all building codes'
      ]
    },
    {
      id: 2,
      title: 'The Design',
      description: 'Modern, clean, and easy to maintain spaces',
      icon: '✨',
      details: [
        'Contemporary interior design solutions',
        'Space optimization and planning',
        'Sustainable material selection',
        'Lighting and ambiance design',
        'Functional yet beautiful spaces'
      ]
    },
    {
      id: 3,
      title: 'The Joinery',
      description: 'Custom kitchens, doors, wardrobes & fit-outs',
      icon: '🪵',
      details: [
        'Bespoke kitchen installations',
        'Custom wardrobe solutions',
        'Handcrafted doors and panels',
        'Premium wood and materials',
        'Perfect fit and finish'
      ]
    },
    {
      id: 4,
      title: 'The Boutique',
      description: 'Luxury furniture & premium décor pieces',
      icon: '🛋️',
      details: [
        'Curated luxury furniture collection',
        'High-end décor pieces',
        'Exclusive designer partnerships',
        'Custom furniture design',
        'Premium quality guarantee'
      ]
    }
  ];

  return (
    <div className="App">
      <Header />
      <Hero />
      <section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">
            Comprehensive solutions for your space, crafted with precision and care
          </p>
          <div className="services-grid">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}

export default App;
