
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home2 from "./Home";
import Navbar2 from "./CustonNavbar";
import FormComponent from "./RegistrationForm";
import { About } from "./About";
import Login from './Login';
import Logout from './Logout';

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn') === 'true');
  return (
    
    <Router>
      <div>
      <Navbar2 loggedIn={loggedIn}/>
      <Routes>
      <Route path="/"  element={<Login setLoggedIn={setLoggedIn} />}/>
      <Route path="/home" element={loggedIn ? <Home2 /> : <Navigate to="/login" />} />
      <Route path="/about"  element={loggedIn ? <About /> : <Navigate to="/login" />}/>
      <Route path="/register"  element={loggedIn ? <FormComponent /> : <Navigate to="/login" />}/>
      <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/logout" element={<Logout setLoggedIn={setLoggedIn} />} />
      <Route />
    </Routes>
      </div>
    </Router>
    
  );
}
export default App;
