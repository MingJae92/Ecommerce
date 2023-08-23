import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        // required: true,
        // unique:[true, "Username Exist"],
    },
    email:{
        type:String,
        // required: true,
        // unique:[true, "email exists"]
    },
    password:{
        type: String,
        // required:[true, "Password required"],
        // unique: false,
    },
    confirmpassword:{
        type: String,
        // required:[true, "Password required"],
        // unique: false,
    }
})

export default mongoose.model("User", userSchema)
