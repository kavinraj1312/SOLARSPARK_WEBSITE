
import express from 'express';

import { upload } from '../middleware/upload.js';

import { register,login,uploadImage,getAllImages, deleteImage ,updateImage} from '../controllers/controller.js';
import authenticate from '../middleware/authenticate.js';



const router = express.Router();


// Signup Route
router.post('/signup', register);

// Login Route
router.post('/login',login);

// Image Upload Route
router.post('/images',authenticate, upload.single('image'),uploadImage);

router.get('/images',getAllImages)



router.put('./images',authenticate,upload.single('image'),updateImage);

router.delete('/image/:id',authenticate,deleteImage)

export default router;
