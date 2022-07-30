import mongoose from "mongoose";


const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        default: 0
    },
})

export default mongoose.model("Product", productSchema);