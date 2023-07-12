import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"Name is Require"],
    },
    email:{
        type:String,
        required:[true,"Email is Require"],
        unique: true,
    },
    // password:{
    //     type:String,
    //     required:[true,"Password is Reqiured"],
    //     minlength:[6,"Password length should br greater than 6 character"],
    // },
    batch:{
        type:String,
        reqiured:true
    }
},
{ timestamps: true}
);
export default mongoose.model('users',userSchema)