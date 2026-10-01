import dns from "node:dns";
import mongoose from "mongoose";

// Fix for Windows Node.js c-ares DNS SRV lookup failure with Atlas
try {
  dns.setServers(["8.8.8.8", "8.8.4.4", "1.1.1.1"]);
} catch {
  // ignore if restricted
}

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/the-angaar-labs";

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose | null> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

let cached: MongooseCache = global.mongooseCache || { conn: null, promise: null };

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

export async function connectToDatabase(): Promise<typeof mongoose | null> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 2000,
      connectTimeoutMS: 2000,
    };

    const connectionAttempt = mongoose.connect(MONGODB_URI, opts);
    const hardTimeout = new Promise<null>((resolve) =>
      setTimeout(() => {
        console.warn("[MongoDB] Network firewall timeout (2.5s reached) — switching to resilient offline storage.");
        resolve(null);
      }, 2500)
    );

    cached.promise = Promise.race([connectionAttempt, hardTimeout])
      .then((m) => {
        return m as typeof mongoose | null;
      })
      .catch((err) => {
        console.warn("[MongoDB] Connection warning:", err.message);
        return null;
      });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch {
    cached.promise = null;
    return null;
  }
}
