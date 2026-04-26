import React, { useState } from 'react';
import './App.css';
import MapContainer from './components/MapContainer';
import KMLControls from './components/KMLControls';
import { KMLLayerInfo, KMLFeature } from './types/kml';

function App() {
  const [kmlLayers, setKmlLayers] = useState<KMLLayerInfo[]>([]);
  const [selectedFeature, setSelectedFeature] = useState<KMLFeature | null>(null);

  const handleAddKMLLayer = (url: string, name: string) => {
    const newLayer: KMLLayerInfo = {
      id: Date.now().toString(),
      url,
      name,
      visible: true,
      layer: null
    };
    setKmlLayers(prev => [...prev, newLayer]);
  };

  const handleToggleLayer = (id: string) => {
    setKmlLayers(prev =>
      prev.map(layer =>
        layer.id === id ? { ...layer, visible: !layer.visible } : layer
      )
    );
  };

  const handleRemoveLayer = (id: string) => {
    setKmlLayers(prev => prev.filter(layer => layer.id !== id));
  };

  const handleFeatureClick = (feature: KMLFeature) => {
    setSelectedFeature(feature);
    console.log('Feature clicked:', feature);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React KML Map PoC</h1>
        <p>Simple KML file viewer</p>
      </header>
      
      <div className="App-content">
        <div className="sidebar left">
          <KMLControls
            onAddLayer={handleAddKMLLayer}
            layers={kmlLayers}
            onToggleLayer={handleToggleLayer}
            onRemoveLayer={handleRemoveLayer}
          />
        </div>
        
        <div className="map-container">
          <MapContainer
            kmlLayers={kmlLayers}
            setKmlLayers={setKmlLayers}
            onFeatureClick={handleFeatureClick}
          />
        </div>
      </div>
      
      {selectedFeature && (
        <div className="feature-info">
          <h3>Selected Feature</h3>
          <p><strong>Name:</strong> {selectedFeature.properties.name}</p>
          <p><strong>Description:</strong> {selectedFeature.properties.description}</p>
          <p><strong>Position:</strong> {selectedFeature.position.lat.toFixed(4)}, {selectedFeature.position.lng.toFixed(4)}</p>
        </div>
      )}
    </div>
  );
}

export default App;