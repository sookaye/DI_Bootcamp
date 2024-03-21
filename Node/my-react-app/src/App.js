import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './ErrorBoundary';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import ShopScreen from './ShopScreen';
import PostList from './PostList';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';


async function postData() {
  try {
    const url = "https://webhook.site/1b321e87-65b3-4ca1-97dd-4c9c59f7077c";
    const data = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Failed to fetch');
    }

    const responseData = await response.json();
    console.log("Response:", responseData);
  } catch (error) {
    console.error("Error:", error);
  }
}

function App() {
  
  return (
    <>
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

    <PostList></PostList>
    <Example1 />
      <Example2 />
      <Example3 />
      <div>
      <button onClick={postData}>Send POST Request</button>
    </div>
    </>
    
  );
}

export default App;
