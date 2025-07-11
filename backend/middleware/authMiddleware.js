import jwt from 'jsonwebtoken';

export const verifyAccessToken = (req,res,next)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader.split(' ')[1];

    if(!token){
        return res.status(400).json({message:"Access token is required"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({message:"Invalid or expired access token"});
    }


}