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
app.use(express.json());

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

// async function savedUsermodel(userDetails) {
//     try {
//         // Check if a user with the same userName already exists
//         const existingUser = await User.findOne({ userName: userDetails.userName });

//         if (existingUser) {
//             console.log("User already exists:", existingUser);
//             // You can choose to update the existing user's details here if needed
//             // existingUser.someField = userDetails.someField;
//             // await existingUser.save();
//         } else {
//             // Save the new user details
//             const savedUser = await userDetails.save();
//             console.log("User details saved:", savedUser);
//         }
        
//         // Remove duplicates if userName is null
//         if (userDetails.userName === null) {
//             const duplicateUsers = await User.find({ userName: null });

//             if (duplicateUsers.length > 1) {
//                 const userToKeep = duplicateUsers[0];
//                 await User.deleteMany({ userName: null, _id: { $ne: userToKeep._id } });
//                 console.log('Duplicates removed successfully.');
//             }
//         }
//     } catch (err) {
//         console.error(err);
//     }
// }

app.post("/register", async (req, res) => {

    // Our register logic starts here
    try {
      // Get user input
      const { first_name, last_name, username, email, password } = req.body;
  
      // Validate user input
      if (!(email && password && first_name && last_name)) {
        res.status(400).send("All input is required");
      }
  
      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await User.findOne({ email });
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }
  
      //Encrypt user password
      encryptedPassword = await bcrypt.hash(password, 10);
      encryptedConfirmPassword = await bcrypt.hash(password, 10);
  
      // Create user in our database
      const user = await User.create({
        first_name,
        last_name,
        username,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
        confirmedpassword:encryptedConfirmPassword
      });
  
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      // save user token
      user.token = token;
  
      // return new user
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
  });

  app.post("/login", async(req, res)=>{
    try{
        const {email, password} = req.body;
        if(!(email && password)){
            res.status(404).send("All input is required");
        }
        const user = await User.findOne({email});
        if(user && ( await bcrypt.compare(password, user.password))){
            const token = jwt.sign(
                {user_id: user._id, email},
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",

                }
            );
            user.token = token
            res.status(200).json(user);
        }
        res.status(400).send("Invalid credentials");

    }catch(err){
        console.log(err)
    }
    }
  )


// const Users = mongoose.model('User');

// Create a user details object (replace this with your actual userDetails object)
// const usersDetails = new Users({ /* your user details here */
// userName: 'Legendlee',
// email: 'drlove@example.co.uk',
// password:"password",
// createdAt: new Date(),
// });

// Call the function to save user details and potentially remove duplicates
// savedUsermodel(usersDetails);


app.use("/v1", route);

app.listen(port, () => {
    console.log(`Listening on port ${port} here we go!`);
})

app.use(express.json()); // Add this line to parse JSON requests

// app.post("/register", (req, res) => {
//     bcrypt.hash(req.body.password, 10)
//         .then((hashedPassword) => {
//             console.log("Hashed Password:", hashedPassword); // Add this line for debugging
            
//             const user = new User({
//                 // userName: req.body.userName, // Uncomment this line if needed
//                 email: req.body.email,
//                 password: hashedPassword,
//                 confirmpassword: hashedPassword, // It seems like this should be 'confirmpassword'
//             });
//             user.save()
//                 .then((result) => {
//                     res.status(201).send({
//                         message: "User created successfully!",
//                         result,
//                     });
//                 })
//                 .catch((err) => {
//                     res.status(500).send({
//                         message: "Error creating user",
//                         err,
//                     });
//                 });
//         })
//         .catch((e) => {
//             res.status(500).send({
//                 message: "Password not hashed successfully",
//                 e,
//             });
//         });
// });








