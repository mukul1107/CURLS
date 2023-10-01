import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Editor from './pages/editorPage';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';

function App() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect if the device supports touch events
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  return (
    <>
      <div>
        <Toaster position="top-center" toastOptions={{ success: { theme: { primary: '#004aad' } } }} />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor/:roomId" element={<Editor />} />
        </Routes>
      </BrowserRouter>
      {isTouchDevice ? (
        <div className="touch-cursor">
          <p>Touch Supported Cursor</p>
        </div>
      ) : null}
    </>
  );
}

export default App;
