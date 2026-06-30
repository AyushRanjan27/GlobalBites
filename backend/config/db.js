import mongoose from "mongoose";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const resolveMongoUri = () =>
  process.env.MONGODB_URI ||
  process.env.MongoDB_URI ||
  process.env.MONGO_URI ||
  "";

export const isMongoConnected = () => mongoose.connection.readyState === 1;

const connectDB = async () => {
  const mongoUri = resolveMongoUri();
  if (!mongoUri) {
    console.warn(
      "MongoDB URI missing. Starting server without database connectivity. Configure MONGODB_URI to enable database-backed routes."
    );
    return false;
  }

  const maxAttempts = Number(process.env.MONGO_CONNECT_RETRIES || 3);

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      await mongoose.connect(mongoUri, {
        serverSelectionTimeoutMS: 10000,
      });
      console.log("MongoDB connected successfully.");
      return true;
    } catch (error) {
      const code = error?.code || "UNKNOWN";
      const message = error?.message || String(error);
      console.error(`MongoDB connection failed (attempt ${attempt}/${maxAttempts}) [${code}]: ${message}`);

      if (attempt < maxAttempts) {
        await sleep(1000 * attempt);
      }
    }
  }

  console.warn("MongoDB unavailable after retries. Starting server without database connectivity.");
  return false;
};

export default connectDB;
