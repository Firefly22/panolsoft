import mongoose from 'mongoose';
const {Schema} = mongoose;
 
// Interface for TS
export interface IImageModel extends mongoose.Document {
    filename: string; 
    originalName: string;
    nombre:String;
    cantidad : Number;
    created: Date;
  };
 
// Actual DB model
const imageSchema = new Schema({
    filename: String,
    originalName: String,
    nombre:String,
    cantidad : Number,
    created: { type: Date, default: Date.now }
});
 
export const Image = mongoose.model<IImageModel>('Image', imageSchema);