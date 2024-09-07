import React, { useContext, useEffect, useState, useMemo, useCallback } from 'react';
import './Adminsite.css';
import axios from 'axios';
import { Authcontext } from '../../components/Authcontext/Authcontext';
import { FaTrash } from 'react-icons/fa'
import { Navigate, useNavigate } from 'react-router-dom';

const Adminsite = () => {

    const {url}=useContext(Authcontext)
    const [images, setImages] = useState([]);
    const [status, setStatus] = useState({ loading: true, error: null });
    const { token } = useContext(Authcontext);
    const navigate=useNavigate()
    const fetchImages = useCallback(async () => {
        try {
            const response = await axios.get(`${url}/solar/images`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (response) {
                const { imageList } = response.data;
                setImages(imageList);
                setStatus({ loading: false, error: null });
            }
        } catch (error) {
            setStatus({ loading: false, error: "An error occurred while fetching images" });
            console.error("Error fetching images:", error);
        }
    }, [token]);

    useEffect(() => {
        if (token) {
            fetchImages();
        }
    }, [token, fetchImages]);

    const deleteImage = useCallback(async (id) => {
        try {
            const response = await axios.delete(`${url}/solar/image/${id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (response) {
                // Filter out the deleted image from the state
                const newImages = images.filter(image => image._id !== id);
                setImages(newImages);
            }
        } catch (error) {
            console.error("Error deleting image:", error);
        }
    }, [images, token]);


   

    const handleDelete = (id) => {
        deleteImage(id); // Call deleteImage with the correct id
    };

    const imageList = useMemo(() => (
        images.map((image) => (
            <li key={image._id}>
                <img
                    className='install-image'
                    src={image.data}
                    alt={image.place}
                />
                <h1>{image.place}</h1>
                <p>{image.description || 'No description available'}</p>
                <button onClick={() => handleDelete(image._id)}><FaTrash /></button>
            </li>
        ))
    ), [images]);

    return (
        <div className='install'>
            {status.loading ? (
                <h2 className='load'>Loading...</h2>
            ) : status.error ? (
                <h2 className='error'>Error...</h2>
            ) : (
                <ul className='install-list'>
                    {imageList}
                </ul>
            )}
        </div>
    );
};

export default Adminsite;
