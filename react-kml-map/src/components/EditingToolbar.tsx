import React from 'react';
import './EditingToolbar.css';

interface EditingToolbarProps {
  editMode: boolean;
  onCreatePoint: () => void;
  onCreatePolygon: () => void;
  onFinishEdit: () => void;
  onCancelEdit: () => void;
  onSave: () => void;
  hasChanges: boolean;
}

const EditingToolbar: React.FC<EditingToolbarProps> = ({
  editMode,
  onCreatePoint,
  onCreatePolygon,
  onFinishEdit,
  onCancelEdit,
  onSave,
  hasChanges
}) => {
  if (!editMode) {
    return null;
  }

  return (
    <div className="editing-toolbar">
      <div className="toolbar-section">
        <h4>Create Features</h4>
        <div className="toolbar-buttons">
          <button
            className="toolbar-button create-point"
            onClick={onCreatePoint}
            title="Click on map to add a point"
          >
            📍 Add Point
          </button>
          <button
            className="toolbar-button create-polygon"
            onClick={onCreatePolygon}
            title="Click multiple points to create polygon"
          >
            🟦 Draw Polygon
          </button>
        </div>
      </div>
      
      <div className="toolbar-section">
        <h4>Actions</h4>
        <div className="toolbar-buttons">
          <button
            className="toolbar-button save-button"
            onClick={onSave}
            disabled={!hasChanges}
            title="Save changes to KML file"
          >
            💾 Save Changes
          </button>
          <button
            className="toolbar-button finish-button"
            onClick={onFinishEdit}
            title="Finish editing and return to view mode"
          >
            ✅ Finish Editing
          </button>
          <button
            className="toolbar-button cancel-button"
            onClick={onCancelEdit}
            title="Cancel editing without saving"
          >
            ❌ Cancel
          </button>
        </div>
      </div>
      
      <div className="editing-instructions">
        <h4>Instructions</h4>
        <ul>
          <li>🖱️ Click map to add new points</li>
          <li>🔄 Drag existing markers to move them</li>
          <li>🗑️ Click marker popup to delete</li>
          <li>💾 Save changes before finishing</li>
        </ul>
      </div>
    </div>
  );
};

export default EditingToolbar;