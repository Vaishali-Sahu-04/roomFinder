import multer from "multer";
import path from 'path';

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const destPath = (null, path.resolve('./backend/public/temp'));
        cb(null, destPath)
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

export const upload = multer({storage: storage});