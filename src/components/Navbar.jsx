import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext.jsx';

const Navbar = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <nav>
      <ul>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
        {user && <li><button onClick={logout}>Logout</button></li>}
      </ul>
    </nav>
  );
};

export default Navbar;
