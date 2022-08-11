import mongoose from "mongoose";

const ImagenSchema = new mongoose.Schema({

    link: {
        type: String,
        required: true
    }
});

export default mongoose.model("Imagen", ImagenSchema);