import { Router } from "express"
import User from "../models/User.js";
import bcrypt from "bcrypt";
const router = Router();

router.post("/register", async(req, res) => {
    
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt);

        const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
    });

    const user = await newUser.save();
    return res.status(201).json({ message: "User registered successfully"});
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
        
    }
});

router.post("/login", async(req, res) => {
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email:email});
        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword) {
            return res.status(400).json({ message: "Invalid password" });
        } // Exclude password and email from response
        return res.status(200).json({
            _id: user._id,
            leetcodeId: user.leetcodeId,
            planText: user.planText,
            username: user.username,

        });
    }catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
});

export default router;