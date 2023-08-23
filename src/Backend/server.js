import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
dotenv.config({ path: './config/.env' })
import userModel from "./userModel.js";


// import mongoose from "mongoose";

const route = express.Router();
const app = express();
const port = process.env.PORT || 8000
const dbUrl = process.env.DBCONNECTION

async function connectToDataBase() {
    try {
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB Connected!')
        
    }catch(error){
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToDataBase();
const userDetails = new userModel
// userDetails.save((err, data)=>{
//     if(err){
//         console.error(err)
//     }else{
//         console.log("Data saved to DB successfully", data)
//     }
// })

async function savedUsermodel(){
    try{
        const savedUsermodel = await userDetails.save();
        console.log("User details saved:" , savedUsermodel)
    }catch(err){
        console.error(err)
    }
}

savedUsermodel()

app.use("/v1", route);

app.listen(port, () => {
    console.log(`Listening on port ${port} here we go!`);
})





