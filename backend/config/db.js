import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://bonkiss:kirill0315@cluster0.dv5rweu.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}