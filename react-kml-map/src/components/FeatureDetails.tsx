import React from 'react';
import { KMLFeature } from '../types/kml';
import './FeatureDetails.css';

interface FeatureDetailsProps {
  feature: KMLFeature | null;
}

const FeatureDetails: React.FC<FeatureDetailsProps> = ({ feature }) => {
  if (!feature) {
    return (
      <div className="feature-details">
        <h2>Feature Details</h2>
        <div className="no-feature">
          <p>Click on a feature in the map to view its details</p>
          <div className="feature-placeholder">
            <div className="placeholder-icon">📍</div>
            <p>No feature selected</p>
          </div>
        </div>
      </div>
    );
  }

  const handleCopyCoordinates = () => {
    const coordinates = `${feature.position.lat}, ${feature.position.lng}`;
    navigator.clipboard.writeText(coordinates);
    alert('Coordinates copied to clipboard!');
  };

  const handleOpenInOSM = () => {
    const url = `https://www.openstreetmap.org/?mlat=${feature.position.lat}&mlon=${feature.position.lng}&zoom=15`;
    window.open(url, '_blank');
  };

  const handleOpenInGoogleMaps = () => {
    const url = `https://www.google.com/maps?q=${feature.position.lat},${feature.position.lng}`;
    window.open(url, '_blank');
  };

  return (
    <div className="feature-details">
      <h2>Feature Details</h2>
      
      <div className="feature-content">
        {/* Feature Name */}
        {feature.properties.name && (
          <div className="detail-section">
            <h3>Name</h3>
            <p className="feature-name">{feature.properties.name}</p>
          </div>
        )}

        {/* Feature Description */}
        {feature.properties.description && (
          <div className="detail-section">
            <h3>Description</h3>
            <div 
              className="feature-description"
              dangerouslySetInnerHTML={{ __html: feature.properties.description }}
            />
          </div>
        )}

        {/* Location Information */}
        <div className="detail-section">
          <h3>Location</h3>
          <div className="location-info">
            <div className="coordinate">
              <span className="label">Latitude:</span>
              <span className="value">{feature.position.lat.toFixed(6)}</span>
            </div>
            <div className="coordinate">
              <span className="label">Longitude:</span>
              <span className="value">{feature.position.lng.toFixed(6)}</span>
            </div>
          </div>
        </div>

        {/* Author Information */}
        {feature.properties.author && (
          <div className="detail-section">
            <h3>Author</h3>
            <div className="author-info">
              {feature.properties.author.name && (
                <div className="author-field">
                  <span className="label">Name:</span>
                  <span className="value">{feature.properties.author.name}</span>
                </div>
              )}
              {feature.properties.author.email && (
                <div className="author-field">
                  <span className="label">Email:</span>
                  <a 
                    href={`mailto:${feature.properties.author.email}`}
                    className="value email"
                  >
                    {feature.properties.author.email}
                  </a>
                </div>
              )}
              {feature.properties.author.uri && (
                <div className="author-field">
                  <span className="label">Website:</span>
                  <a 
                    href={feature.properties.author.uri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="value link"
                  >
                    {feature.properties.author.uri}
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Feature ID */}
        {feature.properties.id && (
          <div className="detail-section">
            <h3>ID</h3>
            <p className="feature-id">{feature.properties.id}</p>
          </div>
        )}

        {/* Snippet */}
        {feature.properties.snippet && (
          <div className="detail-section">
            <h3>Snippet</h3>
            <p className="feature-snippet">{feature.properties.snippet}</p>
          </div>
        )}

        {/* Actions */}
        <div className="detail-section">
          <h3>Actions</h3>
          <div className="feature-actions">
            <button 
              onClick={handleCopyCoordinates}
              className="action-button"
            >
              📋 Copy Coordinates
            </button>
            <button 
              onClick={handleOpenInOSM}
              className="action-button"
            >
              🗺️ Open in OpenStreetMap
            </button>
            <button 
              onClick={handleOpenInGoogleMaps}
              className="action-button link-button"
            >
              🌍 Open in Google Maps
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetails;