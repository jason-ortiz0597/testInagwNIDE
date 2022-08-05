import { Router } from "express";

import { listCustomer, createCustomer, updateCustomer, deleteCustomer} from "../controllers/customerController.js";


const router = Router();

router.get("/listCustomer", listCustomer);
router.post("/createCustomer", createCustomer);
router.put("/updateCustomer/:id", updateCustomer);
router.delete("/deleteCustomer/:id", deleteCustomer);

export default router;