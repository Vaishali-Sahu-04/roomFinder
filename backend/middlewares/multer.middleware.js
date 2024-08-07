import multer from "multer";
import path from 'path';

const __dirname = path.resolve();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const destPath = path.resolve(__dirname, 'public/temp');
        cb(null, destPath)
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

export const upload = multer({storage: storage});