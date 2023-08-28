import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    // userName:{
    //     type:String,
    //     // required: true,
    //     // unique:[true, "Username Exist"],
    // },
    // email:{
    //     type:String,
    //     // required: true,
    //     // unique:[true, "email exists"]
    // },
    // password:{
    //     type: String,
    //     // required:[true, "Password required"],
    //     // unique: false,
    // },
    // confirmpassword:{
    //     type: String,
    //     // required:[true, "Password required"],
    //     // unique: false,
    // }

    first_name: {
        type: String,
        default: null
    },
    last_name:{
        type: String,
        default: null
    },
    email:{
        type:String,
        default: null
    },
    password:{
        type:String,
        unique: true
    },
    confirmpassword:{
        type:String,
        unique: true
    }
})

export default mongoose.model("User", userSchema)
