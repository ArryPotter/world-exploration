// Utility function to check if a file exists and provide debugging information
export const checkFileExists = async (url: string): Promise<{exists: boolean, status?: number, error?: string}> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return {
      exists: response.ok,
      status: response.status
    };
  } catch (error) {
    return {
      exists: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

// Function to list available KML files in the public/map directory
export const getAvailableKMLFiles = async (): Promise<string[]> => {
  const commonFiles = [
    '/map/KML_Samples.kml',
    '/map/malang.kml',
    '/map/sample.kml',
    '/map/test.kml'
  ];
  
  const availableFiles: string[] = [];
  
  for (const file of commonFiles) {
    const result = await checkFileExists(file);
    if (result.exists) {
      availableFiles.push(file);
    }
  }
  
  return availableFiles;
};

// Debug function to help troubleshoot KML loading issues
export const debugKMLFile = async (url: string) => {
  console.log(`🔍 Debugging KML file: ${url}`);
  
  const fileCheck = await checkFileExists(url);
  console.log(`📁 File exists: ${fileCheck.exists}`);
  
  if (!fileCheck.exists) {
    console.log(`❌ Status: ${fileCheck.status || 'N/A'}`);
    console.log(`💬 Error: ${fileCheck.error || 'File not found'}`);
    
    // Try to find available files
    console.log(`🔎 Checking for available KML files...`);
    const availableFiles = await getAvailableKMLFiles();
    console.log(`✅ Available files:`, availableFiles);
    
    return false;
  }
  
  try {
    const response = await fetch(url);
    const text = await response.text();
    console.log(`📄 File size: ${text.length} characters`);
    console.log(`🔍 Content preview:`, text.substring(0, 200) + '...');
    
    if (text.includes('<kml')) {
      console.log(`✅ Valid KML file detected`);
    } else {
      console.log(`⚠️ File may not be valid KML format`);
    }
    
    return true;
  } catch (error) {
    console.log(`❌ Error reading file:`, error);
    return false;
  }
};