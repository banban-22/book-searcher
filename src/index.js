import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BookProvider } from './Book/context/BookContext';
import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BookProvider>
      <Router>
        <App />
      </Router>
    </BookProvider>
  </React.StrictMode>
);
