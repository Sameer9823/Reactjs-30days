import { Router } from "express";
import {
    SignIn,
    Signup,
    updateUser,
    deleteUser,
   
    getAllUsers,
    fetchUserById,
    
} from "../controllers/user.controllers.js";

const router = Router();

router.post("/signup", Signup);
router.post("/signin", SignIn);

router.put("/user/:id", updateUser);    
router.delete("/user/:id", deleteUser);


router.get("/users", getAllUsers);
router.get('/user/:id', fetchUserById); 


export default router;
