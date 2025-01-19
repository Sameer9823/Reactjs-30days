import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config(
    {
        path: "./.env"
    }
);

const DB = process.env.DATABASE;
const PORT = process.env.PORT || 3000;

mongoose.connect(DB).then(() =>{
    console.log("Connected to MongoDB");
})

.catch((err) => {
    console.log(err.message);
    
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
