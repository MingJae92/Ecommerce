import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
dotenv.config({ path: './config/.env' })

// import mongoose from "mongoose";

const route = express.Router();
const app = express();
const port = process.env.PORT 

async function connectToDataBase() {
    try {
        await mongoose.connect(process.env.DBCONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB Connected!')
        
    }catch(error){
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToDataBase();


app.use("/v1", route);

app.listen(port, () => {
    console.log(`Listening on port ${port} here we go!`);
})





