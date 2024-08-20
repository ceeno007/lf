import React, { useState, useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';
import './App.css';
import { ClipLoader } from 'react-spinners';
import { API_BASE_CMS_URL } from './service/apiEndpoints.js';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAPIs = async () => {
      while (loading) {
        try {
          // Ping Render to wake it up
          const response = await fetch(
            API_BASE_CMS_URL
          );
          if (response.ok) {
            setLoading(false); // Set to false once the API call is successful
            break;
          } else {
            console.error("Failed to ping the server, retrying...");
          }
        } catch (error) {
          console.error("API error, retrying...", error);
        }

        // Wait before retrying
        await new Promise(resolve => setTimeout(resolve, 3000)); // Retry every 3 seconds
      }
    };

    checkAPIs();
  }, [loading]);

  if (loading) {
    return (
      <div className="loading-container">
        <ClipLoader color={"#123abc"} loading={loading} size={150} />
      </div>
    );
  }

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
