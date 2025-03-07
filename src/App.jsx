import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CubeVolumeCalculator from './pages/volumen';

function App() {
  return (
    
    <Router>
      <Routes>
      <Route path="/" element={<CubeVolumeCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;
