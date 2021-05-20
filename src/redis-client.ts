import redis from "redis";

const REDIS_URL = process.env.REDIS_URL ?? "redis://127.0.0.1:6379";

export const redisClient = redis.createClient({
    url: REDIS_URL,
    retry_strategy: (options) => {
        // reconnect after
        console.log(`Redis connection lost - attempting retry ${options.attempt}`);
        return Math.min(options.attempt * 100, 5000);
    },
});
