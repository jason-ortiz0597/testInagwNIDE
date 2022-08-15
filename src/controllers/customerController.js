import Customer from "../models/customerModel.js";


export const listCustomer = async (req, res) => {
    try {
        const customers = await Customer.find();
        if (customers.length === 0) {
            res.status(404).json({
                message: "No customers found"
            });
        } else {

            res.json(customers);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const createCustomer = async (req, res) => {
    try {
        const { ci, name, lastname, email, phone, address, city } = req.body;
        const customer = new Customer({ ci, name, lastname, email, phone, address, city });
        await customer.save();
        res.json({ message: "Customer created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateCustomer = async (req, res) => {
    try {
        const { ci, name, lastname, email, phone, address, city } = req.body;
        const customer = await Customer.findByIdAndUpdate(req.params.id, { ci, name, lastname, email, phone, address, city });
        if (!customer) {
            res.status(404).json({ message: "Customer not found" });
        } else {
            res.json({ message: "Customer updated successfully" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const deleteCustomer = async (req, res) => {
    try {
        const customer = await Customer.findByIdAndDelete(req.params.id);
        if (!customer) {
            res.status(404).json({ message: "Customer not found" });
        } else {
            res.json({ message: "Customer deleted successfully" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}
