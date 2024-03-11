import React from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import Stars from './Stars';
import './index.css';

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Canvas camera={{ position: [0, 0, 2] }}>
      <Stars />
    </Canvas>
  </React.StrictMode>
);
