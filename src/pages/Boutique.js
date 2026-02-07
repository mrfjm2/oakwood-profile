import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageGalleryModal from '../components/ImageGalleryModal';
import ContactSection from '../components/ContactSection';
import './ServicePage.css';

// Import Boutique Images
import boutiqueImg1 from '../Images/Boutique/BoutiqueOne.jpg';
import boutiqueImg2 from '../Images/Boutique/BoutiqueTwo.jpg';
import boutiqueImg3 from '../Images/Boutique/BoutiqueThree.jpg';
import boutiqueImg4 from '../Images/Boutique/BoutiqueFour.jpg';
import boutiqueImg5 from '../Images/Boutique/BoutiqueFive.jpg';
import boutiqueImg6 from '../Images/Boutique/BoutiqueSix.jpg';
import boutiqueImg7 from '../Images/Boutique/BoutiqueSeven.jpg';
import boutiqueImg8 from '../Images/Boutique/BoutiqueEight.jpg';
import boutiqueImg9 from '../Images/Boutique/BoutiqueNine.jpg';

function Boutique() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: boutiqueImg4, alt: 'Luxury Furniture 4' },
    { src: boutiqueImg5, alt: 'Luxury Furniture 5' },
    { src: boutiqueImg6, alt: 'Luxury Furniture 6' },
    { src: boutiqueImg1, alt: 'Luxury Furniture 1' },
    { src: boutiqueImg2, alt: 'Luxury Furniture 2' },
    { src: boutiqueImg3, alt: 'Luxury Furniture 3' },
    { src: boutiqueImg7, alt: 'Luxury Furniture 7' },
    { src: boutiqueImg8, alt: 'Luxury Furniture 8' },
    { src: boutiqueImg9, alt: 'Luxury Furniture 9' }
  ];

  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setGalleryOpen(true);
  };

  return (
    <div className="service-page">
      <div className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link> / <span>Boutique</span>
        </div>
      </div>

      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <span className="service-icon-hero">🛋️</span>
            <h1 className="service-hero-title">The Boutique</h1>
            <p className="service-hero-subtitle">Luxury furniture & premium décor pieces</p>
            <a 
              href="https://www.instagram.com/oakwood.theboutique/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-btn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow @oakwood.theboutique
            </a>
          </div>
        </div>
      </section>

      <section className="service-content">
        <div className="container">
          <div className="service-description-section">
            <h2>What We Do</h2>
            <p>
              At Oakwood Boutique, we curate an exclusive collection of luxury furniture and premium 
              décor pieces that elevate any space. Each item is carefully selected for its exceptional 
              quality, timeless design, and craftsmanship. From designer furniture to unique decorative 
              accents, our boutique offers distinguished pieces that make a statement.
            </p>
          </div>

          <div className="service-features">
            <h3>Our Collection Includes</h3>
            <ul>
              <li>
                <span className="feature-icon">✓</span>
                <div>
                  <strong>Curated Luxury Furniture</strong>
                  <p>Handpicked pieces from renowned designers and manufacturers</p>
                </div>
              </li>
              <li>
                <span className="feature-icon">✓</span>
                <div>
                  <strong>Premium Décor Pieces</strong>
                  <p>Unique decorative items that add character to your space</p>
                </div>
              </li>
              <li>
                <span className="feature-icon">✓</span>
                <div>
                  <strong>Exclusive Partnerships</strong>
                  <p>Access to limited edition pieces from designer collections</p>
                </div>
              </li>
              <li>
                <span className="feature-icon">✓</span>
                <div>
                  <strong>Custom Design Options</strong>
                  <p>Personalized furniture tailored to your specific requirements</p>
                </div>
              </li>
              <li>
                <span className="feature-icon">✓</span>
                <div>
                  <strong>Quality Guarantee</strong>
                  <p>Every piece meets our exacting standards for excellence</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <h2>Our Boutique Collection</h2>
          <p className="gallery-subtitle">Discover our curated selection of luxury furniture and décor</p>
          
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
        serviceName="The Boutique"
      />
    </div>
  );
}

export default Boutique;
