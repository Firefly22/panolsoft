import * as express from 'express';
import{ 
    createImage,
    getAllImages,
    getImageById,
   // deleteById
} from '../controller/image.controller';
import { upload } from '../server';

export default (app) => {

    const apiRoutes = express.Router();
    const postRoutes = express.Router();

    /*
     * POST ROUTES
     */


     apiRoutes.use('/images', postRoutes);

     postRoutes.post('/',upload.single('image'),createImage);

     postRoutes.get('/',getAllImages);

     postRoutes.get('/:id',getImageById);

    // postRoutes.get('/:id',deleteById);

     app.use('/api', apiRoutes);

};