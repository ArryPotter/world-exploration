import React, { useState, useEffect } from 'react';
import { KMLLayerInfo } from '../types/kml';
import './KMLControls.css';

interface KMLControlsProps {
  onAddLayer: (url: string, name: string) => void;
  layers: KMLLayerInfo[];
  onToggleLayer: (id: string) => void;
  onRemoveLayer: (id: string) => void;
}

const KMLControls: React.FC<KMLControlsProps> = ({
  onAddLayer,
  layers,
  onToggleLayer,
  onRemoveLayer
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Available KML options
  const kmlOptions = {
    'westcampus': {
      url: 'https://raw.githubusercontent.com/ArryPotter/public-kml-sample/refs/heads/main/Drainage%20design%20-%20test%20only.kml',
      name: 'West Campus KML'
    }
  };

  // Auto-load the selected KML file when component mounts
  useEffect(() => {
    if (!isLoaded && layers.length === 0) {
      handleLoadKML();
    }
  }, [isLoaded, layers.length]);

  const handleLoadKML = async () => {
    if (isLoaded) return;
    
    setIsLoading(true);
    setError(null);

    try {
      const selected = kmlOptions.westcampus;
      console.log(`🚀 Loading KML file: ${selected.url}`);
      
      onAddLayer(selected.url, selected.name);
      setIsLoaded(true);
      console.log(`✅ Successfully loaded KML file: ${selected.url}`);
    } catch (error) {
      console.error('Error loading KML file:', error);
      setError(`Failed to load KML file: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReloadKML = () => {
    // Remove existing layer first
    const existingLayer = layers.find(layer => layer.url === kmlOptions.westcampus.url);
    if (existingLayer) {
      onRemoveLayer(existingLayer.id);
    }
    setIsLoaded(false);
    // The useEffect will trigger a reload
  };

  return (
    <div className="kml-controls">
      <h2>KML Data</h2>
      
      {/* Load KML Section */}
      <div className="add-layer-form">
        <h3>West Campus KML File</h3>
        
        <p className="file-path">
          <strong>URL:</strong> {kmlOptions.westcampus.url}
        </p>
        
        {error && <div className="error-message">{error}</div>}
        
        <div className="kml-actions">
          {!isLoaded && (
            <button
              onClick={handleLoadKML}
              disabled={isLoading}
              className="add-button"
            >
              {isLoading ? 'Loading...' : 'Load KML File'}
            </button>
          )}
          
          {isLoaded && (
            <button
              onClick={handleReloadKML}
              disabled={isLoading}
              className="add-button reload-button"
            >
              Reload KML File
            </button>
          )}
        </div>
      </div>

      {/* Active Layers */}
      <div className="active-layers">
        <h3>Active Layers ({layers.length})</h3>
        {layers.length === 0 ? (
          <p className="no-layers">No layers added yet</p>
        ) : (
          <div className="layer-list">
            {layers.map((layer) => (
              <div key={layer.id} className="layer-item">
                <div className="layer-info">
                  <div className="layer-name">{layer.name}</div>
                  <div className="layer-url">{layer.url}</div>
                </div>
                <div className="layer-controls">
                  <button
                    onClick={() => onToggleLayer(layer.id)}
                    className={`toggle-button ${layer.visible ? 'visible' : 'hidden'}`}
                    title={layer.visible ? 'Hide layer' : 'Show layer'}
                  >
                    {layer.visible ? '👁️' : '🙈'}
                  </button>
                  <button
                    onClick={() => onRemoveLayer(layer.id)}
                    className="remove-button"
                    title="Remove layer"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default KMLControls;