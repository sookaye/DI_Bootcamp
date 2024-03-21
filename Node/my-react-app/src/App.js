import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './ErrorBoundary';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import ShopScreen from './ShopScreen';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">Navbar</NavLink>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">Profile</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/shop">Shop</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<ErrorBoundary><HomeScreen /></ErrorBoundary>} />
        <Route path="/profile" element={<ErrorBoundary><ProfileScreen /></ErrorBoundary>} />
        <Route path="/shop" element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
      </Routes>
    </Router>
  );
}

export default App;
