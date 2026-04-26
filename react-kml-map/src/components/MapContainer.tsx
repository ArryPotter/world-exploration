import React, { useCallback, useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { MAP_CONFIG } from '../utils/config';
import { KMLLayerInfo, KMLFeature } from '../types/kml';
import './MapContainer.css';

interface MapContainerProps {
  kmlLayers: KMLLayerInfo[];
  setKmlLayers: React.Dispatch<React.SetStateAction<KMLLayerInfo[]>>;
  onFeatureClick: (feature: KMLFeature) => void;
}

const MapContainer: React.FC<MapContainerProps> = ({
  kmlLayers,
  setKmlLayers,
  onFeatureClick
}) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: MAP_CONFIG.googleMaps.apiKey,
    libraries: MAP_CONFIG.googleMaps.libraries
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [kmlLayerObjects, setKmlLayerObjects] = useState<google.maps.KmlLayer[]>([]);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  // Load KML layers using Google Maps native KmlLayer
  useEffect(() => {
    if (!map) return;

    console.log('🗺️ Loading KML layers with native Google Maps KML support...', kmlLayers);

    // Clear existing KML layers
    kmlLayerObjects.forEach(layer => {
      layer.setMap(null);
    });

    const newKmlLayers: google.maps.KmlLayer[] = [];

    kmlLayers.forEach(layerInfo => {
      if (!layerInfo.visible) {
        console.log(`⏭️ Skipping invisible layer: ${layerInfo.name}`);
        return;
      }

      try {
        console.log(`📥 Creating KML layer for: ${layerInfo.url}`);

        // Create native Google Maps KML layer
        const kmlLayer = new google.maps.KmlLayer({
          url: layerInfo.url,
          suppressInfoWindows: false,
          preserveViewport: false,
          map: map
        });

        // Add click listener for feature interaction
        kmlLayer.addListener('click', (event: google.maps.KmlMouseEvent) => {
          console.log('� KML feature clicked:', event);
          
          if (event.latLng) {
            const kmlFeature: KMLFeature = {
              position: { 
                lat: event.latLng.lat(), 
                lng: event.latLng.lng() 
              },
              properties: {
                name: event.featureData?.name || 'KML Feature',
                description: event.featureData?.description || '',
                id: `${layerInfo.id}-feature`
              }
            };
            onFeatureClick(kmlFeature);
          }
        });

        // Add status change listener
        kmlLayer.addListener('status_changed', () => {
          const status = kmlLayer.getStatus();
          console.log(`🔄 KML layer ${layerInfo.name} status:`, status);
          
          if (status === google.maps.KmlLayerStatus.OK) {
            console.log(`✅ Successfully loaded KML layer: ${layerInfo.name}`);
          } else {
            console.error(`❌ Failed to load KML layer ${layerInfo.name}. Status:`, status);
          }
        });

        newKmlLayers.push(kmlLayer);
        console.log(`✅ Created KML layer for: ${layerInfo.name}`);

      } catch (error) {
        console.error(`❌ Failed to create KML layer ${layerInfo.name}:`, error);
      }
    });

    setKmlLayerObjects(newKmlLayers);
    console.log(`🎯 Total KML layers created: ${newKmlLayers.length}`);

  }, [map, kmlLayers]);

  // Cleanup KML layers on unmount
  useEffect(() => {
    return () => {
      kmlLayerObjects.forEach(layer => {
        layer.setMap(null);
      });
    };
  }, [kmlLayerObjects]);

  if (loadError) {
    return (
      <div className="map-error">
        <h3>Error Loading Google Maps</h3>
        <p>{loadError.message}</p>
        <p>Please check your Google Maps API key in the .env file</p>
        <button onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="map-loading">
        <div className="loading-spinner"></div>
        <p>Loading Google Maps...</p>
      </div>
    );
  }

  if (!MAP_CONFIG.googleMaps.apiKey) {
    return (
      <div className="map-error">
        <h3>Google Maps API Key Required</h3>
        <p>Please add your Google Maps API key to the .env file:</p>
        <code>REACT_APP_GOOGLE_MAPS_API_KEY=your_api_key_here</code>
        <p>Get an API key from <a href="https://developers.google.com/maps/gmp-get-started" target="_blank" rel="noopener noreferrer">Google Maps Platform</a></p>
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '100%' }}
      center={MAP_CONFIG.defaultMapOptions.center}
      zoom={MAP_CONFIG.defaultMapOptions.zoom}
      mapTypeId="satellite"
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* KML layers are loaded natively by Google Maps API */}
    </GoogleMap>
  );
};

export default MapContainer;