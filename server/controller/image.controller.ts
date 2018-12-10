import {Image, IImageModel} from '../model/image';
import {UPLOAD_PATH} from '../server';
import fs from 'fs';
import path from 'path';
import del from 'del';


// Subir una imagen
export function createImage(req, res){
    const newImage = new Image();
    newImage.filename = req.file.filename;
    newImage.originalName = req.file.originalname;
    newImage.nombre = req.body.nombre;
    newImage.cantidad= req.body.cantidad;
    newImage.save(err => {
        if (err) {
            return res.sendStatus(400);
        }
        res.status(201).send({ newImage });
        console.log(newImage);
    });
};

// Listar imagenes
export function getAllImages(req, res){
    Image.find({}, '-__v').lean().exec((err, images) => {
        if (err) {
            res.sendStatus(400);
        }
 
        // Setear manualmente la URL correcta de cada imagen
        for (let i = 0; i < images.length; i++) {
            var img = images[i];
            img.url = req.protocol + '://' + req.get('host') + '/images/' + img._id;
        }
        res.json(images);
    })
};

// Listar imagen por ID
export function getImageById(req, res){
    const imgId = req.params.id;
 
    Image.findById(imgId, (err, image: IImageModel) => {
        if (err) {
            res.sendStatus(400);
        }
        //retransmitir la imagen cargando el archivo
        res.setHeader('Content-Type', 'image/*');
        fs.createReadStream(path.join(UPLOAD_PATH, image.filename)).pipe(res);
    })
};

// Eliminar una imagen por id
/*export function deleteById(req, res){
    let imgId = req.params.id;
    Image.findByIdAndRemove(imgId, (err, image : IImageModel) => {
        if (err && image) {
            res.sendStatus(400);
        }
        
        del([path.join(UPLOAD_PATH, image.filename)]).then(deleted => {
            res.sendStatus(200);
        })
    })   
};*/
