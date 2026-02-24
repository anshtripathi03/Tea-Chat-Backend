import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required : true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber:{
        type: Number,
    },
    isEmailVerified:{
        type: Boolean,
        required: true,
        default:"false"
    },
    isPhoneVerified:{
        type: Boolean,
        required: true,
        default:"false"
    },
    authProvider:{
        type: String,
        enum:["google","local"],
        default: "local"
    },
    name:{
        type: String,
    },
    profilePic:{
        type: String,
    },
    bio:{
        type:String,
        default:"Hey There! I'm using Tea-Chat"
    },
    accountType:{
        type: String,
        enum: ["public", "private"],
        required: true
    },
    isOnline:{
        type: Boolean,
        default: true,
        required: true
    },
    lastSeen:{
        type: Date,
        required: true,
        default: Date.now,
    },
    readReceipt:{
        type: Boolean,
        default: true,
        required: true
    },
    lastSeenVisibility:{
        type: String,
        enum: ["everyone" , "connections" , "nobody"],
        default: "everyone",
        required: true
    },
    profilePhotoVisibility:{
        type: String,
        enum: ["everyone" , "connections" , "nobody"],
        required: true,
        default: "everyone"
    },
    statusVisibility:{
        type: String,
        enum: ["everyone" , "connections"],
        required: true,
        default: "everyone"
    },
    accountStatus:{
        type: String,
        enum: ["active","suspended","deleted"],
        required: true,
        default: "active"
    },
    refreshToken:{
        type: String
    },
    refreshTokenExpiresAt:{
        type: Date
    }
},{
    timestamps: true
});

export default mongoose.model("Users", userSchema);