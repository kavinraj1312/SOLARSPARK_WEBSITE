import jwt from 'jsonwebtoken';
import { SECRET_JWT } from '../config.js';

const authenticate = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log(authHeader)
    

    if (authHeader && authHeader.startsWith('Bearer ')) {
        console.log(authHeader)
        const token = authHeader.substring(7); 
        console.log(token)
        jwt.verify(token, SECRET_JWT, (err, user) => {
            if (err) {
                return res.status(403).json({ message: 'Invalid token' });
            }
            req.user = user; 
            next(); 
        });
    } else {
        return res.status(401).json({ msg: 'Access denied' }); 
    }
};

export default authenticate;
