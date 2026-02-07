import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageGalleryModal from '../components/ImageGalleryModal';
import ContactSection from '../components/ContactSection';
import './ServicePage.css';

// Import Joinery Images
import joineryImg1 from '../Images/Joinery/JoineryOne.jpg';
import joineryImg2 from '../Images/Joinery/JoineryTwo.jpg';
import joineryImg3 from '../Images/Joinery/JoineryThree.jpg';
import joineryImg4 from '../Images/Joinery/JoineryFour.jpg';
import joineryImg5 from '../Images/Joinery/JoineryFive.jpg';
import joineryImg6 from '../Images/Joinery/JoinerySix.jpg';
import joineryImg7 from '../Images/Joinery/JoinerySeven.jpg';
import joineryImg8 from '../Images/Joinery/JoineryEight.jpg';
import joineryImg9 from '../Images/Joinery/JoineryNine.jpg';

function Joinery() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: joineryImg1, alt: 'Custom Joinery Project 1' },
    { src: joineryImg2, alt: 'Custom Joinery Project 2' },
    { src: joineryImg3, alt: 'Custom Joinery Project 3' },
    { src: joineryImg4, alt: 'Custom Joinery Project 4' },
    { src: joineryImg5, alt: 'Custom Joinery Project 5' },
    { src: joineryImg6, alt: 'Custom Joinery Project 6' },
    { src: joineryImg7, alt: 'Custom Joinery Project 7' },
    { src: joineryImg8, alt: 'Custom Joinery Project 8' },
    { src: joineryImg9, alt: 'Custom Joinery Project 9' }
  ];

  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setGalleryOpen(true);
  };

  return (
    <div className="service-page">
      <div className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link> / <span>Joinery</span>
        </div>
      </div>

      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <span className="service-icon-hero">🪵</span>
            <h1 className="service-hero-title">The Joinery</h1>
            <p className="service-hero-subtitle">Custom kitchens, doors, wardrobes & fit-outs</p>
            <a 
              href="https://www.instagram.com/oakwood.thejoinery/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-btn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow @oakwood.thejoinery
            </a>
          </div>
        </div>
      </section>

      <section className="service-content">
        <div className="container">
          <div className="service-description-section">
            <h2>What We Do</h2>
            <p>
              At Oakwood Joinery, we specialize in crafting bespoke wooden installations that combine 
              traditional craftsmanship with modern design. From custom kitchens to elegant wardrobes, 
              handcrafted doors to complete interior fit-outs, every piece is tailored to your exact 
              specifications using premium materials and expert techniques.
            </p>
          </div>

          <div className="service-features">
            <h3>Our Services Include</h3>
            <ul>
              <li>
                <span className="feature-icon">✓</span>
                <div>
                  <strong>Bespoke Kitchen Installations</strong>
                  <p>Custom-designed kitchens built to maximize space and functionality</p>
                </div>
              </li>
              <li>
                <span className="feature-icon">✓</span>
                <div>
                  <strong>Custom Wardrobe Solutions</strong>
                  <p>Tailored storage solutions that fit your space perfectly</p>
                </div>
              </li>
              <li>
                <span className="feature-icon">✓</span>
                <div>
                  <strong>Handcrafted Doors & Panels</strong>
                  <p>Elegant wooden doors and decorative panels made to order</p>
                </div>
              </li>
              <li>
                <span className="feature-icon">✓</span>
                <div>
                  <strong>Premium Materials</strong>
                  <p>Only the finest wood and materials for lasting quality</p>
                </div>
              </li>
              <li>
                <span className="feature-icon">✓</span>
                <div>
                  <strong>Perfect Fit & Finish</strong>
                  <p>Meticulous attention to detail ensuring flawless installation</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <h2>Our Joinery Portfolio</h2>
          <p className="gallery-subtitle">Explore our custom joinery work and craftsmanship</p>
          
          <div className="image-grid">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="image-grid-item"
                onClick={() => openGallery(index)}
              >
                <img src={image.src} alt={image.alt} />
                <div className="image-overlay">
                  <span className="view-icon">🔍</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      <ImageGalleryModal
        images={images}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        startIndex={currentImageIndex}
        serviceName="The Joinery"
      />
    </div>
  );
}

export default Joinery;
