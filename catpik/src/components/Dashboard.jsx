import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Dashboard() {
  const navigate = useNavigate();


  const handleLogout  =async () => {

    try {
      const response = await axios.get('http://localhost:3000/logout');
      console.log('Response:', response);
      navigate('/login',{replace:true})

    } catch (error) {
      console.error('Error:', error);
    }
    


  };

  return (
    <>
    <div>Dashboard</div>
    <button onClick={handleLogout}>logout</button>
    </>
  )
}

export default Dashboard