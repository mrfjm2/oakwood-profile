import React, { useState } from 'react';
import './ServiceCard.css';

function ServiceCard({ service }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`service-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="service-header">
        <div className="service-title-row">
          <div className="service-icon-small">{service.icon}</div>
          <h3 className="service-title">{service.title}</h3>
        </div>
        <p className="service-description">{service.description}</p>
      </div>
      
      {isExpanded && (
        <div className="service-details">
          <ul className="service-list">
            {service.details.map((detail, index) => (
              <li key={index}>
                <span className="bullet">•</span>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      )}

      <button 
        className="expand-btn"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label={isExpanded ? 'Show less' : 'Show more'}
      >
        <span className="expand-icon">{isExpanded ? '−' : '+'}</span>
      </button>
    </div>
  );
}

export default ServiceCard;
