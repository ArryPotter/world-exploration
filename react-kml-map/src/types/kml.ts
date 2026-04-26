export interface KMLLayerInfo {
  id: string;
  url: string;
  name: string;
  visible: boolean;
  layer: any | null; // Can be Google Maps layer or Leaflet layer
  editable?: boolean;
}

export interface KMLFeature {
  position: {
    lat: number;
    lng: number;
  };
  properties: {
    name?: string;
    description?: string;
    author?: {
      email?: string;
      name?: string;
      uri?: string;
    };
    id?: string;
    snippet?: string;
  };
}

export interface KMLLayerOptions {
  style?: {
    color?: string;
    weight?: number;
    opacity?: number;
    fillColor?: string;
    fillOpacity?: number;
  };
}

export interface EditableFeature {
  id: string;
  type: 'Point' | 'LineString' | 'Polygon';
  coordinates: number[] | number[][] | number[][][];
  properties: {
    name: string;
    description: string;
  };
}