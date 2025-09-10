import mongoose from "mongoose";

async function connectMongoDB() {

    return mongoose
    .connect("mongodb+srv://ghanshyamd5402_db_user:saxHtNAyMqyni1zT@cluster0.on4v9nr.mongodb.net/UrlSortener?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=> console.log("Mongodb connected!"))
    .catch((err)=>console.log("Mongo err", err))
}

export default connectMongoDB;