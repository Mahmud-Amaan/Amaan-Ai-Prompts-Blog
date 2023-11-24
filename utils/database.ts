import mongoose from "mongoose";

let isConnected: boolean = false;

const mongoapi = process.env.MONGODB_URI;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("=> using existing database connection");
    return Promise.resolve();
  }

  try {
    console.log("=> using new database connection");
    await mongoose.connect(mongoapi, {
      dbName: "promptverse",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
  } catch (err) {
    console.log(err);
  }
};
