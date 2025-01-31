// src/App.jsx
import React from 'react';
import './App.css';
import NavBar from './components/Nav-Bar';
import Footer from './components/Footer';
import Products from './components/products'; // Importar el componente de productos
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar />
      <Products /> {/* Aquí se renderiza el componente de productos */}
      <Footer />
    </div>
  );
}

export default App;
