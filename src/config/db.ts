import mongoose from "mongoose";

export const connectDB = async(): Promise<void> => {

    const dbURL = process.env.MONGODB_URI;

    try {
        
        if(!dbURL){
            throw new Error("MONGODB url is undefined from the enviroment variables.")
        }

        const connection = await mongoose.connect(dbURL);

        console.log(`MONGODB connected!!! Server running on port  ${connection.connection.host}`);

    } catch (error) {
        console.error("Connection Failed");
        process.exit(1);
    }
}
