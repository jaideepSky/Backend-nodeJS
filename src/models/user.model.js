import mongoose, {  Schema } from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const userSchema = new Schema({

    username :{
        type : String,
        required : true,
        unique : true , 
        lowercase : true,
        trime : true ,
        index : true
    },
    email :{
        type : String,
        required : true,
        unique : true , 
        lowercase : true,
        trime : true ,
    },
    fullname :{
        type : String,
        required : true,
        trime : true ,
        index : true
    },
   avatar : {
    type : String,
    required : true,

   },
   coverimage :{
    type : String,
   },
   watchHistory: [
    {
        type:Schema.Types.ObjectId,
        ref:"Video"
    }
   ],
   password : {
    type:String,
    required : [true , "Password is required"],

   },

   refreshToken:{
    type:String
   }


},{timestamps:true})

userSchema.pre("save" , async function(next){
    if(!this.isModified("password")){
return  next()

    }
    else{
        this.password = bcrypt.hash(this.password , 10)
        next()
    }
})

export const User =  mongoose.model("User" , userSchema)