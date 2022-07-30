import Product from "../models/productModel.js";

export const listProduct = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createProduct = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const product = new Product({ name, description, price });
        await product.save();
        res.json({ message: "Product created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const productUpdate = await Product.findByIdAndUpdate(id, req.body, { new: true });
        res.json(productUpdate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id);
        if (!Product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


