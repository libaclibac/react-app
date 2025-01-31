import React, { useEffect, useState, useContext } from 'react';
import { getDashboard } from '../utils/auth.js';
import { UserContext } from '../context/UserContext.jsx';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDashboard(user.token);
        setUserData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [user]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Email: {userData.email}</p>
    </div>
  );
};

export default Dashboard;
