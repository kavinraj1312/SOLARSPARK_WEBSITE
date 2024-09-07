import React, { useContext, useState } from 'react';
import axios from 'axios';
import './AdminHome.css';
import { Authcontext } from '../../components/Authcontext/Authcontext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AdminHome = () => {

    const {url}=useContext(Authcontext)
    const navigate=useNavigate()
    const {token}=useContext(Authcontext)
    console.log(token)
    const [data, setData] = useState({
        place: '',
        image: null,
        description:'',
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
    
        if (name === 'image') {
            setData({ ...data, image: files[0] });
        } 
        
        else {
            setData({ ...data, [name]: value });
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data.description)

        const formData = new FormData(); // Create a FormData object
        formData.append('place', data.place);
        formData.append('image', data.image);
        formData.append('description',data.description)

        try {
            const response = await axios.post(`${url}/solar/images`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization':`Bearer ${token}`,
                }
            });

            if (response) {

                navigate('/adminsite')
                
                alert("successfully uploaded")
                console.log(response);
            }
        } catch (error) {
            alert("unsuccessful upload")
            console.log(error);
        }
    };

    return (
        <div className='upload'>
            <form className='admin-form' onSubmit={handleSubmit}>
                <label htmlFor='place'>Place</label>
                <input
                    type='text'
                    name='place'
                    value={data.place}
                    placeholder='Enter the site name'
                    onChange={handleChange}
                    required
                />
                <label htmlFor='description'>Description</label>
                <input
                    type='text'
                    name='description'
                    placeholder='Provide description'
                    onChange={handleChange}
                    required
                    
                />
                <label htmlFor='image'>Image</label>
                <input
                    type='file'
                    name='image'
                    onChange={handleChange}
                    accept="image/*"
                    required
                />
                <button type='submit'>Upload</button>
                <Link to='/adminsite'>Image gallery</Link>
            </form>
        </div>
    );
};

export default AdminHome;
