import { EditableFeature } from '../types/kml';

export const generateKMLContent = (features: EditableFeature[]): string => {
  const kmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
    <name>Edited KML Features</name>
    <description>KML file edited using the React KML Map application</description>`;

  const kmlFooter = `  </Document>
</kml>`;

  const placemarks = features.map(feature => {
    const { id, type, coordinates, properties } = feature;
    
    let geometryXML = '';
    
    switch (type) {
      case 'Point':
        const [lng, lat] = coordinates as [number, number];
        geometryXML = `
      <Point>
        <coordinates>${lng},${lat},0</coordinates>
      </Point>`;
        break;
        
      case 'LineString':
        const lineCoords = (coordinates as number[][])
          .map(coord => `${coord[0]},${coord[1]},0`)
          .join(' ');
        geometryXML = `
      <LineString>
        <tessellate>1</tessellate>
        <coordinates>${lineCoords}</coordinates>
      </LineString>`;
        break;
        
      case 'Polygon':
        const ringCoords = (coordinates as number[][][])[0] // First ring (exterior)
          .map(coord => `${coord[0]},${coord[1]},0`)
          .join(' ');
        geometryXML = `
      <Polygon>
        <tessellate>1</tessellate>
        <outerBoundaryIs>
          <LinearRing>
            <coordinates>${ringCoords}</coordinates>
          </LinearRing>
        </outerBoundaryIs>
      </Polygon>`;
        break;
    }

    return `
    <Placemark>
      <name>${properties.name || `Feature ${id}`}</name>
      <description>${properties.description || ''}</description>${geometryXML}
    </Placemark>`;
  });

  return kmlHeader + placemarks.join('') + kmlFooter;
};

export const saveKMLFile = async (features: EditableFeature[], fileName: string = 'KML_Samples.kml'): Promise<void> => {
  try {
    const kmlContent = generateKMLContent(features);
    
    // For development, we'll log the content and save to a downloadable file
    console.log('Generated KML content:', kmlContent);
    
    // Create a blob and download link
    const blob = new Blob([kmlContent], { type: 'application/vnd.google-earth.kml+xml' });
    const url = window.URL.createObjectURL(blob);
    
    // Create a temporary download link
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    // Clean up the URL
    window.URL.revokeObjectURL(url);
    
    // Note: In a real application, you'd send this to a server endpoint
    // that can write the file to the public/map/ directory
    console.log('KML file download initiated. In production, this would be saved to the server.');
    
  } catch (error) {
    console.error('Error saving KML file:', error);
    throw new Error('Failed to save KML file');
  }
};