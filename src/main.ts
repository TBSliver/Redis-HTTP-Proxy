import express from "express";
import { Response } from "express-serve-static-core";
import redis from "redis";
import {setsRouter} from "./commands/sets";
import {stringsRouter} from "./commands/strings";

const PORT = process.env.PORT ?? 3000;
const REDIS_URL = process.env.REDIS_URL ?? "redis://127.0.0.1:6379";

const app = express();
app.use(express.json());
export const redisClient = redis.createClient({
    url: REDIS_URL,
    retry_strategy: (options) => {
        // reconnect after
        console.log(`Redis connection lost - attempting retry ${options.attempt}`);
        return Math.min(options.attempt * 100, 5000);
    },
});

export const redisCallback = (res: Response<any, Record<string, any>, number>) => (err: any, val: any) => {
    if (err) {
        res.status(500);
        res.json(err);
    }
    res.json(val);
}

app.get("/", (req, res) => {
    redisClient.ping(redisCallback(res))
});

app.use(setsRouter);
app.use(stringsRouter);

app.listen(PORT, () => {
    if (process.env?.NODE_ENV !== "production")
        console.log(`server listening at http://localhost:${PORT}`);
});

