import React, { useState, useEffect } from 'react';
import './ImageGalleryModal.css';

function ImageGalleryModal({ images, isOpen, onClose, startIndex = 0, serviceName }) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  useEffect(() => {
    setCurrentIndex(startIndex);
  }, [startIndex]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <div className="gallery-modal-overlay" onClick={onClose}>
      <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="gallery-close" onClick={onClose} aria-label="Close gallery">
          ×
        </button>

        <div className="gallery-header">
          <h2>{serviceName}</h2>
          <p className="gallery-counter">
            {currentIndex + 1} / {images.length}
          </p>
        </div>

        <div className="gallery-main">
          <button 
            className="gallery-nav gallery-nav-prev" 
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div className="gallery-image-container">
            <img 
              src={images[currentIndex].src} 
              alt={images[currentIndex].alt || `${serviceName} ${currentIndex + 1}`}
              className="gallery-image"
            />
          </div>

          <button 
            className="gallery-nav gallery-nav-next" 
            onClick={goToNext}
            aria-label="Next image"
          >
            ›
          </button>
        </div>

        <div className="gallery-thumbnails">
          {images.map((image, index) => (
            <button
              key={index}
              className={`gallery-thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`View image ${index + 1}`}
            >
              <img src={image.src} alt={`Thumbnail ${index + 1}`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageGalleryModal;
