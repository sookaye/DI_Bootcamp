import React, { useEffect } from 'react';

const Logout = ({ setLoggedIn }) => {
  useEffect(() => {
    localStorage.removeItem('loggedIn');
    setLoggedIn(false);
  }, [setLoggedIn]);
  return (
    <div className="container mt-5">
      <p>You have been logged out.</p>
    </div>
  );
};
export default Logout;