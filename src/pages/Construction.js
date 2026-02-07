import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageGalleryModal from '../components/ImageGalleryModal';
import ContactSection from '../components/ContactSection';
import './ServicePage.css';

// Import Construction Images
import constructionImg1 from '../Images/Construction/ConstructionImageOne.jpg';
import constructionImg2 from '../Images/Construction/ConstructionImageTwo.jpg';
import constructionImg3 from '../Images/Construction/ConstructionImageThree.jpg';
import constructionImg4 from '../Images/Construction/ConstructionImageFour.jpg';
import constructionImg5 from '../Images/Construction/ConstructionImageFive.jpg';
import constructionImg6 from '../Images/Construction/ConstructionImageSix.jpg';
import constructionImg7 from '../Images/Construction/ConstructionImageSeven.jpg';
import constructionImg8 from '../Images/Construction/ConstructionImageEight.jpg';
import constructionImg9 from '../Images/Construction/ConstructionImageNine.jpg';

function Construction() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: constructionImg1, alt: 'Construction Project 1' },
    { src: constructionImg2, alt: 'Construction Project 2' },
    { src: constructionImg3, alt: 'Construction Project 3' },
    { src: constructionImg4, alt: 'Construction Project 4' },
    { src: constructionImg5, alt: 'Construction Project 5' },
    { src: constructionImg6, alt: 'Construction Project 6' },
    { src: constructionImg7, alt: 'Construction Project 7' },
    { src: constructionImg8, alt: 'Construction Project 8' },
    { src: constructionImg9, alt: 'Construction Project 9' },
  ];

  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setGalleryOpen(true);
  };

  return (
    <div className="service-page">
      <div className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link> / <span>Construction</span>
        </div>
      </div>

      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <span className="service-icon-hero">🏗️</span>
            <h1 className="service-hero-title">The Construction</h1>
            <p className="service-hero-subtitle">End-to-end builds with engineering oversight</p>
            <a 
              href="https://www.instagram.com/oakwood.group/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-btn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow @oakwood.group
            </a>
          </div>
        </div>
      </section>

      <section className="service-content">
        <div className="container">
          <div className="service-description-section">
            <h2>What We Do</h2>
            <p>
              At Oakwood Construction, we specialize in delivering comprehensive construction solutions 
              from initial concept through to final completion. Our experienced team combines technical 
              expertise with meticulous attention to detail, ensuring every project meets the highest 
              standards of quality and safety.
            </p>
          </div>

          <div className="service-features">
            <h3>Our Services Include</h3>
            <ul>
              <li>
                <span className="feature-icon">✓</span>
                <div>
                  <strong>Full Project Management</strong>
                  <p>From concept to completion, we handle every aspect of your build</p>
                </div>
              </li>
              <li>
                <span className="feature-icon">✓</span>
                <div>
                  <strong>Engineering Oversight</strong>
                  <p>Experienced engineering supervision ensures structural integrity</p>
                </div>
              </li>
              <li>
                <span className="feature-icon">✓</span>
                <div>
                  <strong>Quality Control</strong>
                  <p>Rigorous quality checks at every stage of construction</p>
                </div>
              </li>
              <li>
                <span className="feature-icon">✓</span>
                <div>
                  <strong>On-Time Delivery</strong>
                  <p>We guarantee timely completion without compromising quality</p>
                </div>
              </li>
              <li>
                <span className="feature-icon">✓</span>
                <div>
                  <strong>Building Code Compliance</strong>
                  <p>Full compliance with all local building codes and regulations</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <h2>Our Projects</h2>
          <p className="gallery-subtitle">Explore our portfolio of completed construction projects</p>
          
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
        serviceName="The Construction"
      />
    </div>
  );
}

export default Construction;
