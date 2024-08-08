import React, { useState, useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';
import './App.css';
import { ClipLoader } from 'react-spinners';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAPIs = async () => {
      try {
        // Simulate API calls or add your actual API calls here
        // await fetch('your-api-endpoint');
        setLoading(false); // Set to false once API calls are successful
      } catch (error) {
        console.error("API error:", error);
        // Handle error (set loading to false, or show an error message)
        setLoading(false);
      }
    };

    checkAPIs();
  }, []);

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
