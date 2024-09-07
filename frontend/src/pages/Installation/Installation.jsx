import React, { useContext, useEffect, useState, useMemo, useCallback } from 'react';
import './Installation.css';
import axios from 'axios';
import { Authcontext } from '../../components/Authcontext/Authcontext';

const Installation = () => {
    const {url}=useContext(Authcontext)
    const [images, setImages] = useState([]);
    const [status, setStatus] = useState({ loading: true, error: null });
    const { token } = useContext(Authcontext);

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

    const imageList = useMemo(() => (
        images.map((image) => (
            <li key={image._id} className="install-item">
                <div className="image-container">
                    <img
                        className='install-image'
                        src={image.data}
                        alt={image.place}
                    />
                </div>
                <div className="image-info">
                    <h3 className="image-place">{image.place}</h3>
                    <p className="image-description">{image.description || 'No description available'}</p>
                </div>
            </li>
        ))
    ), [images]);

    return (
        <div className='install'>
            {/* Header Section */}
            <header className='install-header'>
                <h1>Installation Gallery</h1>
                <p>Explore our solar installations and see how we're advancing sustainable energy.</p>
            </header>

            {/* Image Gallery Section */}
            <section className='gallery-section'>
                {status.loading ? (
                    <div className='spinner'></div> /* Add a CSS spinner for loading */
                ) : status.error ? (
                    <p className='error'>Not found</p>
                ) : (
                    <ul className='install-list'>
                        {imageList}
                    </ul>
                )}
            </section>
        </div>
    );
};

export default Installation;
