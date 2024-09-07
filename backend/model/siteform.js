import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema({
    place: {
        type: String,
        required: true,
    },
    description:{
        type:String,
        required:true,
        
    },
    image: {
        data:Buffer,
        contentType:String,
        
        
    }
});

const Image = mongoose.model('Image', ImageSchema);
export default Image;
