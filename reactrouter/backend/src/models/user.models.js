import mongoose,{Schema} from "mongoose";


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    message: {
        type: String

    },
    phone: {
        type: Number

    }
}, { timestamps: true });

export const User = mongoose.model("User", userSchema)
