import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import { Authcontext } from '../../components/Authcontext/Authcontext';

const Login = () => {
  const {url}=useContext(Authcontext)
  const { setToken } = useContext(Authcontext);
  const [data, setData] = useState({
    name: '',
    password: '',
  });
  const [error, setError] = useState(''); // State for error message

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: data.name,
      password: data.password,
    };

    try {
      const response = await axios.post(`${url}/solar/login`, formData);

      if (response && response.data) {
        const { token } = response.data;
        setToken(token);
        localStorage.setItem('token', token);
        setData({ name: '', password: '' });
        navigate('/admin');
      } else {
        setError('Token not found in response'); // Set error message
      }
    } catch (error) {
      const errorMsg = error.response?.data?.msg || error.message;
      setError(errorMsg); // Set error message
    }
  };

  // Show an alert if there is an error message
  useEffect(() => {
    if (error) {
      alert(error);
      setError(''); // Clear the error message after showing the alert
    }
  }, [error]);

  return (
    <div className='login'>
      <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          value={data.name}
          placeholder='Enter your name'
          onChange={handleChange}
          required
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          value={data.password}
          placeholder='Enter your password'
          onChange={handleChange}
          required
        />
        <button type='submit'>Login</button>
        <Link to="/signup" className='admin-register'>Admin register</Link>
      </form>
    </div>
  );
};

export default Login;
