import { Router } from "express"
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

const router = Router();

const generateAccessToken=(user)=>{
    return jwt.sign({id:user._id || user.id},process.env.JWT_SECRET, {expiresIn:'10s'});
}

let refreshTokens = [];

const generateRefreshToken = (user)=>{
    const token = jwt.sign({id:user.id || user._id}, process.env.JWT_REFRESH_SECRET, {expiresIn:'7d'});
    refreshTokens.push(token);
    return token;
}

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
       
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        res.cookie("refreshToken",refreshToken,{
            httpOnly:true,
            secure:false,
            sameSite: 'strict',
        })

         return res.status(200).json({
            leetcodeId: user.leetcodeId,
            planText: user.planText,
            username: user.username,
            accessToken
        });
        

    }catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
});


router.post('/refresh', (req,res)=>{
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken || !refreshTokens.includes(refreshToken))
        return res.status(403).json({message:"Refresh token invalid"});
    
    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err,user)=>{
        if(err)return res.status(403).json({message:"Invalid refresh token"});

        const newAccessToken = generateAccessToken(user);
        console.log(user)
        res.json({accessToken:newAccessToken});
    })
})

export default router;