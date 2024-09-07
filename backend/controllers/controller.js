import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import path from 'path';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import { Signup } from '../model/signup.js';
import { SECRET_KEY, SECRET_JWT } from '../config.js';
import { upload } from '../middleware/upload.js';
import Image from '../model/siteform.js';

// Get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// User Registration
export const register = async (req, res) => {
    try {
        const { name, password, secretkey } = req.body;

        // Check for missing fields
        if (!name || !password || !secretkey) {
            return res.status(400).json({ msg: "Please send all the required data" });
        }

        // Validate secret key
        if (secretkey !== SECRET_KEY) {
            return res.status(400).json({ msg: "Invalid secret key" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Save user details
        const signupDetails = { name, password: hashedPassword };
        const data = await Signup.create(signupDetails);
        if (data) {
            return res.status(200).json({ msg: "Signup successful" });
        }
        return res.status(400).json({ msg: "Signup failed" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
};

// User Login
export const login = async (req, res) => {
    try {
        const { name, password } = req.body;

        // Check for missing fields
        if (!name || !password) {
            return res.status(400).json({ msg: "Provide all the credentials" });
        }

        // Find the user
        const user = await Signup.findOne({ name });
        if (!user) {
            return res.status(404).json({ msg: `No user found with name ${name}` });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = jwt.sign({ name }, SECRET_JWT, { expiresIn: '1h' });
            return res.status(200).json({ token});
        } else {
            return res.status(400).json({ msg: "Invalid credentials" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: error.message });
    }
};

// Upload Image
export const uploadImage = async (req, res) => {
    try {
        const { place, description } = req.body;

        // Check if a file is uploaded
        if (!req.file) {
            return res.status(400).send("No file uploaded");
        }

        // Read the file and save to database
        fs.readFile(req.file.path, async (err, data) => {
            if (err) {
                return res.status(400).send("Error reading file");
            }
            

            const newImage = new Image({
                place,
                description,
                image: {
                    data,
                    contentType: req.file.mimetype
                },
               
            });

            try {
                const result = await newImage.save();
                if (result) {
                    return res.status(200).json({ msg: "Uploaded successfully" });
                }
                return res.status(400).json({ msg: "Upload failed" });
            } catch (saveError) {
                console.error("Error uploading image:", saveError);
                return res.status(500).json({ msg: "Error uploading image" });
            }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Image upload failed" });
    }
};

// Get All Images
export const getAllImages = async (req, res) => {
    try {
        const images = await Image.find({});
        if (!images.length) {
            return res.status(404).json({ msg: "No images found" });
        }

        const imageList = images.map((image) => ({
            _id: image._id,
            place: image.place,
            description:image.description,
            data: `data:${image.image.contentType};base64,${image.image.data.toString('base64')}`, // Convert Buffer to Base64
        }));
        return res.status(200).json({ imageList });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Failed to fetch images" });
    }
};


// Delete Image
export const deleteImage = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if ID is provided
        if (!id) {
            return res.status(400).json({ msg: "No ID provided" });
        }

        // Find and delete the image
        const deletedImage = await Image.findByIdAndDelete(id);
        if (!deletedImage) {
            return res.status(404).json({ msg: "Image not found" });
        }

        return res.status(200).json({ msg: "Image deleted successfully", image: deletedImage });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error deleting image" });
    }
};


export const updateImage=(req,res)=>{
    try {
        const { place, description } = req.body;

        // Check if a file is uploaded
        if (!req.file) {
            return res.status(400).send("No file uploaded");
        }

        // Read the file and save to database
        fs.readFile(req.file.path, async (err, data) => {
            if (err) {
                return res.status(400).send("Error reading file");
            }
            
            const newImage = new Image({
                place,
                description,
                image: {
                    data,
                    contentType: req.file.mimetype
                },
               
            });

            try {
                const result = await newImage.save();
                if (result) {
                    return res.status(200).json({ msg: "Updated successfully" });
                }
                return res.status(400).json({ msg: "Update failed" });
            } catch (saveError) {
                console.error("Error updating image:", saveError);
                return res.status(500).json({ msg: "Error updating image" });
            }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Image update failed" });
    }
};