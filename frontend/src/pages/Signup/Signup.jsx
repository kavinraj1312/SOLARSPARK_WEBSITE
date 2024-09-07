import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Signup.css'

const Signup = () => {
  const {url}=useContext(Authcontext)
  const [data, setData] = useState({
    name: '',
    password: '',
    secretkey: '',
  });

  const navigate = useNavigate(); // Use the hook to get the navigate function

  const handleChange = (e) => {

    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: data.name,
      password: data.password,
      secretkey: data.secretkey,
    };

    axios
      .post(`${url}/solar/signup`, formData)
      .then((res) => {
        setData({ name: '', password: '',secretkey:''});
        navigate('/admin'); // Use the navigate function to redirect
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  };

  return (
    <div className='signup'>
      <form className='signup-form' onSubmit={handleSubmit}>
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
        <label htmlFor='secretkey'>SecretKey</label>
        <input
          type='text'
          name='secretkey'
          value={data.secretkey}
          placeholder='Enter the secretkey'
          onChange={handleChange}
          required
        />
        <button type='submit'>Sign Up</button>
        <Link to='/login'>Have an Account</Link>
      </form>
    </div>
  );
};

export default Signup;
