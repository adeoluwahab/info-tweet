import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";

dotenv.config();

// Create the Redis client
const redis = Redis.fromEnv();

// Create the rate limiter
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "20 s"), // 5 requests every 20 seconds
  analytics: true,
});

export { redis, ratelimit };
