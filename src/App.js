import React from 'react';
import './styles/App.scss';
import Dashboard from './components/Dashboard';
import Gallery from './components/Gallery';
import PhotoForm from './components/PhotoForm';
import AlbumManager from './components/AlbumManager';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Photo Catalog</h1>
          <nav>
            <Link to="/">Dashboard</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/add-photo">Add Photo</Link>
            <Link to="/manage-albums">Manage Albums</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/add-photo" element={<PhotoForm />} />
            <Route path="/manage-albums" element={<AlbumManager />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;