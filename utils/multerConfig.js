import multer from 'multer';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './src/uploads/');
    } ,
    filename: (req, file, cb) => {
        cb(null, Date.now()+file.originalname)
    }
});

export const upload = multer({ storage: storage }).single('link');