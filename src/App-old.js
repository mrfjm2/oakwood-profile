import React, { useState } from 'react';
import './App.css';
import ServiceCard from './components/ServiceCard';
import Header from './components/Header';
import Hero from './components/Hero';
import ContactSection from './components/ContactSection';
import ImageGalleryModal from './components/ImageGalleryModal';

// Import Construction Images
import constructionImg1 from './Images/Construction/ConstructionImageOne.jpg';
import constructionImg2 from './Images/Construction/ConstructionImageTwo.jpg';
import constructionImg3 from './Images/Construction/ConstructionImageThree.jpg';
import constructionImg4 from './Images/Construction/ConstructionImageFour.jpg';
import constructionImg5 from './Images/Construction/ConstructionImageFive.jpg';
import constructionImg6 from './Images/Construction/ConstructionImageSix.jpg';
import constructionImg7 from './Images/Construction/ConstructionImageSeven.jpg';
import constructionImg8 from './Images/Construction/ConstructionImageEight.jpg';

function App() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState(null);

  // Construction Gallery Images
  const constructionImages = [
    { src: constructionImg1, alt: 'Construction Project 1' },
    { src: constructionImg2, alt: 'Construction Project 2' },
    { src: constructionImg3, alt: 'Construction Project 3' },
    { src: constructionImg4, alt: 'Construction Project 4' },
    { src: constructionImg5, alt: 'Construction Project 5' },
    { src: constructionImg6, alt: 'Construction Project 6' },
    { src: constructionImg7, alt: 'Construction Project 7' },
    { src: constructionImg8, alt: 'Construction Project 8' }
  ];

  const openGallery = (serviceName, images) => {
    setCurrentGallery({ serviceName, images });
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
    setTimeout(() => setCurrentGallery(null), 300);
  };
  const services = [
    {
      id: 1,
      title: 'The Construction',
      description: 'End-to-end builds with engineering oversight',
      icon: '🏗️',
      instagram: 'https://www.instagram.com/oakwood.group/',
      hasGallery: true,
      imageCount: 8,
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
      instagram: 'https://www.instagram.com/oakwood.thedesigns',
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
      instagram: 'https://www.instagram.com/oakwood.thejoinery/',
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
      instagram: 'https://www.instagram.com/oakwood.theboutique/',
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
              <ServiceCard 
                key={service.id} 
                service={service}
                onGalleryOpen={() => openGallery(service.title, constructionImages)}
              />
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
      
      {currentGallery && (
        <ImageGalleryModal
          images={currentGallery.images}
          isOpen={galleryOpen}
          onClose={closeGallery}
          serviceName={currentGallery.serviceName}
        />
      )}
    </div>
  );
}

export default App;
