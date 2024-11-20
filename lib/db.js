import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("Already connected");
    return;
  }

  if (connectionState === 2) {
    console.log("Connecting...");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "sKart",
      
      bufferCommands: false, // Uncomment if needed
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error in connecting to database:", error.message);
    throw error; // Let the caller handle the error
  }
};

export default connect;
