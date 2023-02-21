import mongoose, { connect } from "mongoose";
import { MONGODB_URI } from "./config.js";

//concepto nuevo top level await 
//podemos usar el codigo sin el async
//try {
//    const connectMongo = await mongoose.connect('mongodb+srv://animas:animas1234@cluster0.gmtiv.mongodb.net/?retryWrites=true&w=majority')
//    console.log(`conectado con la base de datos: ${connect.connection.name}`);
//  } catch (error) {
//  console.log(`Error: ${error.message}`);
//   process.exit(1);
//   } 

export const connectDB = async () => {
   try {
    mongoose.set('strictQuery', false);
    const connectMongo = await mongoose.connect(MONGODB_URI);
    console.log(`conectado con la base de datos: ${connectMongo.connection.name}`);
   } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
   }
}