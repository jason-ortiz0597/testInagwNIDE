import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
    
    ci : {
        type: Number,
        required: true,
        unique: true,
        trim: true
    },
    
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true
    },
    phone: {
        type: Number    
    },
    address: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    }
});

export default mongoose.model("Customer", customerSchema);

