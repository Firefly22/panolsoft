import * as express from 'express';

import {
     getAllPosts,
     createPost,
     getPostById,
     updatePost,
     deletePost
} from '../controller/post.controller';

export default (app) => {

    const apiRoutes = express.Router();
    const postRoutes = express.Router();

    /*
     * POST ROUTES
     */

     apiRoutes.use('/posts', postRoutes);

     postRoutes.get('/',getAllPosts);

     postRoutes.post('/',createPost);

     postRoutes.get('/:id',getPostById);

     postRoutes.put('/:id',updatePost);

     postRoutes.delete('/:id',deletePost);

     app.use('/api', apiRoutes);

};
