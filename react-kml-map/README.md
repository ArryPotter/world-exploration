# React KML Map Explorer with Editing

A React application for visualizing and editing KML data on interactive maps using OpenStreetMap. No API keys required!

## Features

### 🗺️ Map Visualization
- **OpenStreetMap Integration**: Free map tiles without API restrictions
- **KML File Support**: Load and display KML files with points, lines, and polygons
- **Interactive Features**: Click on map features to view details
- **Responsive Design**: Works on desktop and mobile devices

### ✏️ Editing Capabilities (NEW!)
- **Edit Mode**: Toggle between view and edit modes
- **Drag & Drop Points**: Move existing markers by dragging them
- **Add New Points**: Click anywhere on the map to add new points
- **Delete Features**: Remove features using popup controls
- **Save Changes**: Export edited KML data as downloadable files
- **Change Tracking**: Visual indicators for unsaved changes

### 🔧 Technical Features
- **TypeScript Support**: Full type safety and better development experience
- **Leaflet Integration**: Powerful mapping library with extensive features
- **Component Architecture**: Modular, reusable React components
- **Local File Support**: Load KML files from the public directory

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-kml-map
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Usage Guide

### Loading KML Data
1. The application automatically loads the sample KML file (`/public/map/KML_Samples.kml`)
2. You can reload the data using the "Reload KML File" button
3. The map will display all features from the KML file

### Viewing Features
- Click on any map feature (point, line, or polygon) to view its details
- Feature information appears in the right sidebar
- Features include names, descriptions, and coordinates

### Editing Features

#### Entering Edit Mode
1. Click the "✏️ Enter Edit Mode" button in the left sidebar
2. The map switches to edit mode with an orange indicator
3. The editing toolbar appears with available tools

#### Editing Operations
- **Move Points**: Drag any marker to a new location
- **Add Points**: Click anywhere on the map to create new points
- **Delete Features**: Click on a marker popup and select "Delete"
- **View Changes**: The sidebar shows feature count and change indicators

#### Saving Changes
1. Use the "💾 Save Changes" button in the editing toolbar
2. A KML file will be downloaded with your modifications
3. In a production environment, this would update the server file

#### Exiting Edit Mode
- **Finish Editing**: Saves changes and exits edit mode
- **Cancel**: Exits without saving (confirms if there are unsaved changes)

## File Structure

```
src/
├── components/
│   ├── MapContainer.tsx       # Main map component with Leaflet integration
│   ├── KMLControls.tsx        # Control panel for loading and editing
│   ├── EditingToolbar.tsx     # Toolbar for editing operations
│   ├── FeatureDetails.tsx     # Feature information display
│   └── *.css                  # Component-specific styles
├── types/
│   └── kml.ts                 # TypeScript type definitions
├── utils/
│   ├── config.ts              # Map configuration and settings
│   └── kmlWriter.ts           # KML file generation utilities
└── App.tsx                    # Main application component
```

## Sample KML Data

The application includes sample KML data with:
- **Major US Cities**: New York, Los Angeles, Chicago
- **Route 66 Segment**: Historic highway section
- **Central Park**: Polygon representation

Location: `/public/map/KML_Samples.kml`

## Technology Stack

- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development
- **Leaflet**: Open-source mapping library
- **React-Leaflet**: React components for Leaflet
- **OpenStreetMap**: Free map tile service
- **CSS3**: Modern styling with animations

## Development

### Available Scripts
- `npm start`: Development server
- `npm run build`: Production build
- `npm test`: Run tests
- `npm run eject`: Eject from Create React App (irreversible)

### Adding New Features
1. **New Map Layers**: Add configuration in `utils/config.ts`
2. **Custom Markers**: Modify the `pointToLayer` function in `MapContainer.tsx`
3. **Additional File Formats**: Extend the parser in `MapContainer.tsx`
4. **Styling Changes**: Update component CSS files

## Troubleshooting

### Common Issues

1. **KML File Not Loading**
   - Ensure the file is in `/public/map/` directory
   - Check browser console for error messages
   - Verify KML file format is valid

2. **Map Not Displaying**
   - Check internet connection (OpenStreetMap tiles)
   - Clear browser cache
   - Verify Leaflet CSS is loading

3. **Editing Not Working**
   - Confirm you're in edit mode (orange indicator visible)
   - Check browser console for JavaScript errors
   - Try refreshing the page

### Browser Compatibility
- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## Future Enhancements

- **Polygon Drawing Tool**: Create new polygons by clicking multiple points
- **Line String Editor**: Draw and edit route/path features
- **Server Integration**: Direct save to server instead of downloads
- **Multi-file Support**: Load multiple KML files simultaneously
- **Export Formats**: Support for GeoJSON and other formats
- **Attribute Editing**: Modify feature names and descriptions
- **Undo/Redo**: Edit history management

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- **OpenStreetMap**: Free map data and tiles
- **Leaflet**: Excellent mapping library
- **React Community**: Comprehensive ecosystem
- **Contributors**: Everyone who helps improve this project