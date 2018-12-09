import Post from '../model/post';

//todos los post
export function getAllPosts(req, res){
    Post.find((err, posts) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({posts});
    });
}

//crear post
export function createPost(req, res) {
    const post = new Post({
        nombre: req.body.nombre,
        text: req.body.text,
        cantidad: req.body.cantidad
    });
    post.save();
    res.json({status: 'Post created'});
};

//Listar por id
export function getPostById(req, res, next){
    const id = req.params.id;
    Post.findById(id, (err,post) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({post});
    });
}

//Actualizar por id
export function updatePost(req, res, next){
    const id = req.params.id;

    Post.findByIdAndUpdate(id, req.body, (err, post) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({post});
    });
}

//Eliminar por id
export function deletePost(req, res, next) {
    const id = req.params.id;

    Post.findByIdAndRemove(id, (err, post) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({post});
    });
}
