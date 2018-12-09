import mongoose from 'mongoose';
const {Schema} = mongoose;
 
const PostSchema = new Schema({
    nombre: {type:String, required: true},
    text: { type: String, required: true},
    cantidad: {type: Number, required: true }
});

export default module.exports = mongoose.model('Post', PostSchema);