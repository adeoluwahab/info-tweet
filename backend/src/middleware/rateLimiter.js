import { ratelimit } from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  console.log("✅ Rate limiter middleware hit");

  try {
    const identifier = req.ip;
    console.log("Identifier:", identifier);

    const result = await ratelimit.limit(identifier);
    console.log("Rate limit result:", result);

    if (!result.success) {
      return res.status(429).json({
        message: "Too many requests",
      });
    }

    next();
  } catch (error) {
    console.error("Rate limiter error:", error);
    next(error);
  }
};

export default rateLimiter;
