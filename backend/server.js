import express  from "express"; 
import mongoose from "mongoose"; 
import cors from "cors"; 
import dotenv from "dotenv"; 
import SportRoute from "./Routes/SportRoute.js";

dotenv.config();

const mongoDBUrl = process.env.MongoDBUrl; 
const PORT = process.env.PORT;

const app = express(); 
 

//MiddleWares 
app.use(cors()); 
app.use(express.json()); 


//Routes  
  //sport
app.use("/sport", SportRoute); // For creating



mongoose.connect(mongoDBUrl, {useNewUrlParser: true, useUnifiedTopology: true}) 
.then(() => {
    console.log("Connected to database successfully :) ")
}) 
.catch((error) => {
    console.log("Database connection failed");
    console.log(error);
}) 

app.listen(PORT, () =>{
    console.log(`Server is running successfull on http://localhost:${PORT}`)
})