import multer from "multer";
import path from "path";


const multerConfig = {

    storage: multer.diskStorage({ 
        destination: path.resolve(__dirname, "..", "..", "uploads"),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);
            cb(null, name + new Date().getTime() + ext);
        }
    }),
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            "image/jpeg",
            "image/pjpeg",
            "image/png",
            "image/gif"
        ];
        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Invalid file type."));
        }
    }
}

export default multerConfig;
