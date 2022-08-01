import Product from "../models/productModel.js";
import { uploadImage, deleteImage } from '../database/cloudinary.js'
import fs from 'fs-extra'

export const listProduct = async (req, res) => {
    try {
        const products = await Product.find();
        if (products.length === 0) {
            res.status(404).json({
                message: "No products found"
            });
        } else {

            res.json(products);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createProduct = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const product = new Product({ name, description, price });
        if (req.files?.image) {
            const image = await uploadImage(req.files.image.tempFilePath);
            product.image = {
                public_id: image.public_id,
                secure_url: image.secure_url
            }
            await fs.unlinkSync(req.files.image.tempFilePath);
        }
        await product.save();
        res.json({ message: "Product created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//update product with cloudinary
export const updateProduct = async (req, res) => {
    console.log('estoy en costruccion')
}

export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        if (product.image.public_id) {
            await deleteImage(product.image.public_id);
        }


        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


