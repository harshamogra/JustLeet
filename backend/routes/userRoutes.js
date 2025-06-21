import { Router } from "express"
import User from "../models/User.js";
import axios from "axios";

const router = Router();

router.put('/leetcodeId', async(req,res)=>{ //store leetcodeid
    const{userId, leetcodeId} = req.body;
    try {
        const user =await User.findByIdAndUpdate(userId,{leetcodeId: leetcodeId},{new:true});
        
        return res.status(200).json({ message: "Leetcode ID updated successfully"});
       
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
})

router.put('/planText', async(req,res)=>{ //store plan text
    const{userId, planText} = req.body;
    try {
        const user = await User.findByIdAndUpdate(userId, {planText: planText}, {new: true});
        return res.status(200).json({ message: "Plan text updated successfully"});
    } catch (err) {
        return res.status(500).json({ message: "Internal server error" });
        console.error(err);
    }
})

router.get('/leetcodestats/:leetcodeId', async(req,res)=>{
     //get leetcode stats
    const {leetcodeId} = req.params;
        const query = `
        query userProfile($username: String!) {
            matchedUser(username: $username) {
                username
                submitStats: submitStatsGlobal {
                acSubmissionNum {
                    difficulty
                    count
                    submissions
                }
                }
            }
            }
        `;
    try{
        const response  =await axios.post(`https://leetcode.com/graphql`, //for graphql its always post request to fetch data
            {
            query: query,
            variables: { username: leetcodeId }
            },
            {
                headers:{
                    "Content-Type": "application/json",
                }
            }
            
        );
        const data = response.data.data.matchedUser;
        if (!data) {
            return res.status(404).json({ message: "User not found" });
        }
        
        return res.status(200).json(data);

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
        
    }
})

export default router;