import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Story from './pages/Story';
import Delivery from './pages/Delivery';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/histoire" element={<Story />} />
            <Route path="/livraison" element={<Delivery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
