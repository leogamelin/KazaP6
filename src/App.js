// import logo from './logo.svg';
import './App.css';

// Importation de React & Router
import React from 'react'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// Importation des Pages
import Home from './pages/Home'
import Logement from './pages/Logement'
import Error from './pages/Error'
import About from './pages/About'


// fonction App qui définit la route
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} /> Cette route est ajoutée
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App

