import express from "express";
import morgan from "morgan"
import db from "./db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import problemRoutes from "./routes/problemRoutes.js";
const app = express();
morgan("tiny")

db(); //db connection

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, JustLeet API is running!');
})



app.use('/api/auth',(authRoutes));
app.use('/api/user',(userRoutes));
app.use('/api/problem',(problemRoutes));

app.listen(3000,(err)=>{
    if(err)console.error(err);
    console.log("Backend connected successfully")
})