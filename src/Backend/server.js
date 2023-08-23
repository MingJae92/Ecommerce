import express, { request } from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
dotenv.config({ path: './config/.env' })
import userModel from "./userModel.js";
import User from "./userModel.js"
import bcrypt from "bcrypt"

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

    } catch (error) {
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

// async function savedUsermodel() {
//     try {
//         const savedUsermodel = await userDetails.save();
//         console.log("User details saved:", savedUsermodel)
//     } catch (err) {
//         console.error(err)
//     }
// }

// savedUsermodel()

async function savedUsermodel(userDetails) {
    try {
        // Check if a user with the same userName already exists
        const existingUser = await User.findOne({ userName: userDetails.userName });

        if (existingUser) {
            console.log("User already exists:", existingUser);
            // You can choose to update the existing user's details here if needed
            // existingUser.someField = userDetails.someField;
            // await existingUser.save();
        } else {
            // Save the new user details
            const savedUser = await userDetails.save();
            console.log("User details saved:", savedUser);
        }
        
        // Remove duplicates if userName is null
        if (userDetails.userName === null) {
            const duplicateUsers = await User.find({ userName: null });

            if (duplicateUsers.length > 1) {
                const userToKeep = duplicateUsers[0];
                await User.deleteMany({ userName: null, _id: { $ne: userToKeep._id } });
                console.log('Duplicates removed successfully.');
            }
        }
    } catch (err) {
        console.error(err);
    }
}


const Users = mongoose.model('User');

// Create a user details object (replace this with your actual userDetails object)
const usersDetails = new Users({ /* your user details here */
userName: 'john_doe',
email: 'john@example.com',
createdAt: new Date(),
});

// Call the function to save user details and potentially remove duplicates
savedUsermodel(usersDetails);


app.use("/v1", route);

app.listen(port, () => {
    console.log(`Listening on port ${port} here we go!`);
})

app.post("/register", (res) => {
    bcrypt.hash(req.body.password, 10)
        .then((hashedPassword)=>{
            const user = new User({
                // userName: request.body.userName,
                email: request.body.email,
                password: hashedPassword,
                // confirmpassword: hashedPassword,
            });
            user.save().then((result)=>{
                res.status(201).send({
                    message: "User created successfully!",
                    result,
                });
            }).catch((err)=>{
                res.status(500).send({
                    message: "Error creating user",
                    err
                })
            })
        })
        .catch((e)=>{
            res.status(500).send(
                {message: "Password not hashed successfully",
                e,
            });
        });
})







