import { Router } from "express"
import Problem from "../models/Problem.js";

const router = Router();

router.post("/createProblem", async(req, res) => {
    const {
        userId,
        title,
        url,
        difficulty,
        status,
        tags,
        notes,
        markedForReview,
        
    } = req.body;

    try {
    const problem = new Problem({
        userId,
        title,
        url,
        difficulty,
        status,
        tags,
        notes,
        markedForReview
    })

    await problem.save();
    res.status(200).json({message:"Problem Created Successfully"});

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to create problem" });
    }

});


export default router;