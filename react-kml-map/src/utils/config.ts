// Configuration for Google Maps
export const MAP_CONFIG = {
  // Google Maps API configuration
  googleMaps: {
    apiKey: 'AIzaSyD7G5BqcLnbZMWHYZM8gyNxQHtSBcl84gU',
    libraries: ['geometry', 'drawing'] as ('geometry' | 'drawing')[],
  },
  
  // Default map options for Google Maps
  defaultMapOptions: {
    center: { lat: -7.977, lng: 112.633 }, // Center of Malang, Indonesia
    zoom: 16, // High zoom to see small polygons
    mapTypeId: 'roadmap',
    gestureHandling: 'greedy',
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    rotateControl: true,
    fullscreenControl: true,
  },
  
  // Map style options
  mapStyles: {
    default: [],
    satellite: [{ featureType: 'all', stylers: [{ saturation: -80 }] }],
    terrain: [{ featureType: 'poi', stylers: [{ visibility: 'off' }] }],
  },
  
  // Sample KML URLs for testing (publicly accessible)
  sampleKMLUrls: [
    {
      name: 'Sample Placemark KML',
      url: 'https://raw.githubusercontent.com/googlemaps/js-samples/main/dist/samples/layer-kml/sample.kml'
    },
    {
      name: 'US States KML',
      url: 'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson'
    }
  ]
};

// Utility function to validate KML URL (now supports relative paths)
export const isValidKMLUrl = (url: string): boolean => {
  // Allow relative paths starting with /
  if (url.startsWith('/')) {
    const validExtensions = ['.kml', '.kmz', '.xml', '.geojson'];
    return validExtensions.some(ext => url.toLowerCase().endsWith(ext));
  }
  
  try {
    const urlObj = new URL(url);
    const validExtensions = ['.kml', '.kmz', '.xml', '.geojson'];
    const hasValidExtension = validExtensions.some(ext => 
      urlObj.pathname.toLowerCase().endsWith(ext)
    );
    
    return (urlObj.protocol === 'http:' || urlObj.protocol === 'https:') && 
           (hasValidExtension || url.includes('georss') || url.includes('kml') || url.includes('geojson'));
  } catch {
    return false;
  }
};