import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import bodyParser from 'body-parser';
import imgrouter from './routes/img.routes';
import router from './routes/routes';

// init express
export const app = express();
//Definir configuraciones
export let PORT = 3000;

app.use(bodyParser.json());

app.listen(PORT, ()=>{
    console.log('Server on port 3000');
});

// Multer Settings for file upload
export const UPLOAD_PATH = 'uploads/';

const storage = multer.diskStorage({
    destination: (req, file , cb) => {
        cb(null, UPLOAD_PATH)
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now())
    }
})
export const upload = multer({ storage });

//Rutas
router(app);
imgrouter(app);

// Definir database
const uri = 'mongodb://localhost/material';
mongoose.connect(uri).then(db => console.log('db is connected')).catch(err => console.error(err));
 
// Iniciar app
app.listen(app.get('port'), function () {
    console.log('listening on port: ' + PORT);
});